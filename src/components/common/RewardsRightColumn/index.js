// @flow
import * as React from 'react';
import {smhCoinConverter} from '../../../helper/converter';

type Props = {
  color: string,
  number: string,
  coin: string,
};

const RewardsRightColumn = (props: Props) => {
  const { color, number, coin } = props;

  const setFontSize = (number) => {
    const num = JSON.stringify(number);
    if (num && num.length < 5) return '60px';
    if (num && num.length >= 5) return '42px';
    if (num && num.length > 8) return '34px';
  };

  const setLineHeight = (number) => {
    const num = JSON.stringify(number);
    if (num && num.length < 5) return '42px';
    if (num && num.length >= 5) return '36px';
    if (num && num.length > 8) return '28px';
  };

  return (
    <div className="rightColumn" style={{ backgroundColor: color.bgColor }}>
      <div className="rightColumn-number" style={{
        color: color.textColor,
        fontSize: setFontSize(number),
        lineHeight: setLineHeight(number)
      }}>{number || '000'}</div>
      <div className="rightColumn-desc">rewards distributed</div>
      <div className="rightColumn-data">
        {`smash rewards since genesis: ${smhCoinConverter(coin)}`}
      </div>
    </div>
  );
};

export default RewardsRightColumn;
