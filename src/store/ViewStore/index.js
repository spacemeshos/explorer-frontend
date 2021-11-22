/* eslint-disable */
// @flow
import {
  observable,
  computed,
  action,
  makeAutoObservable, runInAction, reaction, toJS
} from 'mobx';

import {
  OVERVIEW,
  EPOCHS,
  LAYERS,
  TXNS,
  REWARDS,
  ACCOUNTS,
  SMESHER,
  SMART_WALLET,
  BLOCKS,
  NOT_FOUND, STATUS_LOADING, STATUS_SUCCESS, STATUS_ERROR, ATXS,
} from '../../config/constants';
import { reMappingNetworkArray } from '../../helper/mapping';
import isEmpty from '../../helper/isEmpty';

const DISCOVERY_SERVICE_URL = process.env.REACT_APP_DISCOVERY_SERVICE_URL || 'https://discover.spacemesh.io/networks.json';

const smartWalletData = [
  {
    address: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    name: 'SM W #1',
    created: '3 days ago',
    balance: '11',
  },
  {
    address: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    name: 'SM W #1',
    created: '3 days ago',
    balance: '11',
  },
];

class ViewStore {
  constructor(apiFetch: Object) {
    this.networks = [];

    makeAutoObservable(this, {
      currentView: observable,
      mainInfo: observable,
      networks: observable.ref,
      network: observable.ref,
      currentPath: computed,
      linkHandler: action,
      getPaginationData: action,
      showSearchResult: action,
      showPage: action,
      showDetailPage: action,
      showSubPage: action,
      getNetworkInfo: action,
      color: observable,
    });
    this.fetch = apiFetch;

    // TODO: Check functionality of the reaction code below (do nothing currently)
    reaction(
      () => this.network,
      (value, previousValue) => {
        if (previousValue.value) {
          const { name, id, subPage } =  toJS(this.currentView);
          if (name && name !== OVERVIEW &&isEmpty(id) && isEmpty(subPage)) {
            this.showPage({page: name});
          }
          else if (name && !isEmpty(id) && isEmpty(subPage)) {
            this.showDetailPage({page: name, id});
          }
          else if (name && !isEmpty(id) && !isEmpty(subPage)) {
            this.showSubPage({page: name, id, subPage})
          } else {
            this.showOverview();
          }
        }
      }
    )
  }

  color = 'green';

  fetch = null;

  network = { value: null, label: null, explorer: null, dash: null };

  mainInfo = {};

  currentView = {
    name: null,
    id: null,
    subPage: null,
    data: null,
    pagination: null,
    status: STATUS_LOADING,
  };

  get currentPath() {
    switch (this.currentView.name) {
      case OVERVIEW: return '/';
      case EPOCHS:
        return this.buildUrlString(this.currentView);
      case LAYERS:
        return this.buildUrlString(this.currentView);
      case TXNS:
        return this.buildUrlString(this.currentView);
      case ATXS:
        return this.buildUrlString(this.currentView);
      case REWARDS:
        return this.buildUrlString(this.currentView);
      case ACCOUNTS:
        return this.buildUrlString(this.currentView);
      case SMESHER:
        return this.buildUrlString(this.currentView);
      case SMART_WALLET:
        return this.buildUrlString(this.currentView);
      case BLOCKS:
        return this.buildUrlString(this.currentView);
      case NOT_FOUND:
        return this.buildUrlString(this.currentView);
      default:
        return '/not-found';
    }
  }

  setNetworks(data) {
    this.networks = data;
  }

  setNetwork(data) {
    this.network = this.networks.find(item => item.value === data.value);
  }

  buildUrlString(data: Object) {
    if (data.name && (data.id || data.id === 0) && data.subPage) {
      return `/${data.name}/${data.id}/${data.subPage}`;
    } if (data.name && (data.id || data.id === 0) && !data.subPage) {
      return `/${data.name}/${data.id}`;
    }
    return `/${data.name}`;
  }

  async bootstrap() {
    try {
      const response = await this.fetch(DISCOVERY_SERVICE_URL);
      const networks = reMappingNetworkArray(response);
      this.setNetworks(networks);
      this.setNetwork(networks[0]);
      await this.getNetworkInfo();
    } catch (e) {
      console.log('Error: ', e.message);
    }
  }

  async showOverview() {
    this.resetCurrentView();
    this.currentView.name = OVERVIEW;
    this.currentView.status = STATUS_LOADING;

    try {
      !this.network.value && await this.bootstrap();
      const rawData = await this.fetch(`${this.network.value}txs`);
      this.mainInfo = await this.fetch(`${this.network.value}network-info`);

      runInAction(() => {
        this.currentView.status = STATUS_SUCCESS;
        this.currentView.data = rawData.data;
        this.currentView.pagination = rawData.pagination;
      });
    } catch (e) {
      this.currentView.status = STATUS_ERROR;
    }
  }

