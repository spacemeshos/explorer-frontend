// @flow
import * as React from 'react';
import Badge from '../Badge';
import CustomTimeAgo from '../CustomTimeAgo';
import {formattedDate, formattedTime} from '../../../helper/formatter';

type Props = {
  color: string,
  amount: string,
  unit: string,
  startTime: number,
  badgeType?: string,
};

const CountAtxBlock = (props: Props) => {
  const { amount, unit, color, startTime, badgeType } = props;

  const selectedBadgeType = badgeType ? badgeType : 'coin';

  const shortForm = () => {
    return (
      <div style={{ backgroundColor: color.bgColor }} className="countBlock">
        <div className="countBlock-number" style={{ color: color.textColor }}>{amount}</div>
        <div className="countBlock-unit">{unit}</div>
        <div className="countBlock-badge">
          <Badge className="bm" type={selectedBadgeType} />
        </div>
        <div className="countBlock-time">
          <p>{startTime ? formattedDate(startTime) : '00/00/0000'}</p>
          <p>{startTime ? formattedTime(startTime) : '00:00:00 PM' }</p>
          <p className="timeAgo">
            <CustomTimeAgo time={startTime}/>
          </p>
        </div>
      </div>
    )
  };

  const longForm = () => {
    return (
      <div style={{ backgroundColor: color.bgColor }} className="countBlockLong">
        <div className="countBlockLong-value">
          <div className="number">
            <span style={{color: color.textColor}} className="value">{amount}</span>
            <span className="unit">{unit}</span>
          </div>
          <div className="time">
            <span className="time-date">{startTime ? formattedDate(startTime) : '00/00/0000'}</span>
            <span className="time-clock">{startTime ?formattedTime(startTime) : '00:00:00 PM' }</span>
          </div>
        </div>
        <div className="countBlockLong-badge">
          <Badge type="coin"/>
        </div>
      </div>
    )
  };

  return (
    amount && (amount.length > 3 ? longForm() : shortForm())
  );
};

export default CountAtxBlock;
