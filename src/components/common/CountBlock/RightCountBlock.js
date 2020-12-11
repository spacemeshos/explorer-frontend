// @flow
import * as React from 'react';
import { smhCoinConverter } from '../../../helper/converter';

type Props = {
  color: string,
  number: string,
  caption: string,
  coinCaption: string,
  coins: number,
};

const RightCountBlock = (props: Props) => {
  const { color, number, caption, coinCaption, coins } = props;

  const setFontSize = () => {
    if (number && number.length < 5) return '60px';
    if (number && number.length >= 5) return '42px';
    if (number && number.length > 8) return '34px';
  };

  const setLineHeight = () => {
    if (number && number.length < 5) return '42px';
    if (number && number.length >= 5) return '36px';
    if (number && number.length > 8) return '28px';
  };

  return (
    <div className="rightColumn" style={{ backgroundColor: color.bgColor }}>
      <div
        className="rightColumn-number"
        style={{
          color: color.textColor,
          fontSize: setFontSize(number),
          lineHeight: setLineHeight(number),
        }}
      >
        {number || '000'}
      </div>
      <div className="rightColumn-desc">{caption}</div>
      <div className="rightColumn-data">
        <p>
          {`${coinCaption} `}
        </p>
        <p>
          {`${smhCoinConverter(coins)}`}
        </p>
      </div>
    </div>
  );
};

export default RightCountBlock;
