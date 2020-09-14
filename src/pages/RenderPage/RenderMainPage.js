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
import NoData from '../../components/common/NoData';

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
            transactions={epoch && epoch.stats.cumulative.transactions}
            rewards={epoch && epoch.stats.cumulative.rewards}
            security={epoch && epoch.stats.cumulative.security}
            epoch={epoch && epoch.number}
            layer={epoch && layer.number}
            smeshers={epoch && epoch.stats.cumulative.smeshers}
          />
          <div className="page-wrap">
            <TitleBlock
              title="Latest Transaction"
              color={getColorByPageName(name)}
              desc="Most recent global transactions."
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={epoch && epoch.stats.cumulative.transactions}
              unit="txns since genesis"
              coinCaption="total txns value since genesis"
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
              unit="epochs"
              startTime={network && network.genesis}
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
              coinCaption="total txns value since genesis"
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
              number={epoch && epoch.stats.cumulative.rewardsnumber}
              unit="rewards distributed"
              coinCaption="smash rewards since genesis"
              coins={epoch && epoch.stats.cumulative.rewards}
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
              unit="accnts"
              startTime={network && network.genesis}
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
              title="Smart Wallets"
              color={getColorByPageName(name)}
              desc="Smart Wallets across the entire mesh"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={epoch && epoch.stats.cumulative.accounts}
              unit="accnts"
              startTime={network && network.genesis}
            />          </div>
          {/*<Table name={name} viewStore={viewStore} />*/}
          <NoData />
        </>
      );
    case SMESHER:
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
              number={epoch && epoch.stats.cumulative.transactions}
              unit="txns"
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
