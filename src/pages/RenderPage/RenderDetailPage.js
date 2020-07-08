// @flow
import * as React from 'react';

import TitleBlock from '../../components/common/TitleBlock';
import { AmountBlock, CountTxnsBlock } from '../../components/common/CountBlock';
import { DetailsEpoch, DetailsTxns } from '../../components/common/Details';
import DetailsLayer from '../../components/common/Details/DetailsLayer';
import longFormHash from '../../helper/longFormHash';
import TxnsStatus from '../../components/common/TxnsStatus';
import DetailAccount from '../../components/common/Details/DetailAccount';
import DetailReward from '../../components/common/Details/DetailReward';
import DetailsEmptyPage from '../../components/common/Details/DetailsEmptyPage';

import { getColorByPageName } from '../../helper/getColorByPageName';
import {
  EPOCHS,
  LAYERS,
  REWARDS,
  SMESHER,
  TXNS,
  ACCOUNTS,
  NOT_FOUND,
  BLOCKS,
} from '../../config/constants';
import DetailsBlock from '../../components/common/Details/DetailBlock';
import DetailSmesher from '../../components/common/Details/DetailSmesher';

type Props = {
  name: string,
  id: string,
  uiStore: Object,
  viewStore: Object,
};

const RenderDetailPage = (props: Props) => {
  const { name, id, uiStore, viewStore } = props;
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
            <AmountBlock value="167" unit="epochs" color={getColorByPageName(name)} />
          </div>
          <DetailsEpoch viewStore={viewStore} />
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
            <AmountBlock value="137" unit="layers" color={getColorByPageName(name)} />
          </div>
          <DetailsLayer viewStore={viewStore} />
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
            <CountTxnsBlock value="999,999.224" color={getColorByPageName(name)} />
          </div>
          <TxnsStatus status="approved" />
          <DetailsTxns />
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
            <AmountBlock value="325" unit="accnts" color={getColorByPageName(name)} />
          </div>
          <DetailAccount viewStore={viewStore} />
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
            <AmountBlock value="325" unit="accnts" color={getColorByPageName(name)} />
          </div>
          <DetailSmesher viewStore={viewStore} />
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
            <AmountBlock value="325" unit="smh" color={getColorByPageName(name)} />
          </div>
          <DetailReward viewStore={viewStore} />
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
            <AmountBlock value="123" unit="txns" color={getColorByPageName(name)} />
          </div>
          <DetailsBlock viewStore={viewStore} />
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
            <AmountBlock value="000" unit="txns" color={getColorByPageName(name)} />
          </div>
          <DetailsEmptyPage />
        </>
      );
    default:
      break;
  }
};

export default RenderDetailPage;
