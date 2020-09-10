// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import {
  EPOCHS,
  LAYERS,
  REWARDS,
  SMESHER,
  TXNS,
} from '../../../config/constants';
import { timeAgo, timeWithFormat } from '../../../helper/formatter';
import getValueFromStatsObject from '../../../helper/getValueFromStatsObject';
import {smhCoinConverter} from '../../../helper/converter';

type Props = {
  data: Object,
  viewStore: Object,
};

const DetailsEpoch = (props: Props) => {
  const { data, viewStore } = props;

  const onClickHandler = (e, pageName: string, id: string, subPage: string) => {
    e.preventDefault();
    viewStore.showSubPage({ page: pageName, id, subPage });
  };

  const stats = data && getValueFromStatsObject(data.stats);

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">Epoch Number</span>
          <span className="item-value">
            {data.number}
            <CopyButton value={data.number} />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Started</span>
          <span className="item-value">
             {`${timeAgo(data.start)} ${timeWithFormat(data.start)}`}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Ended</span>
          <span className="item-value">
             {`${timeAgo(data.end)} ${timeWithFormat(data.end)}`}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total Layers</span>
          <span className="item-value">
            <a
              href={`/${EPOCHS}/${data.number}/${LAYERS}`}
              onClick={(e) => viewStore.linkHandler(e, EPOCHS, data.number, LAYERS)}
            >
              {data.layers}
            </a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards number</span>
          <span className="item-value"><a href={`/${EPOCHS}/${data.number}/${REWARDS}`} onClick={(e) => onClickHandler(e, EPOCHS, data.number, REWARDS)}>--</a></span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards value</span>
          <span className="item-value"><a href={`/${EPOCHS}/${data.number}/${REWARDS}`} onClick={(e) => onClickHandler(e, EPOCHS, data.number, REWARDS)}>{smhCoinConverter(stats.rewards)}</a></span>
        </li>
        <li className="item">
          <span className="item-name">Smeshers</span>
          <span className="item-value"><a href={`/${EPOCHS}/${data.number}/${SMESHER}`} onClick={(e) => onClickHandler(e, EPOCHS, data.number, SMESHER)}>{stats.smeshers}</a></span>
        </li>
        <li className="item">
          <span className="item-name">Transactions</span>
          <span className="item-value"><a href={`/${EPOCHS}/${data.number}/${TXNS}`} onClick={(e) => onClickHandler(e, EPOCHS, data.number, TXNS)}>{stats.transactions}</a></span>
        </li>
      </ul>
    </div>
  );
};

export default DetailsEpoch;
