// @flow
import React, { useState } from 'react';
import SmoothCollapse from 'react-smooth-collapse';

import CopyButton from '../CopyButton';
import { ACCOUNTS } from '../../../config/constants';
import {smhCoinConverter} from '../../../helper/converter';
import {timeAgo, timeWithFormat} from '../../../helper/formatter';

type Props = {
  data: Object,
  viewStore: Object,
};

const DetailsCoinTxns = (props: Props) => {
  const { data, viewStore } = props;
  const [expanded, setExpanded] = useState(false);
  const arrowClass = expanded ? 'arrow isOpen' : 'arrow';

  const toggleHandler = () => setExpanded(!expanded);

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">ID</span>
          <span className="item-value">
            {data.id}
            <CopyButton value={data.id} />
          </span>
        </li>
        <li className="item">
          <span className="item-name">To</span>
          <span className="item-value">
            <a href={`/${ACCOUNTS}/${data.receiver}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, data.receiver)}>{data.receiver}</a>
            <CopyButton value={data.receiver} />
          </span>
        </li>
        <li className="item">
          <span className="item-name">From</span>
          <span className="item-value">
            <a href={`/${ACCOUNTS}/${data.sender}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, data.sender)}>{data.sender}</a>
            <CopyButton value={data.sender} />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Timestamp</span>
          <span className="item-value">{`${timeAgo(data.timestamp)} ${timeWithFormat(data.timestamp)}`}</span>
        </li>
        <li className="item">
          <span className="item-name">Value</span>
          <span className="item-value">{smhCoinConverter(data.amount)}</span>
        </li>
        <li className="item">
          <span className="item-name">Counter</span>
          <span className="item-value">{data.counter}</span>
        </li>
        <li className="item">
          <span className="item-name">Fee</span>
          <span className="item-value">
            <a className="dropDownLink" onClick={toggleHandler}>
              {data.fee}
              <span className={arrowClass} />
            </a>
            (&#8765; 0 USD)
          </span>
        </li>
        <SmoothCollapse expanded={expanded} heightTransition=".35s ease">
          <li className="item sliderDown">
            <span className="item-name">Gas unit provided</span>
            <span className="item-value">--</span>
          </li>
          <li className="item sliderDown">
            <span className="item-name">Gas price</span>
            <span className="item-value">{data.gasPrice} SMH</span>
          </li>
          <li className="item sliderDown">
            <span className="item-name">Gas provided</span>
            <span className="item-value">{data.gasProvided}</span>
          </li>
          <li className="item sliderDown">
            <span className="item-name">Gas used</span>
            <span className="item-value">{data.gasUsed}</span>
          </li>
        </SmoothCollapse>
      </ul>
    </div>
  );
};

export default DetailsCoinTxns;
