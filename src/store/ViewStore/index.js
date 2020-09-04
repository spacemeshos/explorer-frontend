// @flow
import {
  observable,
  computed,
  action,
  decorate, toJS, runInAction,
} from 'mobx';

import { fromPromise } from 'mobx-utils';
import { overviewMocker, getMockerByPage } from '../../helper/mocker';

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
  NOT_FOUND, STATUS_LOADING, STATUS_SUCCESS, STATUS_ERROR,
} from '../../config/constants';

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
    if (data.name && data.id && data.subPage) {
      return `/${data.name}/${data.id}/${data.subPage}`;
    } if (data.name && data.id) {
      return `/${data.name}/${data.id}`;
    }
    return `/${data.name}`;
  }

  async showOverview() {
    this.currentView.data = null;
    this.currentView.pagination = null;
    this.currentView.name = OVERVIEW;
    this.currentView.status = STATUS_LOADING;
    try {
      const rawData = await this.fetch('txs');
      this.mainInfo = await overviewMocker();

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
    this.currentView.data = null;
    this.currentView.pagination = null;
    this.currentView.name = page;
    this.currentView.status = STATUS_LOADING;
    try {
      const rawData = await this.fetch(page);
      runInAction(() => {
        this.currentView.status = STATUS_SUCCESS;
        this.currentView.data = rawData.data;
        this.currentView.pagination = rawData.pagination;
      })
    } catch (e) {
      this.currentView.status = STATUS_ERROR;
    }
  }

  showSearchResult(searchString) {
    const page = this.defineIdType(searchString);
    page ? this.showDetailPage({ page, id: searchString }) : this.showDetailPage({ page: NOT_FOUND, id: searchString });
  }

  getPaginationData(page, pageNumber) {
    console.log('getPaginationData page');
    const pageSize = 20;

    this.fetch(`${page}?page=${pageNumber}&pagesize=${pageSize}`).then(
      (result) => {
        this.currentView.name = page;
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

  showDetailPage({ page, id }) {
    this.currentView = {
      name: page,
      data: fromPromise(getMockerByPage(page)),
      id,
    };
  }

  showSubPage({ page, id, subPage }) {
    this.currentView = {
      name: page,
      data: fromPromise(getMockerByPage(subPage)),
      id,
      subPage,
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

  static defineIdType(value) {
    return false;
  }
}

decorate(ViewStore, {
  currentView: observable,
  mainInfo: observable,
  dataArray: observable,
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
