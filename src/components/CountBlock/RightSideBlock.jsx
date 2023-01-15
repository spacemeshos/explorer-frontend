// @flow
import React from 'react';
import { observer } from 'mobx-react';
import { formatSmidge } from '../../helper/converter';
import { setFontSize, setLineHeight } from '../../helper/cssHelper';
import { formattedDate } from '../../helper/formatter';
import CustomTimeAgo from '../common/CustomTimeAgo';
import { commaNumber } from '../../helper/comma';

type Props = {
  color: string,
  unit: string,
  number: string,
  startTime?: number,
  coinCaption?: string,
  coins?: string,
  label?: string,
};

const RightSideBlock = (props: Props) => {
  const { color, unit, number, startTime, coinCaption, coins, label } = props;

  const blockWithTime = () => (
    <div style={{ backgroundColor: color.bgColor }} className="amountBlock">
      <span
        style={{
          color: color.textColor,
          fontSize: setFontSize(number),
          lineHeight: setLineHeight(number),
        }}
        className="amountBlock-number"
      >
        {commaNumber(number) || '000'}
      </span>
      <p className="amountBlock-unit">{unit}</p>
      <div className="amountBlock-timeWrap">
        {label ? (
          <p>{label}</p>
        ) : null}
        {startTime ? (
          <p>
            {formattedDate(startTime)}
          </p>
        ) : '00/00/0000'}
        <p className="amountBlock-timeWrap-timeAgo">
          <CustomTimeAgo time={startTime} />
        </p>
      </div>
    </div>
  );

  const blockWithCoin = () => (
    <div className="rightColumn" style={{ backgroundColor: color.bgColor }}>
      <div
        className="rightColumn-number"
        style={{
          color: color.textColor,
          fontSize: setFontSize(number),
          lineHeight: setLineHeight(number),
        }}
      >
        {commaNumber(number) || '000'}
      </div>
      <div className="rightColumn-desc">{unit}</div>
      <div className="rightColumn-data">
        <p>{`${coinCaption}`}</p>
        <p>{`${formatSmidge(coins)}`}</p>
      </div>
    </div>
  );
  return (coins ? blockWithCoin() : blockWithTime());
};

export default observer(RightSideBlock);
