// @flow
import {
  decorate,
  observable,
  action,
} from 'mobx';

class UiStore {
  constructor(apiFetch: Object) {
    this.theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
    document.documentElement.classList.add(`theme-${this.theme}`);
    this.fetch = apiFetch;
  }

  color = 'green';

  fetch = null;

  async getNetworkInfo() {
    try {
      const { network } = await this.fetch('network-info');
      console.log(network.issynced);
      if (network.lastlayerts < ((Math.floor(Date.now() / 1000)) - (network.duration)) && network.issynced === false) {
        this.color = 'orange';
      } else if ((network.lastlayer + 24) < network.lastapprovedlayer) {
        this.color = 'red';
      } else {
        this.color = 'green';
      }
    } catch (e) {
      console.log('Error', e);
    }
  }

  changeTheme(e) {
    this.theme = e.target.checked ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${this.theme}`);
  }
}

decorate(UiStore, {
  color: observable,
  theme: observable,
  changeTheme: action,
  getNetworkInfo: action,
});

export default UiStore;
