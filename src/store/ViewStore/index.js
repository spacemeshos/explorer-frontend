// @flow
import {
  observable,
  computed,
  action,
  decorate,
} from 'mobx';

import { fromPromise } from 'mobx-utils';
import { overviewMocker, transactionMocker, getMockerByPage } from '../../helper/mocker';

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
  NOT_FOUND,
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

  // TODO: change overviewMocker() to this.fetch('/your url') for getting real data
  showOverview() {
    this.currentView = {
      name: OVERVIEW,
      data: fromPromise(this.fetch('txs')),
    };
    this.mainInfo = fromPromise(overviewMocker());
  }

  showPage({ page }) {
    this.currentView = {
      name: page,
      data: fromPromise(this.fetch(page))
    };
  }

  showSearchResult(searchString) {
    const page = this.defineIdType(searchString);
    page ? this.showDetailPage({ page, id: searchString }) : this.showDetailPage({ page: NOT_FOUND, id: searchString });
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
  networks: observable,
  currentPath: computed,
  getNetworks: action,
  linkHandler: action,
  showSearchResult: action,
  showPage: action,
  showDetailPage: action,
  showSubPage: action,
});

export default ViewStore;
