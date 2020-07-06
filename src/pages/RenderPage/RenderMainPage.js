// @flow
import * as React from 'react';

import InfoBlock from '../../components/common/InfoBlock';
import TitleBlock from '../../components/common/TitleBlock';
import { AmountBlock } from '../../components/common/CountBlock';
import Table from '../../components/common/Table';

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

type Props = {
  name: string,
  id: string,
  uiStore: Object,
  viewStore: Object,
};

const RenderMainPage = (props: Props) => {
  const { name, uiStore, viewStore } = props;
  switch (name) {
    case OVERVIEW:
      return (
        <>
          <InfoBlock/>
          <div className="page-wrap">
            <TitleBlock
              title="Latest Transaction"
              color={getColorByPageName(name)}
              desc="Most recent global transactions."
              uiStore={uiStore}
            />
            <AmountBlock value="32" unit="txns" color={getColorByPageName(name)}/>
          </div>
          <Table name={name} viewStore={viewStore}/>
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
            <AmountBlock value="167" unit="epochs" color={getColorByPageName(name)}/>
          </div>
          <Table name={name} viewStore={viewStore}/>
        </>
      );
    case LAYERS:
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="Layers"
              color={getColorByPageName(name)}
              desc="Epochs across the entire mesh"
              uiStore={uiStore}
            />
            <AmountBlock value="137" unit="layers" color={getColorByPageName(name)}/>
          </div>
          <Table name={name} viewStore={viewStore}/>
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
            <AmountBlock value="32" unit="txns" color={getColorByPageName(name)}/>
          </div>
          <Table name={name} viewStore={viewStore}/>
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
            <AmountBlock value="325" unit="rewards distributed" color={getColorByPageName(name)}/>
          </div>
          <Table name={name} viewStore={viewStore}/>
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
            <AmountBlock value="325" unit="accnts" color={getColorByPageName(name)}/>
          </div>
          <Table name={name} viewStore={viewStore}/>
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
            <AmountBlock value="325" unit="accnts" color={getColorByPageName(name)}/>
          </div>
          <Table name={name} viewStore={viewStore}/>
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
            <AmountBlock value="000" unit="txns" color={getColorByPageName(name)}/>
          </div>
          <Table name={name} viewStore={viewStore}/>
        </>
      );
    default:
      break;
  }
};

export default RenderMainPage;
