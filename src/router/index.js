// @flow
import {createBrowserRouter, Navigate} from "react-router-dom";
import Root from "../routes/root";
import Overview from "../routes/overview";
import NotFound from "../routes/not-found";
import Txs from "../routes/txns";
import Tx from "../routes/tx";
import React from "react";
import Rewards from "../routes/rewards";
import Reward from "../routes/reward";
import {Epoch, EpochAtxs, EpochLayers, EpochRewards, Epochs, EpochSmeshers, EpochTxns} from "../routes/epochs";
import {Layer, LayerAtxs, LayerBlocks, LayerRewards, Layers, LayerSmeshers, LayerTxns} from "../routes/layers";
import {Account, AccountRewards, Accounts, AccountTxns} from "../routes/accounts";
import {Smesher, SmesherAtxs, SmesherRewards, Smeshers} from "../routes/smeshers";
import Atx from "../routes/atx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Root errorElement={<NotFound/>} />,
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
            {
                path: '/layers/:id/atxs',
                element: <LayerAtxs/>
            },
            {
                path: '/layers/:id/blocks',
                element: <LayerBlocks/>
            },
            {
                path: '/layers/:id/rewards',
                element: <LayerRewards/>
            },
            {
                path: '/layers/:id/smeshers',
                element: <LayerSmeshers/>
            },
            {
                path: '/layers/:id/txs',
                element: <LayerTxns/>
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
            },
            // ATXS
            {
                path: '/atxs/:id',
                element: <Atx/>
            }
        ]
    },
]);

export default router;