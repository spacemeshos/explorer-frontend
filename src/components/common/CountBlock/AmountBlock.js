// @flow
import * as React from 'react';

type Props = {
  color: string,
  unit: string,
};

const AmountBlock = (props: Props) => {
  const { color, unit } = props;

  return (
    <div style={{backgroundColor: color.bgColor}} className="amountBlock">
      <span style={{color: color.textColor}} className="amountBlock-number">167</span>
      <p className="amountBlock-unit">{unit}</p>
      <div className="amountBlock-timeWrap">
        <p>000/00/0000</p>
        <p>00:00:00 PM +UTC</p>
        <p className="amountBlock-timeWrap-timeAgo">0000000 AGO</p>
      </div>
    </div>
  );
};

export default AmountBlock;
