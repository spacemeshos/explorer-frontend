// @flow
import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import TitleBlock from '../../components/common/TitleBlock';
import { AmountBlock, CountTxnsBlock } from '../../components/common/CountBlock';
import { DetailsEpoch, DetailsCoinTxns } from '../../components/common/Details';
import DetailsLayer from '../../components/common/Details/DetailsLayer';
import longFormHash from '../../helper/longFormHash';
import TxnsStatus from '../../components/common/TxnsStatus';
import DetailAccount from '../../components/common/Details/DetailAccount';
import DetailReward from '../../components/common/Details/DetailReward';
import DetailsEmptyPage from '../../components/common/Details/DetailsEmptyPage';

import { getColorByPageName } from '../../helper/getColorByPageName';

import DetailsBlock from '../../components/common/Details/DetailBlock';
import DetailSmesher from '../../components/common/Details/DetailSmesher';
import DetailApp from '../../components/common/Details/DetailApp';
import Loader from '../../components/common/Loader';
import { byteConverter, smhCoinConverter } from '../../helper/converter';
import RightCountBlock from '../../components/common/CountBlock/RightCountBlock';
import DetailAtxs from '../../components/common/Details/DetailAtxs';
import NoData from '../../components/common/NoData';
import RightSideBlock from '../../components/common/CountBlock/RightSideBlock';

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
              title={`Epoch ${id} - details`}
              color={getColorByPageName(name)}
              desc="Specific details for this epoch"
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
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title={`Layer ${id} - details`}
              color={getColorByPageName(name)}
              desc="Layers across the entire mesh"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={data && data.txs}
              caption="txns"
              coinCaption="total coin rewards"
              coins={data && data.rewards}
            />
          </div>
          {data && <DetailsLayer data={data} viewStore={viewStore}/>}
        </>
      );
    case TXNS:
      const txnsObject = smhCoinConverter(data?.amount, true);
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
              {data.type === 0 ? (<DetailsCoinTxns data={data} viewStore={viewStore}/>) : (<DetailAtxs data={data} viewStore={viewStore}/>)}
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
              title={`Transactions ${longFormHash(id)} - details`}
              color={getColorByPageName(name)}
              desc="Specific details for this transaction."
              uiStore={uiStore}
            />
            <CountTxnsBlock
              badgeType={'atx'}
              amount={spaceObject.value}
              unit={spaceObject.unit}
              startTime={0}
              color={getColorByPageName(name)}
            />
          </div>
          {data ? (
            <>
              <TxnsStatus status={data.state} />
              {data.type === 0 ? (<DetailAtxs data={data} viewStore={viewStore}/>) : (<DetailAtxs data={data} viewStore={viewStore}/>)}
            </>
          ) : (<Loader size={100} />)}
        </>
      );
    case ACCOUNTS:
      const balance = data && smhCoinConverter(data.balance, true);
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="Coin Account"
              color={getColorByPageName(name)}
              desc="A basic coin account"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={balance && balance.value}
              unit={balance && balance.unit}
              startTime={network && network.genesis}
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
              title="Smart Wallet - My Sm Smart wallet 1"
              color={getColorByPageName(name)}
              desc="A smart wallet app"
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
              title={`Smesher ${longFormHash(id)} details`}
              color={getColorByPageName(name)}
              desc="Specific details for this smesher"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={data?.atxcount}
              unit="atxs"
              startTime={network?.genesis}
            />
          </div>
          {data ? <DetailSmesher data={data} viewStore={viewStore} /> : <NoData />}
        </>
      );
    case REWARDS:
      const balanceReward = data && smhCoinConverter(data.total, true);
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title={`Smeshing Reward ${longFormHash(id)} - details`}
              color={getColorByPageName(name)}
              desc="Specific details for this reward."
              uiStore={uiStore}
            />
            {data && <AmountBlock number={balanceReward.value} startTime={network && network.genesis} unit={balanceReward.unit} color={getColorByPageName(name)} />}
          </div>
          {data ? <DetailReward data={data} viewStore={viewStore} /> : <NoData />}
        </>
      );
    case BLOCKS:
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="Specific details for this block"
              color={getColorByPageName(name)}
              desc="Specific details for this reward."
              uiStore={uiStore}
            />
            <RightCountBlock
              color={getColorByPageName(name)}
              number={epoch && epoch.stats.cumulative.txs}
              caption="txns"
              coinCaption="total coin rewards"
              coins={epoch && smhCoinConverter(epoch && epoch.stats.cumulative.txsamount)}
            />
          </div>
          {data ? <DetailsBlock data={data} viewStore={viewStore} /> : <NoData />}
        </>
      );
    case NOT_FOUND:
      return (
        <>
          <div className="page-wrap">
            <TitleBlock
              title={`${longFormHash(id)}`}
              color={getColorByPageName(name)}
              desc="search returned no result"
              uiStore={uiStore}
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number="000"
              unit="txns"
              startTime={new Date().getTime().toString().slice(0, -3)}
            />
          </div>
          <DetailsEmptyPage />
        </>
      );
    default:
      break;
  }
};

export default observer(RenderDetailPage);
