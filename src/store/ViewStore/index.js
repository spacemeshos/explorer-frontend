// @flow
import {
  observable,
  computed,
  action,
  decorate,
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
  NOT_FOUND,
} from '../../config/constants';

class ViewStore {
  constructor(apiFetch: Object) {
    this.fetch = apiFetch;
  }

  fetch = null;

  currentView = {
    name: null,
    id: null,
    subPage: null,
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
      case NOT_FOUND:
        return this.buildUrlString(this.currentView);
      default:
        return '/404';
    }
  }

  buildUrlString(data: Object) {
    if (data.name && data.id && data.subPage) {
      return `/${data.name}/${data.id}/${data.subPage}`;
    } else if (data.name && data.id) {
      return `/${data.name}/${data.id}`;
    } else {
      return `/${data.name}`;
    }
  }

  showOverview() {
    this.currentView = {
      name: 'overview',
    };
  }

  showPage({ page }) {
    this.currentView = {
      name: page,
    };
  }

  showSearchResult(searchString) {
    const page = this.defineIdType(searchString);
    page ? this.showDetailPage({page, id: searchString}) : this.showDetailPage({page: NOT_FOUND, id:searchString});
    console.log('this.currentView', this.currentView.name);
  }

  showDetailPage({ page, id }) {
    this.currentView = {
      name: page,
      id,
    };
  }

  showSubPage({page, id, subPage}) {
    this.currentView = {
      name: page,
      id,
      subPage,
    };
  }

  linkHandler(e, page, id, subPage) {
    e.preventDefault();
    if (subPage) {
      this.showSubPage({page, id, subPage})
    } else {
      this.showDetailPage({page, id})
    }
  }

  defineIdType(value) {
    return false;
  }

}

decorate(ViewStore, {
  currentView: observable,
  currentPath: computed,
  linkHandler: action,
  showSearchResult: action,
  showPage: action,
  showDetailPage: action,
  showSubPage: action,
});

export default ViewStore;
