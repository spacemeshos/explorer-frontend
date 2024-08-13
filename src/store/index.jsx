import {
  action, makeAutoObservable, observable, toJS,
} from 'mobx';
import React from 'react';
import {
  AccountServiceApi,
  ActivationServiceApi,
  Configuration,
  LayerServiceApi,
  NetworkServiceApi,
  NodeServiceApi,
  RewardServiceApi,
  TransactionServiceApi,
  Spacemeshv2alpha1NetworkInfoResponse,
  V2alpha1NodeStatusResponse,
} from 'api';

const DISCOVERY_SERVICE_URL = process.env.REACT_APP_DISCOVERY_SERVICE_URL || 'https://configs.spacemesh.network/networks.json';
const BITS_PER_LABEL = 128;
const LABELS_PER_UNIT = process.env.REACT_APP_LABELS_PER_UNIT || 1024;
const PUBLIC_API = process.env.REACT_APP_PUBLIC_API || null;

export default class Store {
  theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

  networks = [];

  postUnitSize = null;

  network = { value: null, label: null, explorer: null, dash: null };

  networkInfo = {};

  networkColor = 'green';

  fetch = null;

  netInfo: Spacemeshv2alpha1NetworkInfoResponse = null;

  nodeStatus: V2alpha1NodeStatusResponse = null;

  apiConf = null;

  api = {};

  overview = {
    transactions_count: 0,
    accounts_count: 0,
    rewards_sum: 0,
    rewards_count: 0,
    layers_count: 0,
    smeshers_count: 0,
    num_units: 0,
  };

  statsApiUrl = null;

  constructor() {
    makeAutoObservable(this, {
      theme: observable,
      networks: observable.ref,
      network: observable,
      networkInfo: observable,
      networkColor: observable,
      color: observable,
      overview: observable,
      netInfo: observable,
      nodeStatus: observable,
      postUnitSize: observable,

      setNetwork: action,
      showSearchResult: action,
      setNetInfo: action,
      setNodeStatus: action,
    }, { autoBind: true });
    document.documentElement.classList.add(`theme-${this.theme}`);
    // this.bootstrap();
  }

  changeTheme(e) {
    this.theme = e.target.checked ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${this.theme}`);
  }

  setNetwork(data) {
    this.network = this.networks.find((item) => item.value === data.value);
    this.network.value += this.network.value.endsWith('/') ? '' : '/';
  }

  setNetInfo(data) {
    this.netInfo = data;
    this.postUnitSize = (BITS_PER_LABEL * LABELS_PER_UNIT) / 8;
  }

  setNodeStatus(data) {
    this.nodeStatus = data;
  }

  setOverview(data) {
    this.overview = data;
  }

  setNetworks(data) {
    this.networks = data;
  }

  async bootstrap() {
    try {
      const response = await fetch(DISCOVERY_SERVICE_URL);
      const data = await response.json();
      const networks = data.map((network) => (
        {
          value: network.dashAPI,
          label: network.netName,
          explorer: network.explorer,
          statsAPI: network.statsAPI,
          grpcAPI: network.grpcAPI,
        }
      ));
      this.setNetworks(networks);
      this.setNetwork(networks[0]);

      if (PUBLIC_API === null) {
        this.apiConf = new Configuration({
          basePath: networks[0].grpcAPI.replace(/\/$/, ''),
        });
      } else {
        this.apiConf = new Configuration({
          basePath: PUBLIC_API.replace(/\/$/, ''),
        });
      }
      this.api = {
        account: new AccountServiceApi(this.apiConf),
        activation: new ActivationServiceApi(this.apiConf),
        layer: new LayerServiceApi(this.apiConf),
        network: new NetworkServiceApi(this.apiConf),
        node: new NodeServiceApi(this.apiConf),
        reward: new RewardServiceApi(this.apiConf),
        transaction: new TransactionServiceApi(this.apiConf),
      };
      this.statsApiUrl = networks[0].statsAPI.replace(/\/$/, '');
    } catch (e) {
      console.log('Error: ', e.message);
    }

    try {
      this.setNodeStatus(await this.api.node.nodeServiceStatus({}));
    } catch (e) {
      console.log('Error: ', e.message);
    }

    try {
      this.setNetInfo(await this.api.network.networkServiceInfo({}));
    } catch (e) {
      console.log('Error: ', e.message);
    }

    try {
      const response = await fetch(`${this.statsApiUrl}/overview`);
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const res = await response.json();
      this.setOverview(res);
    } catch (e) {
      console.log('Error: ', e.message);
    }
  }

  processNetworkInfo() {
    const { network } = toJS(this.networkInfo);

    if ((network.lastlayer + 24) < network.lastapprovedlayer || network.issynced === false) {
      this.color = 'red';
    } else if (network.lastlayerts < ((Math.floor(Date.now() / 1000)) - (network.duration))) {
      this.color = 'orange';
    } else {
      this.color = 'green';
    }
  }

  layerTimestamp(layer: number) {
    const genesisTime = new Date(this.netInfo?.genesisTime || 0);
    const durationMs = parseInt(this.netInfo?.layerDuration, 10);
    return (genesisTime.getTime() / 1000 + (layer * durationMs));
  }

  layerEndTimestamp(layer: number) {
    const genesisTime = new Date(this.netInfo?.genesisTime || 0);
    const durationMs = parseInt(this.netInfo?.layerDuration, 10);
    return (genesisTime.getTime() / 1000 + (layer * durationMs) + durationMs) - 1;
  }
}

const StoreContext = React.createContext();

export const StoreProvider = ({ children, store }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

export const useStore = () => React.useContext(StoreContext);
