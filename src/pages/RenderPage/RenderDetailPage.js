// @flow
import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import TitleBlock from '../../components/TitleBlock';
import { AmountBlock, CountTxnsBlock } from '../../components/CountBlock';
import { DetailsEpoch, DetailsCoinTxns } from '../../components/common/Details';
import DetailsLayer from '../../components/common/Details/DetailsLayer';
import longFormHash from '../../helper/longFormHash';
import TxnsStatus from '../../components/TxnsStatus';
import DetailAccount from '../../components/common/Details/DetailAccount';
import DetailReward from '../../components/common/Details/DetailReward';

import { getColorByPageName } from '../../helper/getColorByPageName';

import DetailsBlock from '../../components/common/Details/DetailBlock';
import DetailSmesher from '../../components/common/Details/DetailSmesher';
import DetailApp from '../../components/common/Details/DetailApp';
import Loader from '../../components/Loader';
import {
  byteConverter, formatSmidge, parseSmidge,
} from '../../helper/converter';
import RightCountBlock from '../../components/CountBlock/RightCountBlock';
import DetailAtxs from '../../components/common/Details/DetailAtxs';
import NoData from '../../components/NoData';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';

import {
  EPOCHS,
  LAYERS,
  REWARDS,
  SMESHER,
  TXNS,
  ACCOUNTS,
  NOT_FOUND,
  BLOCKS,
  SMART_WALLET, ATXS,
} from '../../config/constants';
import CountAtxBlock from '../../components/CountBlock/CountAtxBlock';

type Props = {
  name: string,
  id: string,
  uiStore: Object,
  viewStore: Object,
};

const RenderDetailPage = (props: Props) => {
  const { name, id, uiStore, viewStore } = props;

  const data = toJS(viewStore.currentView.data);
  const { epoch, network } = toJS(viewStore.mainInfo);

  switch (name) {
    case EPOCHS:
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title={`Epoch ${id}`}
              color={getColorByPageName(name)}
              desc="Epoch details"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={data && (data.layers)}
              unit="layers"
              startTime={data && data.start}
            />
          </div>
          {data && <DetailsEpoch data={data} viewStore={viewStore} />}
        </>
      );
    case LAYERS:
      const layersObject = parseSmidge(data?.rewards);
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title={`Layer ${id}`}
              color={getColorByPageName(name)}
              desc="Layer details"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={layersObject.value}
              unit={layersObject.unit}
              coinCaption="Rewards"
              coins={data && data.rewards}
            />
          </div>
          {data && <DetailsLayer data={data} viewStore={viewStore} />}
        </>
      );
    case TXNS:
      const txnsObject = parseSmidge(data?.amount);
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="Transaction details"
              color={getColorByPageName(name)}
              desc={`${longFormHash(id)}`}
              uiStore={uiStore}
            />
            <CountTxnsBlock
              badgeType="coin"
              amount={txnsObject.value}
              unit={txnsObject.unit}
              startTime={data && data.timestamp}
              color={getColorByPageName(name)}
            />
          </div>
          {data ? (
            <>
              <TxnsStatus status={data.state} />
              <DetailsCoinTxns data={data} viewStore={viewStore} />
            </>
          ) : (<Loader size={100} />)}
        </>
      );
    case ATXS:
      const spaceObject = byteConverter(data?.cSize, true);
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title={`Activation ${longFormHash(id)}`}
              color={getColorByPageName(name)}
              desc="Details"
              uiStore={uiStore}
            />
            <CountAtxBlock
              badgeType="atx"
              amount={spaceObject.value}
              unit={spaceObject.unit}
              startTime={data && data.timestamp}
              color={getColorByPageName(name, uiStore.theme)}
            />
          </div>
          {data ? (
            <>
              <TxnsStatus status={data.state} />
              {data.type === 0 ? (<DetailAtxs data={data} viewStore={viewStore} />) : (<DetailAtxs data={data} viewStore={viewStore} />)}
            </>
          ) : (<Loader size={100} />)}
        </>
      );
    case ACCOUNTS:
      const balance = data && parseSmidge(data.balance);
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="Account"
              color={getColorByPageName(name)}
              desc="coin account"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={balance && balance.value}
              unit={`${balance && balance.unit} Balance`}
              startTime={data && data.timestamp}
            />
          </div>
          { data ? <DetailAccount data={data} viewStore={viewStore} /> : <NoData />}
        </>
      );
    case SMART_WALLET:
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="Vault - SM W #1"
              color={getColorByPageName(name)}
              desc="A vault app"
              uiStore={uiStore}
            />
            <AmountBlock value="325" unit="smh" color={getColorByPageName(name)} />
          </div>
          <DetailApp viewStore={viewStore} />
        </>
      );
    case SMESHER:
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title={`Smesher ${longFormHash(id)}`}
              color={getColorByPageName(name)}
              desc="Details"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name, uiStore.theme)}
              number={data?.atxcount}
              unit="atxs"
              startTime={network?.genesis}
            />
          </div>
          {data ? <DetailSmesher data={data} viewStore={viewStore} /> : <NoData />}
        </>
      );
    case REWARDS:
      const balanceReward = data && parseSmidge(data.total);
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title={`Reward ${longFormHash(id)}`}
              color={getColorByPageName(name)}
              desc="Details"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={balanceReward?.value}
              unit={balanceReward?.unit}
              startTime={network?.genesis}
            />
          </div>
          {data ? <DetailReward data={data} viewStore={viewStore} /> : <NoData />}
        </>
      );
    case BLOCKS:
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title={`Block ${longFormHash(id)}`}
              color={getColorByPageName(name)}
              desc="Details"
              uiStore={uiStore}
            />
            <RightCountBlock
              color={getColorByPageName(name)}
              number={data && data.txsnumber}
              caption="Txs"
              coinCaption="transactions value"
              coins={epoch && formatSmidge(data && data.txsvalue)}
            />
          </div>
          {data ? <DetailsBlock data={data} viewStore={viewStore} network={network} /> : <NoData />}
        </>
      );
    case NOT_FOUND:
      return (
        <>
          <div className="page-wrap page-wrap-search-not-found">
            <TitleBlock
              title={`${longFormHash(id)}`}
              color={getColorByPageName(name)}
              desc="No results"
              uiStore={uiStore}
            />
          </div>
        </>
      );
    default:
      break;
  }
};

export default observer(RenderDetailPage);
