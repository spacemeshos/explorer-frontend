// @flow
import * as React from 'react';
import Badge from '../Badge';
import { smhCoinConverter } from '../../../helper/converter';
import moment from './AmountBlock';

type Props = {
  color: string,
  amount: string,
  startTime: number,
};

const CountTxnsBlock = (props: Props) => {
  const { amount, color, startTime } = props;

  const coin = amount && smhCoinConverter(amount, true);
  const fromNow = startTime ? moment.unix(startTime).fromNow() : '0000000 AGO';
  // const setFontSize = (data) => {
  //   return `50px`;
  // };

  return (
    <div style={{ backgroundColor: color.bgColor }} className="countBlock">
      {amount && (
        <>
          <div className="countBlock-number" style={{ color: color.textColor }}>{coin.value}</div>
          <div className="countBlock-unit">{coin.unit}</div>
          <div className="countBlock-badge">
            <Badge type="sent" />
            <Badge type="coin" />
          </div>
          <div className="countBlock-time">
            <p>{startTime ? moment.unix(startTime).format('L') : '00/00/0000'}</p>
            <p>{startTime ? moment.unix(startTime).utc().format('LTS') : '00:00:00 PM' }</p>
            <p className="timeAgo">{fromNow}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CountTxnsBlock;
