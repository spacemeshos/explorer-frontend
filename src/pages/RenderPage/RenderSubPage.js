// @flow
import * as React from 'react';

import TitleBlock from '../../components/common/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { AmountBlock } from '../../components/common/CountBlock';
import Table from '../../components/common/Table';
import DetailAtxs from '../../components/common/Details/DetailAtxs';
import DetailReward from '../../components/common/Details/DetailReward';

import {
  EPOCHS,
  LAYERS,
  REWARDS,
  SMESHER,
  TXNS,
  ATXS,
  BLOCKS, ACCOUNTS,
} from '../../config/constants';
import longFormHash from '../../helper/longFormHash';

type Props = {
  name: string,
  id: string,
  subPage: string,
  uiStore: Object,
  viewStore: Object,
};

const RenderSubPage = (props: Props) => {
  const { name, id, subPage, uiStore, viewStore } = props;

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
              <AmountBlock value="167" unit="layers" color={getColorByPageName(name)} />
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
              <AmountBlock value="167" unit="txns since genesis" color={getColorByPageName(name)} />
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
              <AmountBlock value="167" unit="smeshers in the epoch" color={getColorByPageName(name)} />
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
              <AmountBlock value="167" unit="txns since genesis" color={getColorByPageName(name)} />
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
                title={`Epoch ${id} - Rewards`}
                color={getColorByPageName(name)}
                desc={`Rewards contained within Epoch ${id}`}
                uiStore={uiStore}
              />
              <AmountBlock value="167" unit="awards" color={getColorByPageName(name)} />
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
                desc={`Transactions within Layer ${id}`}
                uiStore={uiStore}
              />
              <AmountBlock value="167" unit="txns" color={getColorByPageName(name)} />
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
              <AmountBlock value="137" unit="txns" color={getColorByPageName(name)} />
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
                title={`Layer ${id} - blocks`}
                color={getColorByPageName(name)}
                desc={`Blocks within layer ${id}`}
                uiStore={uiStore}
              />
              <AmountBlock value="137" unit="layer blocks" color={getColorByPageName(name)} />
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
              <AmountBlock value="167" unit="awards" color={getColorByPageName(name)} />
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
                title={`Smesher ${id} - ATX Details`}
                color={getColorByPageName(name)}
                desc="Smesher details for this ATX"
                uiStore={uiStore}
              />
              <AmountBlock value="000" unit="txns" color={getColorByPageName(name)} />
            </div>
            <DetailAtxs viewStore={viewStore} />
          </>
        );
      }
      if (subPage === REWARDS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Smesher ${id} - Details`}
                color={getColorByPageName(name)}
                desc="Smesher details for this reward"
                uiStore={uiStore}
              />
              <AmountBlock value="000" unit="txns" color={getColorByPageName(name)} />
            </div>
            <DetailReward viewStore={viewStore} />
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
                title={`ACCOUNT ${longFormHash(id)} - Transactions`}
                color={getColorByPageName(name)}
                desc={`Transactions contained within account ${longFormHash('0x0klsda7as8asbadskjhkjdjyuye32423423')}`}
                uiStore={uiStore}
              />
              <AmountBlock value="000" unit="txns" color={getColorByPageName(name)} />
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
                title={`ACCOUNT ${longFormHash(id)} - Transactions`}
                color={getColorByPageName(name)}
                desc={`Transactions contained within account ${longFormHash('0x0klsda7as8asbadskjhkjdjyuye32423423')}`}
                uiStore={uiStore}
              />
              <AmountBlock value="000" unit="txns" color={getColorByPageName(name)} />
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

export default RenderSubPage;
