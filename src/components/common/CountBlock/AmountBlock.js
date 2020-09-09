// @flow
import * as React from 'react';
import moment from 'moment';
import {observer} from 'mobx-react';

type Props = {
  color: string,
  unit: string,
  number: string,
  startTime: number,
};

const AmountBlock = (props: Props) => {
  const { color, unit, number, startTime } = props;
  const fromNow = startTime ? moment.unix(startTime).fromNow() : '0000000 AGO';

  return (
    <div style={{ backgroundColor: color.bgColor }} className="amountBlock">
      <span style={{ color: color.textColor }} className="amountBlock-number">{number || '000'}</span>
      <p className="amountBlock-unit">{unit}</p>
      <div className="amountBlock-timeWrap">
        <p>{startTime ? moment.unix(startTime).format('L') : '00/00/0000'}</p>
        <p>{startTime ? moment.unix(startTime).utc().format('LTS') : '00:00:00 PM' } + UTC</p>
        <p className="amountBlock-timeWrap-timeAgo">{fromNow}</p>
      </div>
    </div>
  );
};

export default observer(AmountBlock);
