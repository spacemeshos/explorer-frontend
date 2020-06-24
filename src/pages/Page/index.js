// @flow
import * as React from 'react';

import { observer } from 'mobx-react';

import InfoBlock from '../../components/common/InfoBlock';
import TitleBlock from '../../components/common/TitleBlock';
import AmountBlock from '../../components/common/CountBlock/AmountBlock';
import CountTxnsBlock from '../../components/common/CountBlock/CountTxnsBlock';
import Table from '../../components/common/Table';
import TxnsStatus from '../../components/common/TxnsStatus';
import Details from '../../components/common/Details';

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
} from '../../config/constants';

import longFormHash from '../../helper/longFormHash';

type Props = {
  uiStore: Object,
  viewStore: Object,
}

const Page = (props: Props) => {

  const { uiStore, viewStore } = props;

  const { name, id, supPage } = viewStore.currentView;

  const renderCurrentPage = () => {
    const isMainPage = name && !id && !supPage;
    const isDetailsPage = name && id && !supPage;
    const isSubPage = name && id && supPage;


    if (isMainPage) {
      switch (name) {
        case OVERVIEW:
          return (
            <>
              <InfoBlock/>
              <div className="page-wrap">
                <TitleBlock title="Latest Transaction" color={getColorByPageName(name)}
                            desc="Most recent global transactions." uiStore={uiStore}/>
                <AmountBlock value="32" color={getColorByPageName(name)}/>
              </div>
              <Table viewStore={viewStore}/>
            </>
          );
        case TXNS:
          return (
            <>
              <div className="page-wrap">
                <TitleBlock title="Transactions" color={getColorByPageName(name)}
                            desc="Transactions across the entire mesh" uiStore={uiStore}/>
                <AmountBlock value="32" color={getColorByPageName(name)}/>
              </div>
              <Table viewStore={viewStore}/>
            </>
          );
      }
    }

    if (isDetailsPage) {
      switch (name) {
        case TXNS:
          return (
            <>
              <div className="page-wrap">
                <TitleBlock title={`Transactions ${longFormHash(id)} - details`} color={getColorByPageName(name)}
                            desc="Transactions across the entire mesh" uiStore={uiStore}/>
                <CountTxnsBlock value="999,999.224" color={getColorByPageName(name)}/>
              </div>
              <TxnsStatus status="approved"/>
              <Details/>
            </>
          );
      }
    }
  };

  return (
    <div className="page">
      { renderCurrentPage() }
    </div>
  )
};

export default observer(Page);
