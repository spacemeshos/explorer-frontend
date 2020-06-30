// @flow
import * as React from 'react';

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
} from '../../config/constants';

type Props = {
  name: string,
  id: string,
  subPage: string,
  uiStore: Object,
  viewStore: Object,
};

const RenderSubPage = (props: Props) => {
  const { name, id, subPage, uiStore, viewStore } = props;

  switch(name) {
    case EPOCHS:
      if (subPage === LAYERS) {
        return (<></>)
      }
      if (subPage === TXNS) {
        return (<></>)
      }
      if (subPage === SMESHER) {
        return (<></>)
      }
      if (subPage === ATXS) {
        return (<></>)
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
              <AmountBlock value="167" unit="awards" color={getColorByPageName(name)}/>
            </div>
            <Table name={subPage} viewStore={viewStore}/>
          </>
        )
      }
  }
};

export default RenderSubPage;
