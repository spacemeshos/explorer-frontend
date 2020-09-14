// @flow
import React from 'react';
import moment from 'moment';
import { smhCoinConverter } from '../../../helper/converter';
import { setFontSize, setLineHeight } from '../../../helper/cssHelper';
import {observer} from 'mobx-react';

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
  const fromNow = startTime ? moment.unix(startTime).fromNow() : '0000000 AGO';

  const blockWithTime = () => (
    <div style={{ backgroundColor: color.bgColor }} className="amountBlock">
      <span style={{
        color: color.textColor,
        fontSize: setFontSize(number),
        lineHeight: setLineHeight(number)
      }} className="amountBlock-number">{number || '000'}</span>
      <p className="amountBlock-unit">{unit}</p>
      <div className="amountBlock-timeWrap">
        <p>{startTime ? moment.unix(startTime).format('L') : '00/00/0000'}</p>
        <p>{startTime ? moment.unix(startTime).utc().format('LTS') : '00:00:00 PM' } + UTC</p>
        <p className="amountBlock-timeWrap-timeAgo">{fromNow}</p>
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
