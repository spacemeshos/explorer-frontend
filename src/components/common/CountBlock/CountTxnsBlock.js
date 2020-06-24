// @flow
import * as React from 'react';
import Badge from '../Badge';

type Props = {
  color: string,
  value: string,
};

const CountTxnsBlock = (props: Props) => {
  const { color, value } = props;

  const setFontSize = (value) => {
    return value.length === 2 ? '72px' : '55px';
  };

  return (
    value.length <= 3 ? (
      <div style={{backgroundColor: color.bgColor}} className="countBlock">
        <div className="countBlock-number">
          <span style={{color: color.textColor, fontSize: setFontSize(value)}} className="value">{value}</span>
          <span className="unit">SMH</span>
        </div>
        <div className="countBlock-badge">
          <Badge type="sent"/>
          <Badge type="coin"/>
        </div>
        <div className="countBlock-time">
          <p>000/00/0000</p>
          <p>12:34:12 PM +UTC</p>
          <p className="timeAgo">0000000 AGO</p>
        </div>
      </div>
    ) : (
      <div style={{backgroundColor: color.bgColor}} className="countBlockLong">
        <div className="countBlockLong-column">
          <div className="number">
            <span style={{color: color.textColor}} className="value">{value}</span>
            <span className="unit">SMH</span>
          </div>
          <div className="time">
            <span>000/00/0000</span>
            <span>12:34:12 PM +UTC</span>
          </div>
        </div>
        <div className="countBlockLong-badge">
          <Badge type="sent"/>
          <Badge type="coin"/>
        </div>
      </div>
    )
  );
};

export default CountTxnsBlock;
