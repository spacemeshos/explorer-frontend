// @flow
import * as React from 'react';
import Badge from '../Badge';
import { smhCoinConverter } from '../../../helper/converter';

type Props = {
  color: string,
  data: Object,
};

const CountTxnsBlock = (props: Props) => {
  const { data, color } = props;

  const value = data && data.amount && smhCoinConverter(data.amount, true);

  const setFontSize = (data) => {
    return `50px`;
  };

  return (
    <div style={{ backgroundColor: color.bgColor }} className="countBlock">
      {data && (
        <>
          <div className="countBlock-number" style={{ color: color.textColor }}>{value.value}</div>
          <div className="countBlock-unit">{value.unit}</div>
          <div className="countBlock-badge">
            <Badge type="sent" />
            <Badge type="coin" />
          </div>
          <div className="countBlock-time">
            <p>000/00/0000</p>
            <p>12:34:12 PM +UTC</p>
            <p className="timeAgo">0000000 AGO</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CountTxnsBlock;
