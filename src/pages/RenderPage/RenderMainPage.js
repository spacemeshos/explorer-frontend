// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

import InfoBlock from '../../components/InfoBlock';
import TitleBlock from '../../components/TitleBlock';
import Table from '../../components/Table';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';

import { getColorByPageName } from '../../helper/getColorByPageName';

import {
  EPOCHS,
  LAYERS,
  REWARDS,
  SMESHER,
  TXNS,
  OVERVIEW,
  ACCOUNTS,
  SMART_WALLET, NOT_FOUND,
} from '../../config/constants';

type Props = {
  uiStore: Object,
  viewStore: Object,
};

const RenderMainPage = (props: Props) => {
  const { uiStore, viewStore } = props;
  const { name } = viewStore.currentView;

  const { epoch, layer, network } = toJS(viewStore.mainInfo);
  const data = viewStore?.currentView?.data;
  const dataTimeCreation = data && data.length && data.length > 0 && data[0].timestamp;

  switch (name) {
    case OVERVIEW:
      return (
        <>
          <InfoBlock
            viewStore={viewStore}
            accounts={epoch && epoch.stats.cumulative.accounts}
            rewards={epoch && epoch.stats.cumulative.rewards}
            security={epoch && epoch.stats.cumulative.security}
            epoch={epoch && epoch.number}
            layer={epoch && layer.number}
            smeshers={epoch && epoch.stats.cumulative.smeshers}
          />
          <div className="page-wrap">
            <TitleBlock
              title="Txns"
              color={getColorByPageName(TXNS)}
              desc="Recent transactions"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(TXNS)}
              number={epoch && epoch.stats.cumulative.transactions}
              unit="txns since genesis"
              coinCaption="Coin transferred"
              coins={epoch && epoch.stats.cumulative.txsamount}
            />
          </div>
          <Table name={name} viewStore={viewStore} />
        </>
      );
    case EPOCHS:
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="Epochs"
              color={getColorByPageName(name)}
              desc="Epochs across the entire mesh"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={epoch && epoch.number + 1}
              unit="Epochs since genesis"
              startTime={network && network.genesis}
              label="Genesis Time"
            />
          </div>
          <Table name={name} viewStore={viewStore} />
        </>
      );
    case LAYERS:
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="Layers"
              color={getColorByPageName(name)}
              desc="Layers across the entire mesh"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={layer && layer.number}
              unit="MOST RECENT LAYER"
              startTime={layer && layer.start}
            />
          </div>
          <Table name={name} viewStore={viewStore} />
        </>
      );
    case TXNS:
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="Txns"
              color={getColorByPageName(name)}
              desc="Txns across the entire mesh"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={epoch && epoch.stats.cumulative.transactions}
              unit="txns since genesis"
              coinCaption="Value Since Genesis"
              coins={epoch && epoch.stats.cumulative.txsamount}
            />
          </div>
          <Table name={name} viewStore={viewStore} />
        </>
      );
    case REWARDS:
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="Smeshing Rewards"
              color={getColorByPageName(name)}
              desc="Rewards across the entire mesh"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={epoch?.stats.cumulative.rewardsnumber}
              unit="rewards distributed"
              coinCaption="Rewards value since genesis"
              coins={epoch?.stats.cumulative.rewards}
            />
          </div>
          <Table name={name} viewStore={viewStore} />
        </>
      );
    case ACCOUNTS:
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="All Accounts"
              color={getColorByPageName(name)}
              desc="Accounts across the entire mesh"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={epoch && epoch.stats.cumulative.accounts}
              unit="accounts"
              startTime={dataTimeCreation}
              label="Most Recent Account"
            />
          </div>
          <Table name={name} viewStore={viewStore} />
        </>
      );
    case SMART_WALLET:
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="Vaults"
              color={getColorByPageName(name)}
              desc="Vaults across the entire mesh"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={epoch && epoch.stats.cumulative.accounts}
              unit="accnts"
              startTime={network && network.genesis}
            />
          </div>
          <Table name={name} viewStore={viewStore} />
        </>
      );
    case SMESHER:
      const pagination = toJS(viewStore.currentView.pagination);
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="Smeshers"
              color={getColorByPageName(name)}
              desc=""
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name, uiStore.theme)}
              number={pagination?.totalCount}
              unit="MOST RECENT SMESHER"
              startTime={dataTimeCreation}
            />
          </div>
          <Table name={name} viewStore={viewStore} />
        </>
      );
    case NOT_FOUND:
      return (
        <>
          <div className="page-wrap page-wrap-search-not-found">
            <TitleBlock
              title=""
              color={getColorByPageName(name)}
              desc="No results"
            />
          </div>
        </>
      );
    default:
      break;
  }
};

export default observer(RenderMainPage);
