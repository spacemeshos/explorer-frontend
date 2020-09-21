// @flow
import React from 'react';
import { smhCoinConverter } from '../../../helper/converter';
import { setFontSize, setLineHeight } from '../../../helper/cssHelper';
import { observer } from 'mobx-react';
import { formattedDate, formattedTime } from '../../../helper/formatter';
import CustomTimeAgo from '../CustomTimeAgo';

type Props = {
  color: string,
  unit: string,
  number: string,
  startTime?: number,
  coinCaption?: string,
  coins?: string,
};


const RightSideBlock = (props: Props) => {
  const { color, unit, number, startTime, coinCaption, coins } = props;

  const blockWithTime = () => (
    <div style={{ backgroundColor: color.bgColor }} className="amountBlock">
      <span style={{
        color: color.textColor,
        fontSize: setFontSize(number),
        lineHeight: setLineHeight(number)
      }} className="amountBlock-number">{number || '000'}</span>
      <p className="amountBlock-unit">{unit}</p>
      <div className="amountBlock-timeWrap">
        <p>{startTime ? formattedDate(startTime) : '00/00/0000'}</p>
        <p>{startTime ? formattedTime(startTime) : '00:00:00 PM' }</p>
        <p className="amountBlock-timeWrap-timeAgo">
          <CustomTimeAgo time={startTime}/>
        </p>
      </div>
    </div>
  );

  const blockWithCoin = () => (
    <div className="rightColumn" style={{ backgroundColor: color.bgColor }}>
      <div className="rightColumn-number" style={{
        color: color.textColor,
        fontSize: setFontSize(number),
        lineHeight: setLineHeight(number)
      }}>{number || '000'}</div>
      <div className="rightColumn-desc">{unit}</div>
      <div className="rightColumn-data">
        {`${coinCaption}: ${smhCoinConverter(coins)}`}
      </div>
    </div>
  );

  return (startTime ? blockWithTime() : blockWithCoin());
};

export default observer(RightSideBlock);