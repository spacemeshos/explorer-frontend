// @flow
import React, { useState } from 'react';
import SmoothCollapse from 'react-smooth-collapse';

import CopyButton from '../CopyButton';
import { ACCOUNTS, USD_RATE } from '../../../config/constants';
import { smhCoinConverter } from '../../../helper/converter';
import { fullDate } from '../../../helper/formatter';
import CustomTimeAgo from '../CustomTimeAgo';

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
          <span className="item-name">From</span>
          <span className="item-value">
            <a href={`/${ACCOUNTS}/${data.sender}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, data.sender)}>{data.sender}</a>
            <CopyButton value={data.sender} />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Timestamp</span>
          <span className="item-value">
            <CustomTimeAgo time={data.timestamp} />
            {`${fullDate(data.timestamp)}`}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Counter</span>
          <span className="item-value">{data.counter}</span>
        </li>
        <li className="item">
          <span className="item-name">App Instance</span>
          <span className="item-value">0</span>
        </li>
        <li className="item">
          <span className="item-name">Code Template</span>
          <span className="item-value">0</span>
        </li>
        <li className="item">
          <span className="item-name">Value</span>
          <span className="item-value">0</span>
        </li>
        <li className="item">
          <span className="item-name">Fee</span>
          <span className="item-value">
            <a className="dropDownLink" onClick={toggleHandler}>
              {data.fee}
              <span className={arrowClass} />
            </a>
            (&#8765; {`${data.fee * USD_RATE}`} USD)
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
        <li className="item">
          <span className="item-name">Method name</span>
          <span className="item-value">Withdraw</span>
        </li>
        <li className="item">
          <span className="item-name">[Argument Name]</span>
          <span className="item-value">[Argument Value]</span>
        </li>
      </ul>
    </div>
  );
};

export default DetailsCoinTxns;
