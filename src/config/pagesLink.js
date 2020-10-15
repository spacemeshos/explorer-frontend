import {ACCOUNTS, EPOCHS, LAYERS, OVERVIEW, REWARDS, SMART_WALLET, SMESHER, TXNS} from './constants';

export const pagesLink = [
  {
    title: 'overview',
    page: OVERVIEW,
    icon: 'overview',
  },
  {
    title: 'epochs',
    page: EPOCHS,
    icon: 'epochs',
  },
  {
    title: 'layers',
    page: LAYERS,
    icon: 'layers',
  },
  {
    title: 'transactions',
    page: TXNS,
    icon: TXNS,
  },
  {
    title: 'rewards',
    page: REWARDS,
    icon: 'rewards',
  },
  {
    title: 'accounts',
    page: ACCOUNTS,
    icon: 'address',
  },
  {
    title: 'vaults',
    page: SMART_WALLET,
    icon: 'apps',
  },
  {
    title: 'smeshers',
    page: SMESHER,
    icon: 'smeshers',
  },
];
