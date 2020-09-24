// @flow
import {
  observable,
  computed,
  action,
  decorate, runInAction,
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
  }
];

class ViewStore {
  constructor(apiFetch: Object) {
    this.fetch = apiFetch;
  }

  fetch = null;
  networks = [];
  mainInfo = [];

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
        return '/404';
    }
  }

  buildUrlString(data: Object) {
    if (data.name && (data.id || data.id === 0) && data.subPage) {
      return `/${data.name}/${data.id}/${data.subPage}`;
    } if (data.name && (data.id || data.id === 0) && !data.subPage) {
      return `/${data.name}/${data.id}`;
    }
    return `/${data.name}`;
  }

  async showOverview() {
    this.resetCurrentView();
    this.currentView.name = OVERVIEW;
    this.currentView.status = STATUS_LOADING;

    try {
      const rawData = await this.fetch('txs');
      this.mainInfo = await this.fetch('network-info');

      runInAction(() => {
        this.currentView.status = STATUS_SUCCESS;
        this.currentView.data = rawData.data;
        this.currentView.pagination = rawData.pagination;
      })
    } catch (e) {
      this.currentView.status = STATUS_ERROR;
    }
  }

  async showPage({ page }) {
    this.resetCurrentView();
    this.currentView.name = page;
    this.currentView.status = STATUS_LOADING;

    try {
      const rawData = await this.fetch(page);
      this.mainInfo = await this.fetch('network-info');

      runInAction(() => {
        this.currentView.status = STATUS_SUCCESS;

        if (page === SMART_WALLET) {
          this.currentView.data = smartWalletData;
        } else {
          this.currentView.data = rawData.data;
        }

        this.currentView.pagination = rawData.pagination;
      })
    } catch (e) {
      this.currentView.status = STATUS_ERROR;
    }
  }

  async showSearchResult(searchString) {
    try {
      const result = await this.fetch(`search/${searchString}`);
      const stringData = result.redirect.split('/');
      this.showDetailPage({page: stringData[1], id: stringData[2]});

    } catch(e) {
      this.currentView.name = NOT_FOUND;
    }
  }

  getPaginationData(page, pageNumber) {
    const pageSize = 20;

    if (page === OVERVIEW) return;
    const pathName = window.location.pathname.slice(1);

    this.fetch(`${pathName}?page=${pageNumber}&pagesize=${pageSize}`).then(
      (result) => {
        this.currentView.data = [...this.currentView.data, ...result.data];
        this.currentView.pagination = result.pagination;
        this.currentView.status = STATUS_SUCCESS;
      },
      (error) => {
        this.currentView.status = STATUS_ERROR;
      }
    );
  }

  getNetworks() {
    // TODO uncomment when will be available
    // this.fetch(`networks`).then(data => {
    //   this.networks = data.map(item => ({value: item.domain, label: item.name}))
    // });
  }

  async showDetailPage({ page, id }) {
    this.resetCurrentView();
    this.currentView.name = page;
    this.currentView.id = id;
    this.currentView.status = STATUS_LOADING;

    try {
      const rawData = await this.fetch(`${page}/${id}`);
      this.mainInfo = await this.fetch('network-info');

      runInAction(() => {
        this.currentView.status = STATUS_SUCCESS;
        this.currentView.data = rawData.data[0];
      })
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
      const rawData = await this.fetch(`${page}/${id}/${subPage}`);
      this.mainInfo = await this.fetch('network-info');

      runInAction(() => {
        this.currentView.status = STATUS_SUCCESS;
        this.currentView.data = rawData.data;
        this.currentView.pagination = rawData.pagination;
      })
    } catch (e) {
      this.currentView.status = STATUS_ERROR;
    }
  }

  resetCurrentView() {
    return this.currentView = {
      name: null,
      id: null,
      subPage: null,
      data: null,
      pagination: null,
      status: STATUS_LOADING,
    }
  }

  linkHandler(e, page, id, subPage) {
    e.preventDefault();
    if (subPage) {
      this.showSubPage({ page, id, subPage });
    } else {
      this.showDetailPage({ page, id });
    }
  }

  defineIdType(value) {
    if (value.length === 42) {
      return ACCOUNTS;
    } else if (value.length > 42) {
      return TXNS;
    } else if (value.length < 42){
      return LAYERS;
    } else {
      return false;
    }
  }
}

decorate(ViewStore, {
  currentView: observable,
  mainInfo: observable,
  networks: observable,
  currentPath: computed,
  getNetworks: action,
  linkHandler: action,
  getPaginationData: action,
  showSearchResult: action,
  showPage: action,
  showDetailPage: action,
  showSubPage: action,
});

export default ViewStore;
