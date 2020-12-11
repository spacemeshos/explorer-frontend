// @flow
import * as React from 'react';
import { observer } from 'mobx-react';

import CustomTimeAgo from '../CustomTimeAgo';

import { formattedDate } from '../../../helper/formatter';

type Props = {
  color: string,
  unit: string,
  number: string,
  startTime: number,
};

const AmountBlock = (props: Props) => {
  const { color, unit, number, startTime } = props;

  const setFontSize = () => {
    if (number && number.length < 5) return '60px';
    if (number && number.length > 5) return '42px';
    if (number && number.length > 8) return '34px';
  };

  const setLineHeight = () => {
    if (number && number.length < 5) return '42px';
    if (number && number.length > 5) return '36px';
    if (number && number.length > 8) return '28px';
  };

  return (
    <div style={{ backgroundColor: color.bgColor }} className="amountBlock">
      <span
        style={{
          color: color.textColor,
          fontSize: setFontSize(number),
          lineHeight: setLineHeight(number),
        }}
        className="amountBlock-number"
      >
        {number || '000'}
      </span>
      <p className="amountBlock-unit">{unit}</p>
      <div className="amountBlock-timeWrap">
        <p>{startTime ? formattedDate(startTime) : '00/00/0000'}</p>
        <p className="amountBlock-timeWrap-timeAgo">
          <CustomTimeAgo time={startTime} />
        </p>
      </div>
    </div>
  );
};

export default observer(AmountBlock);
