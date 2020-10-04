// @flow
import * as React from 'react';
import { observer } from 'mobx-react';

import InfoBlock from '../../components/common/InfoBlock';
import TitleBlock from '../../components/common/TitleBlock';
import Table from '../../components/common/Table';
import RightSideBlock from '../../components/common/CountBlock/RightSideBlock';

import { getColorByPageName } from '../../helper/getColorByPageName';

import {
  EPOCHS,
  LAYERS,
  REWARDS,
  SMESHER,
  TXNS,
  OVERVIEW,
  ACCOUNTS,
  SMART_WALLET,
} from '../../config/constants';
import {toJS} from 'mobx';

type Props = {
  uiStore: Object,
  viewStore: Object,
};

const RenderMainPage = (props: Props) => {
  const { uiStore, viewStore } = props;
  const { name } = viewStore.currentView;

  const { epoch, layer, network } = toJS(viewStore.mainInfo);

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
              title="Transactions"
              color={getColorByPageName(name)}
              desc="Recent transactions"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
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
              number={epoch && epoch.number}
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
              unit="layers"
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
              title="Transactions"
              color={getColorByPageName(name)}
              desc="Transactions across the entire mesh"
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
              title="All Mining Rewards"
              color={getColorByPageName(name)}
              desc="Rewards across the entire mesh"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={epoch?.stats.cumulative.rewardsnumber}
              unit="rewards distributed"
              coinCaption="smash rewards since genesis"
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
              startTime={network && network.genesis}
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
            />          </div>
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
              desc="Specific details for this awards"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={pagination?.totalCount}
              unit="smeshers"
              startTime={network && network.genesis}
            />
          </div>
          <Table name={name} viewStore={viewStore} />
        </>
      );
    default:
      break;
  }
};

export default observer(RenderMainPage);
