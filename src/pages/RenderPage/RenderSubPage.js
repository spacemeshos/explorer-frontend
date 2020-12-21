// @flow
import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import TitleBlock from '../../components/common/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { AmountBlock } from '../../components/common/CountBlock';
import Table from '../../components/common/Table';

import {
  EPOCHS,
  LAYERS,
  REWARDS,
  SMESHER,
  TXNS,
  ATXS,
  BLOCKS,
  ACCOUNTS,
} from '../../config/constants';
import longFormHash from '../../helper/longFormHash';
import { smhCoinConverter } from '../../helper/converter';
import RightCountBlock from '../../components/common/CountBlock/RightCountBlock';
import RightSideBlock from '../../components/common/CountBlock/RightSideBlock';

type Props = {
  name: string,
  id: string,
  subPage: string,
  uiStore: Object,
  viewStore: Object,
};

const RenderSubPage = (props: Props) => {
  const { name, id, subPage, uiStore, viewStore } = props;
  const { data, pagination } = toJS(viewStore.currentView);

  const { epoch, layer, network } = toJS(viewStore.mainInfo);

  switch (name) {
    case EPOCHS:
      if (subPage === LAYERS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Epoch ${id} - Layers`}
                color={getColorByPageName(name)}
                desc={`Layers contained within Epoch ${id}`}
                uiStore={uiStore}
              />
              <RightSideBlock
                number={epoch && epoch.layers}
                startTime={epoch && epoch.start}
                unit="layers"
                color={getColorByPageName(name)}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === TXNS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Epoch ${id} - Transactions`}
                color={getColorByPageName(name)}
                desc={`Transactions contained within Epoch ${id}`}
                uiStore={uiStore}
              />
              <RightSideBlock
                number={epoch && epoch.stats.cumulative.transactions}
                unit="txns"
                startTime={network && network.genesis}
                color={getColorByPageName(name)}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === SMESHER) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Epoch ${id} - Participating Smashers`}
                color={getColorByPageName(name)}
                desc="Smeshers submitting at least one honest block"
                uiStore={uiStore}
              />
              <RightSideBlock
                number={epoch && epoch.stats.cumulative.smeshers}
                startTime={network && network.genesis}
                unit="smeshers in the epoch"
                color={getColorByPageName(name)}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === ATXS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Epoch ${id} - Transactions`}
                color={getColorByPageName(name)}
                desc={`Transactions contained within Epoch ${id}`}
                uiStore={uiStore}
              />
              <RightSideBlock
                number={epoch && epoch.stats.cumulative.transactions}
                startTime={network && network.genesis}
                unit="txns since genesis"
                color={getColorByPageName(name)}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === REWARDS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Epoch ${id} Rewards`}
                color={getColorByPageName(name)}
                desc="Rewards awarded to Smeshers"
                uiStore={uiStore}
              />
              <AmountBlock
                number={pagination && pagination.totalCount}
                startTime={network && network.genesis}
                unit="rewards"
                color={getColorByPageName(name)}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      break;
    case LAYERS:
      if (subPage === TXNS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Layer ${id} - Transactions`}
                color={getColorByPageName(name)}
                desc=""
                uiStore={uiStore}
              />
              <RightCountBlock
                color={getColorByPageName(name)}
                number={layer && layer.txs}
                caption="txns"
                coinCaption="Transactions Value"
                coins={layer && smhCoinConverter(layer.txsamount)}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === ATXS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Layer ${id} - Transactions`}
                color={getColorByPageName(name)}
                desc={`Transactions within layer ${id}`}
                uiStore={uiStore}
              />
              <RightSideBlock
                number={epoch && epoch.stats.cumulative.transactions}
                startTime={network && network.genesis}
                unit="txns"
                color={getColorByPageName(name)}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === BLOCKS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Layer ${id} blocks`}
                color={getColorByPageName(name)}
                uiStore={uiStore}
              />
              <RightSideBlock
                number={pagination && pagination.totalCount}
                startTime={layer && layer.start}
                unit="blocks"
                color={getColorByPageName(name)}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === SMESHER) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Layers ${id} Smeshers`}
                color={getColorByPageName(name)}
                desc="Smeshers who submitted at least one block"
                uiStore={uiStore}
              />
              <RightSideBlock
                number={layer && layer.smeshers}
                startTime={layer && layer.start}
                unit="smeshers"
                color={getColorByPageName(name)}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === REWARDS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Layer ${id} - Rewards`}
                color={getColorByPageName(name)}
                desc={`Rewards within Layer ${id}`}
                uiStore={uiStore}
              />
              <AmountBlock
                number={layer && layer.number}
                startTime={layer && layer.start}
                unit="layers"
                color={getColorByPageName(name)}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      break;
    case SMESHER:
      if (subPage === ATXS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Smesher ${longFormHash(id)} Activations`}
                color={getColorByPageName(name)}
                desc=""
                uiStore={uiStore}
              />
              <RightSideBlock
                color={getColorByPageName(name, uiStore.theme)}
                number={pagination?.totalCount}
                unit="Activations"
                startTime={network?.genesis}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === REWARDS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Smesher ${longFormHash(id)} - Details`}
                color={getColorByPageName(name)}
                desc="Smesher details for this reward"
                uiStore={uiStore}
              />
              <RightSideBlock
                color={getColorByPageName(name, uiStore.theme)}
                number={epoch && epoch.stats.cumulative.transactions}
                unit="txns"
                startTime={network?.genesis}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      break;
    case ACCOUNTS:
      if (subPage === TXNS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title="ACCOUNT Transactions"
                color={getColorByPageName(name)}
                desc={longFormHash(id)}
                uiStore={uiStore}
              />
              <RightSideBlock
                color={getColorByPageName(name)}
                number={pagination && pagination.totalCount}
                unit="txns"
                startTime={data && data[0]?.timestamp}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === REWARDS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`ACCOUNT ${longFormHash(id)} - Rewards`}
                color={getColorByPageName(name)}
                desc={`Rewards contained within account ${longFormHash(id)}`}
                uiStore={uiStore}
              />
              <RightSideBlock
                color={getColorByPageName(name)}
                number={pagination && pagination.totalCount}
                unit="rewards"
                startTime={network?.genesis}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      break;
    default:
      break;
  }
};

export default observer(RenderSubPage);
