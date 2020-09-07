// @flow
import * as React from 'react';
import {smhCoinConverter} from '../../../helper/converter';

type Props = {
  color: string,
  number: string,
  caption: string,
  coinCaption: string,
  coins: number,
};

const RightCountBlock = (props: Props) => {
  const { color, number,  caption, coinCaption, coins} = props;
  return (
    <div className="rightColumn" style={{ backgroundColor: color.bgColor }}>
      <div className="rightColumn-number" style={{ color: color.textColor }}>{number  || '000'}</div>
      <div className="rightColumn-desc">{caption}</div>
      <div className="rightColumn-data">
        <p> {`${coinCaption}: `}</p>
        <p> {`${smhCoinConverter(coins)}`} </p>
      </div>
    </div>
  );
};

export default RightCountBlock;
