// @flow
import * as React from 'react';
import Badge from '../Badge';
import { smhCoinConverter } from '../../../helper/converter';
import moment from 'moment';

type Props = {
  color: string,
  amount: string,
  startTime: number,
  badgeType?: string,
};

const CountTxnsBlock = (props: Props) => {
  const { amount, color, startTime, badgeType } = props;

  const coin = amount && smhCoinConverter(amount, true);
  const fromNow = startTime ? moment.unix(startTime).fromNow() : '0000000 AGO';
  const selectedBadgeType = badgeType ? badgeType : 'coin';

  const shortForm = () => {
    return (
      <div style={{ backgroundColor: color.bgColor }} className="countBlock">
        <div className="countBlock-number" style={{ color: color.textColor }}>{coin.value}</div>
        <div className="countBlock-unit">{coin.unit}</div>
        <div className="countBlock-badge">
          <Badge type="sent" />
          <Badge type={selectedBadgeType} />
        </div>
        <div className="countBlock-time">
          <p>{startTime ? moment.unix(startTime).format('L') : '00/00/0000'}</p>
          <p>{startTime ? moment.unix(startTime).utc().format('LTS') : '00:00:00 PM' }</p>
          <p className="timeAgo">{fromNow}</p>
        </div>
      </div>
    )
  };

  const longForm = () => {
    return (
      <div style={{ backgroundColor: color.bgColor }} className="countBlockLong">
        <div className="countBlockLong-value">
          <div className="number">
            <span style={{color: color.textColor}} className="value">{coin.value}</span>
            <span className="unit">SMH</span>
          </div>
          <div className="time">
            <span className="time-date">{startTime ? moment.unix(startTime).format('L') : '00/00/0000'}</span>
            <span className="time-clock">{startTime ? moment.unix(startTime).utc().format('LTS') : '00:00:00 PM' }</span>
          </div>
        </div>
        <div className="countBlockLong-badge">
          <Badge type="sent"/>
          <Badge type="coin"/>
        </div>
      </div>
    )
  };

  return (
      amount && (coin.length > 5 ? longForm() : shortForm())
  );
};

export default CountTxnsBlock;
