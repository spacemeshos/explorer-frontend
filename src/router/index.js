// @flow
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Root from '../routes/root';
import Overview from '../routes/overview';
import NotFound from '../routes/not-found';
import Txs from '../routes/txns';
import Tx from '../routes/tx';
import Rewards from '../routes/rewards';
import {
  Epoch, EpochLayers, EpochRewards, Epochs, EpochSmeshers, EpochTxns,
} from '../routes/epochs';
import {
  Layer, LayerRewards, Layers, LayerTxns,
} from '../routes/layers';
import {
  Account, AccountRewards, Accounts,
} from '../routes/accounts';
import {
  Smesher, SmesherRewards, Smeshers,
} from '../routes/smeshers';
import Atx from '../routes/atx';
import RewardV2 from '../routes/rewardv2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Root errorElement={<NotFound />} />,
    children: [
      {
        path: '/',
        element: <Navigate to="/overview" />,
      },
      {
        path: '/overview',
        element: <Overview />,
      },
      // LAYERS
      {
        path: '/layers',
        element: <Layers />,
      },
      {
        path: '/layers/:id',
        element: <Layer />,
      },
      {
        path: '/layers/:id/rewards',
        element: <LayerRewards />,
      },
      {
        path: '/layers/:id/txs',
        element: <LayerTxns />,
      },
      // TXNS
      {
        path: '/txs',
        element: <Txs />,
      },
      {
        path: '/txs/:id',
        element: <Tx />,
      },
      // ACCOUNTS
      {
        path: '/accounts',
        element: <Accounts />,
      },
      {
        path: '/accounts/:id',
        element: <Account />,
      },
      {
        path: '/accounts/:id/rewards',
        element: <AccountRewards />,
      },
      // EPOCHS
      {
        path: '/epochs',
        element: <Epochs />,
      },
      {
        path: '/epochs/:id',
        element: <Epoch />,
      },
      {
        path: '/epochs/:id/layers',
        element: <EpochLayers />,
      },
      {
        path: '/epochs/:id/txs',
        element: <EpochTxns />,
      },
      {
        path: '/epochs/:id/smeshers',
        element: <EpochSmeshers />,
      },
      {
        path: '/epochs/:id/rewards',
        element: <EpochRewards />,
      },
      // SMESHERS
      {
        path: '/smeshers',
        element: <Smeshers />,
      },
      {
        path: '/smeshers/:id',
        element: <Smesher />,
      },
      {
        path: '/smeshers/:id/rewards',
        element: <SmesherRewards />,
      },
      // REWARDS
      {
        path: '/rewards',
        element: <Rewards />,
      },
      {
        path: '/v2/rewards/:smesherId/:layer',
        element: <RewardV2 />,
      },
      // ATXS
      {
        path: '/atxs/:id',
        element: <Atx />,
      },
    ],
  },
]);

export default router;
