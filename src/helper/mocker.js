import moment from 'moment';
import {ACCOUNTS, EPOCHS, LAYERS, REWARDS, SMART_WALLET, SMESHER, TXNS} from "../config/constants";

const overviewData = {
  networks: [
    {
      "id": "1",
      "domain": "https://testnet1.com",
      "name": "TestNet 0.1 'TweedleDee'"
    },
    {
      "id": "2",
      "domain": "https://testnet2.com",
      "name": "TestNet 0.2 'TweedleDee'"
    },
  ],
  transactions: 0,
  smeshingRewards: 0,
  security: 0,
  epochs: 0,
  layers: 0,
  activeSmeshers: 0,
};

const transactionsData = [
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 32,
    amount: 123,
    start_time: moment('2020-07-19').unix(),
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    amount: 123,
    start_time: moment('2020-07-19').unix(),
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    amount: 123,
    start_time: moment('2020-07-19').unix(),
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    amount: 123,
    start_time: moment('2020-07-19').unix(),
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    amount: 123,
    start_time: moment('2020-07-19').unix(),
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    amount: 123,
    start_time: moment('2020-07-19').unix(),
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh',
  },
];
const epochsData = [
  {
    id: '126812',
    started: '31 days ago',
    ended: '14 days ago',
    layers: '123',
    transactions: '3867',
    smeshers: '126',
    rewards: '320 SMH',
    total: '32 SMH',
  },
  {
    id: '126812',
    started: '31 days ago',
    ended: '14 days ago',
    layers: '123',
    transactions: '3867',
    smeshers: '126',
    rewards: '320 SMH',
    total: '32 SMH',
  },
  {
    id: '126812',
    started: '31 days ago',
    ended: '14 days ago',
    layers: '123',
    transactions: '3867',
    smeshers: '126',
    rewards: '320 SMH',
    total: '32 SMH',
  },
  {
    id: '126812',
    started: '31 days ago',
    ended: '14 days ago',
    layers: '123',
    transactions: '3867',
    smeshers: '126',
    rewards: '320 SMH',
    total: '32 SMH',
  },
  {
    id: '126812',
    started: '31 days ago',
    ended: '14 days ago',
    layers: '123',
    transactions: '3867',
    smeshers: '126',
    rewards: '320 SMH',
    total: '32 SMH',
  },
  {
    id: '126812',
    started: '31 days ago',
    ended: '14 days ago',
    layers: '123',
    transactions: '3867',
    smeshers: '126',
    rewards: '320 SMH',
    total: '32 SMH',
  },
];
const layersData = [
  {
    id: '126812',
    number: 137,
    start_time: moment('2020-07-19').unix(),
    transactions: '123',
    age: '14 days ago',
    txnValue: '123',
    atxValue: '3867',
  },
  {
    id: '126812',
    number: 137,
    start_time: moment('2020-07-19').unix(),
    transactions: '123',
    age: '14 days ago',
    txnValue: '123',
    atxValue: '3867',
  },
  {
    id: '126812',
    number: 137,
    start_time: moment('2020-07-19').unix(),
    transactions: '123',
    age: '14 days ago',
    txnValue: '123',
    atxValue: '3867',
  },
  {
    id: '126812',
    number: 137,
    start_time: moment('2020-07-19').unix(),
    transactions: '123',
    age: '14 days ago',
    txnValue: '123',
    atxValue: '3867',
  },
  {
    id: '126812',
    number: 137,
    start_time: moment('2020-07-19').unix(),
    transactions: '123',
    age: '14 days ago',
    txnValue: '123',
    atxValue: '3867',
  },
  {
    id: '126812',
    number: 137,
    start_time: moment('2020-07-19').unix(),
    transactions: '123',
    age: '14 days ago',
    txnValue: '123',
    atxValue: '3867',
  },
];
const rewardsData = [
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    account: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    smesher: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: '123321',
    space: '120',
    value: '325',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    account: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    smesher: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: '123321',
    space: '120',
    value: '325',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    account: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    smesher: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: '123321',
    space: '120',
    value: '325',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    account: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    smesher: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: '123321',
    space: '120',
    value: '325',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    account: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    smesher: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: '123321',
    space: '120',
    value: '325',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    account: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    smesher: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: '123321',
    space: '120',
    value: '325',
  },
];
const accountsData = [
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    sent: '32',
    recieved: '32',
    lastActive: '2 hrs ago',
    awards: '320',
    balance: '11',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    sent: '32',
    recieved: '32',
    lastActive: '2 hrs ago',
    awards: '320',
    balance: '11',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    sent: '32',
    recieved: '32',
    lastActive: '2 hrs ago',
    awards: '320',
    balance: '11',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    sent: '32',
    recieved: '32',
    lastActive: '2 hrs ago',
    awards: '320',
    balance: '11',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    sent: '32',
    recieved: '32',
    lastActive: '2 hrs ago',
    awards: '320',
    balance: '11',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    sent: '32',
    recieved: '32',
    lastActive: '2 hrs ago',
    awards: '320',
    balance: '11',
  },
];
const appsData = [
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
const smeshersData = [
  {
    id: '126812',
    rewardsAccount: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    committedSpace: '200',
    totalAtxTxns: '32',
  },
  {
    id: '126812',
    rewardsAccount: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    committedSpace: '200',
    totalAtxTxns: '32',
  },
  {
    id: '126812',
    rewardsAccount: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    committedSpace: '200',
    totalAtxTxns: '32',
  },
  {
    id: '126812',
    rewardsAccount: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    committedSpace: '200',
    totalAtxTxns: '32',
  },
  {
    id: '126812',
    rewardsAccount: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    committedSpace: '200',
    totalAtxTxns: '32',
  },
  {
    id: '126812',
    rewardsAccount: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    committedSpace: '200',
    totalAtxTxns: '32',
  },
];

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export const overviewMocker = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(overviewData), randomInteger(600, 1200));
  });
};

export const transactionMocker = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(transactionsData), randomInteger(600, 1200));
  });
};

export const epochsMocker = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(epochsData), randomInteger(600, 1200));
  });
};

export const layersMocker = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(layersData), randomInteger(600, 1200));
  });
};

export const rewardsMocker = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(rewardsData), randomInteger(600, 1200));
  });
};

export const accountsMocker = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(accountsData), randomInteger(600, 1200));
  });
};

export const appsMocker = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(appsData), randomInteger(600, 1200));
  });
};

export const smeshersMocker = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(smeshersData), randomInteger(600, 1200));
  });
};

export const getMockerByPage = (page) => {
  switch(page) {
    case TXNS:
      return transactionMocker();
    case EPOCHS:
      return epochsMocker();
    case LAYERS:
      return layersMocker();
    case REWARDS:
      return rewardsMocker();
    case ACCOUNTS:
      return accountsMocker();
    case SMART_WALLET:
      return appsMocker();
    case SMESHER:
      return smeshersMocker();
  }
};


