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
      default:
        return '/not-found';
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
}

decorate(ViewStore, {
  currentView: observable,
  currentPath: computed,
  showPage: action,
  showDetailPage: action,
  showSubPage: action,
});

export default ViewStore;
