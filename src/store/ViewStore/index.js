// @flow
import {
  observable,
  computed,
  action,
  decorate,
} from 'mobx';

class ViewStore {
  constructor(apiFetch: Object) {
    this.fetch = apiFetch;
  }

  fetch = null;

  currentView = {
    name: null,
    id: null,
    supPage: null,
  };

  get currentPath() {
    switch (this.currentView.name) {
      case 'overview': return '/';
      case 'epochs':
        return this.buildUrlString(this.currentView);
      case 'layers':
        return this.buildUrlString(this.currentView);
      case 'txns':
        return this.buildUrlString(this.currentView);
      case 'rewards':
        return this.buildUrlString(this.currentView);
      case 'accounts':
        return this.buildUrlString(this.currentView);
      case 'smesher':
        return this.buildUrlString(this.currentView);
      default:
        return '/not-found';
    }
  }

  buildUrlString(data: Object) {
    return `/${data.name}`;
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
}

decorate(ViewStore, {
  currentView: observable,
  currentPath: computed,
  showDocument: action,
});

export default ViewStore;
