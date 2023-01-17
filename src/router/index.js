// @flow
import {createBrowserRouter, Navigate} from "react-router-dom";
import Root from "../routes/root";
import Overview from "../routes/overview";
import NotFound from "../routes/not-found";
import Layers from "../routes/layers/layers";
import Txs from "../routes/txns";
import Accounts from "../routes/accounts/accounts";
import Smeshers from "../routes/smeshers/smeshers";
import Tx from "../routes/tx";
import Account from "../routes/accounts/account";
import Layer from "../routes/layers/layer";
import Smesher from "../routes/smeshers/smesher";
import React from "react";
import Rewards from "../routes/rewards";
import Reward from "../routes/reward";
import SmesherAtxs from "../routes/smeshers/smesher-atxs";
import SmesherRewards from "../routes/smeshers/smesher-rewards";
import {Epoch, EpochAtxs, EpochLayers, EpochRewards, Epochs, EpochSmeshers, EpochTxns} from "../routes/epochs";
import AccountTxns from "../routes/accounts/account-txns";
import AccountRewards from "../routes/accounts/account-rewards";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Navigate to='/overview'/>,
            },
            {
                path: '/overview',
                element: <Overview/>
            },
            // LAYERS
            {
                path: '/layers',
                element: <Layers/>
            },
            {
                path: '/layers/:id',
                element: <Layer/>
            },
            // TXNS
            {
                path: '/txs',
                element: <Txs/>
            },
            {
                path: '/txs/:id',
                element: <Tx/>
            },
            // ACCOUNTS
            {
                path: '/accounts',
                element: <Accounts/>
            },
            {
                path: '/accounts/:id',
                element: <Account/>
            },
            {
                path: '/accounts/:id/txs',
                element: <AccountTxns/>
            },
            {
                path: '/accounts/:id/rewards',
                element: <AccountRewards/>
            },
            // EPOCHS
            {
                path: '/epochs',
                element: <Epochs/>
            },
            {
                path: '/epochs/:id',
                element: <Epoch/>
            },
            {
                path: '/epochs/:id/layers',
                element: <EpochLayers/>
            },
            {
                path: '/epochs/:id/txs',
                element: <EpochTxns/>
            },
            {
                path: '/epochs/:id/smeshers',
                element: <EpochSmeshers/>
            },
            {
                path: '/epochs/:id/atxs',
                element: <EpochAtxs/>
            },
            {
                path: '/epochs/:id/rewards',
                element: <EpochRewards/>
            },
            // SMESHERS
            {
                path: '/smeshers',
                element: <Smeshers/>
            },
            {
                path: '/smeshers/:id',
                element: <Smesher/>
            },
            {
                path: '/smeshers/:id/atxs',
                element: <SmesherAtxs/>
            },
            {
                path: '/smeshers/:id/rewards',
                element: <SmesherRewards/>
            },
            // REWARDS
            {
                path: '/rewards',
                element: <Rewards/>
            },
            {
                path: '/rewards/:id',
                element: <Reward/>
            }
        ]
    },
]);

export default router;