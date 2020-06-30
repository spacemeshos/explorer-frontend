// @flow
import * as React from 'react';

import { observer } from 'mobx-react';

import InfoBlock from '../../components/common/InfoBlock';
import TitleBlock from '../../components/common/TitleBlock';
import { AmountBlock, CountTxnsBlock } from '../../components/common/CountBlock';
import Table from '../../components/common/Table';
import TxnsStatus from '../../components/common/TxnsStatus';
import { DetailsTxns, DetailsEpoch } from '../../components/common/Details';
import DetailsEmptyPage from '../../components/common/Details/DetailsEmptyPage';
import DetailsLayer from '../../components/common/Details/DetailsLayer';
import RenderSubPage from '../RenderPage/RenderSubPage';

import { getColorByPageName } from '../../helper/getColorByPageName';
import {
  OVERVIEW,
  EPOCHS,
  LAYERS,
  TXNS,
  REWARDS,
  ACCOUNTS,
  SMESHER,
  SMART_WALLET,
  NOT_FOUND,
} from '../../config/constants';

import longFormHash from '../../helper/longFormHash';
import DetailReward from "../../components/common/Details/DetailReward";
import DetailAccount from "../../components/common/Details/DetailAccount";

type Props = {
  uiStore: Object,
  viewStore: Object,
}

const Page = (props: Props) => {

  const { uiStore, viewStore } = props;

  const { name, id, subPage } = viewStore.currentView;

  const renderCurrentPage = () => {
    const isMainPage = name && !id && !subPage;
    const isDetailsPage = name && id && !subPage;
    const isSubPage = name && id && subPage;

    if (isMainPage) {
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
      }
    }

    if (isDetailsPage) {
      switch (name) {
        case EPOCHS:
          return (
            <>
              <div className="page-wrap">
                <TitleBlock
                  title={`Epoch ${id} - details`}
                  color={getColorByPageName(name)}
                  desc="Specific details for this epoch"
                  uiStore={uiStore}
                />
                <AmountBlock value="167" unit="epochs" color={getColorByPageName(name)}/>
              </div>
              <DetailsEpoch viewStore={viewStore}/>
            </>
          );
        case LAYERS:
          return (
            <>
              <div className="page-wrap">
                <TitleBlock
                  title={`Layers ${id} - details`}
                  color={getColorByPageName(name)}
                  desc="Epochs across the entire mesh"
                  uiStore={uiStore}
                />
                <AmountBlock value="137" unit="layers" color={getColorByPageName(name)}/>
              </div>
              <DetailsLayer viewStore={viewStore}/>
            </>
          );
        case TXNS:
          return (
            <>
              <div className="page-wrap">
                <TitleBlock
                  title={`Transactions ${longFormHash(id)} - details`}
                  color={getColorByPageName(name)}
                  desc="Transactions across the entire mesh"
                  uiStore={uiStore}
                />
                <CountTxnsBlock value="999,999.224" color={getColorByPageName(name)}/>
              </div>
              <TxnsStatus status="approved"/>
              <DetailsTxns/>
            </>
          );
        case ACCOUNTS:
          return (
            <>
              <div className="page-wrap">
                <TitleBlock
                  title="Address details"
                  color={getColorByPageName(name)}
                  desc="Details for this address"
                  uiStore={uiStore}
                />
                <AmountBlock value="325" unit="accnts" color={getColorByPageName(name)}/>
              </div>
              <DetailAccount viewStore={viewStore}/>
            </>
          );
        case REWARDS:
          return (
            <>
              <div className="page-wrap">
                <TitleBlock
                  title={`Mining reward ${longFormHash(id)} - details`}
                  color={getColorByPageName(name)}
                  desc="Specific details for this reward."
                  uiStore={uiStore}
                />
                <AmountBlock value="325" unit="smh" color={getColorByPageName(name)}/>
              </div>
              <DetailReward viewStore={viewStore}/>
            </>
          );
        case NOT_FOUND:
          return (
            <>
              <div className="page-wrap">
                <TitleBlock
                  title={`${longFormHash(id)}`}
                  color={getColorByPageName(name)}
                  desc="search returned no result. try again or return home"
                  uiStore={uiStore}
                />
                <AmountBlock value="000" unit="txns" color={getColorByPageName(name)}/>
              </div>
              <DetailsEmptyPage/>
            </>
          );
      }
    }

    if (isSubPage) {
      return (
        <RenderSubPage
          viewStore={viewStore}
          uiStore={uiStore}
          name={name}
          id={id}
          subPage={subPage}
        />
      )
    }
  };

  return (
    <div className="page">
      { renderCurrentPage() }
    </div>
  )
};

export default observer(Page);
