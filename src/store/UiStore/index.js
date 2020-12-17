// @flow
import {
  makeAutoObservable,
  observable,
  action,
} from 'mobx';

class UiStore {
  constructor(apiFetch: Object) {
    this.theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

    makeAutoObservable(this, {
      color: observable,
      theme: observable,
      changeTheme: action,
      getNetworkInfo: action,
    });
    document.documentElement.classList.add(`theme-${this.theme}`);
    this.fetch = apiFetch;
  }

  color = 'green';

  fetch = null;

  async getNetworkInfo() {
    try {
      const { network } = await this.fetch('network-info');
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

  changeTheme(e) {
    this.theme = e.target.checked ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${this.theme}`);
  }
}

export default UiStore;