  async showPage({ page }) {
    this.resetCurrentView();
    this.currentView.name = page;
    this.currentView.status = STATUS_LOADING;

    try {
      !this.network.value && await this.bootstrap();
      const rawData = await this.fetch(`${this.network.value}${page}`);
      this.mainInfo = await this.fetch(`${this.network.value}network-info`);

      runInAction(() => {
        this.currentView.status = STATUS_SUCCESS;

        if (page === SMART_WALLET) {
          this.currentView.data = smartWalletData;
        } else if(page === REWARDS){
          this.currentView.data = this.getRewardsData(rawData.data);
        } else {
          this.currentView.data = rawData.data;
        }

        this.currentView.pagination = rawData.pagination;
      });
    } catch (e) {
      this.currentView.status = STATUS_ERROR;
    }
  }

  async showDetailPage({ page, id }) {
    this.resetCurrentView();
    this.currentView.name = page;
    this.currentView.id = id;
    this.currentView.status = STATUS_LOADING;

    try {
      !this.network.value && await this.bootstrap();
      const correctId = page === REWARDS ? id.slice(2): id;

      const rawData = await this.fetch(`${this.network.value}${page}/${correctId}`);
      this.mainInfo = await this.fetch(`${this.network.value}network-info`);

      runInAction(() => {
        this.currentView.status = STATUS_SUCCESS;
        if(page === REWARDS) {
          this.currentView.data = this.getRewardsData(rawData.data)[0];
        } else {
          this.currentView.data = rawData.data[0];
        }
      });
    } catch (e) {
      this.currentView.status = STATUS_ERROR;
      this.currentView.name = NOT_FOUND;
    }
  }

  async showSubPage({ page, id, subPage }) {
    this.resetCurrentView();
    this.currentView.name = page;
    this.currentView.id = id;
    this.currentView.subPage = subPage;
    this.currentView.status = STATUS_LOADING;

    try {
      !this.network.value && await this.bootstrap();
      const rawData = await this.fetch(`${this.network.value}${page}/${id}/${subPage}`);
      this.mainInfo = await this.fetch(`${this.network.value}network-info`);

      runInAction(() => {
        this.currentView.status = STATUS_SUCCESS;
        if(subPage === REWARDS) {
          this.currentView.data = this.getRewardsData(rawData.data);
        } else {
          this.currentView.data = rawData.data;
        }
        this.currentView.pagination = rawData.pagination;
      });
    } catch (e) {
      this.currentView.status = STATUS_ERROR;
    }
  }

  async showSearchResult(searchString) {
    try {
      !this.network.value && await this.bootstrap();
      const result = await this.fetch(`${this.network.value}search/${searchString}`);
      const stringData = result.redirect.split('/');
      this.currentView.status = STATUS_SUCCESS;
      this.showDetailPage({ page: stringData[1], id: stringData[2] });
    } catch (e) {
      this.resetCurrentView();
      this.currentView.name = NOT_FOUND;
      this.currentView.id = searchString;
    }
  }

  getPaginationData(page, pageNumber) {
    const pageSize = 20;

    if (page === OVERVIEW) return;
    const pathName = window.location.pathname.slice(1);

    this.fetch(`${this.network.value}${pathName}?page=${pageNumber}&pagesize=${pageSize}`).then(
      (result) => {
        if(page === REWARDS) {
          const rewardsData = this.getRewardsData(result.data);
          this.currentView.data = [...this.currentView.data, ...rewardsData];
        } else {
          this.currentView.data = [...this.currentView.data, ...result.data];
        }

        this.currentView.pagination = result.pagination;
        this.currentView.status = STATUS_SUCCESS;
      },
      (error) => {
        console.log(error);
        this.currentView.status = STATUS_ERROR;
      },
    );
  }

  resetCurrentView() {
    return this.currentView = {
      name: null,
      id: null,
      subPage: null,
      data: null,
      pagination: null,
      status: STATUS_LOADING,
    };
  }

  linkHandler(e, page, id, subPage) {
    e.preventDefault();
    if (subPage) {
      this.showSubPage({ page, id, subPage });
    } else {
      this.showDetailPage({ page, id });
    }
  }

  async getNetworkInfo() {
    try {
      this.mainInfo = await this.fetch(`${this.network.value}network-info`);
      const { network } = toJS(this.mainInfo);

      if ((network.lastlayer + 24) < network.lastapprovedlayer || network.issynced === false) {
        this.color = 'red';
      } else if (network.lastlayerts < ((Math.floor(Date.now() / 1000)) - (network.duration))) {
        this.color = 'orange';
      } else {
        this.color = 'green';
      }
    } catch (e) {
      console.log('Error', e.message);
    }
  }

  getRewardsData(data){
    return data.map(item=>({...item, _id: `0x${item._id}`}))
  }

  defineIdType(value) {
    if (value.length === 42) {
      return ACCOUNTS;
    } if (value.length > 42) {
      return TXNS;
    } if (value.length < 42) {
      return LAYERS;
    }
    return false;
  }
}

export default ViewStore;
