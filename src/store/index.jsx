import {
  makeAutoObservable, observable, action, toJS, runInAction,
} from 'mobx';
import React from 'react';
import { reMappingNetworkArray } from '../helper/mapping';

const DISCOVERY_SERVICE_URL = process.env.REACT_APP_DISCOVERY_SERVICE_URL || 'https://discover.spacemesh.io/networks.json';

export default class Store {
  theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

  networks = [];

  network = { value: null, label: null, explorer: null, dash: null };

  networkInfo = {};

  networkColor = 'green';

  fetch = null;

  constructor(fetch) {
    makeAutoObservable(this, {
      theme: observable,
      networks: observable.ref,
      network: observable.ref,
      networkInfo: observable,
      networkColor: observable,
      color: observable,

      getNetworkInfo: action,
      showSearchResult: action,
    }, { autoBind: true });
    this.fetch = fetch;
    document.documentElement.classList.add(`theme-${this.theme}`);
    this.bootstrap();
  }

  changeTheme(e) {
    this.theme = e.target.checked ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${this.theme}`);
  }

  setNetworks(data) {
    this.networks = data;
  }

  setNetwork(data) {
    this.network = this.networks.find((item) => item.value === data.value);
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

  async getNetworkInfo() {
    try {
      const networkInfo = await this.fetch(`${this.network.value}network-info`);
      const { network } = toJS(networkInfo);
      let color = 'green';

      if ((network.lastlayer + 24) < network.lastapprovedlayer || network.issynced === false) {
        color = 'red';
      } else if (network.lastlayerts < ((Math.floor(Date.now() / 1000)) - (network.duration))) {
        color = 'orange';
      }

      runInAction(() => {
        this.networkInfo = networkInfo;
        this.color = color;
      });
    } catch (e) {
      console.log('Error', e.message);
    }
  }
}

const StoreContext = React.createContext();

export const StoreProvider = ({ children, store }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

export const useStore = () => React.useContext(StoreContext);
