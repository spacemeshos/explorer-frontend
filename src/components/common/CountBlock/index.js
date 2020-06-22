// @flow
import * as React from 'react';

import rgba from '../../../helper/grba';

type Props = {
  numberColor: string,
  bgColor: string,
};

const CountBlock = (props: Props) => {
  const { numberColor, bgColor } = props;
  return (
    <div style={{backgroundColor: rgba(223, 50, 175, 0.2)}} className="countBlock">
      <span style={{color: numberColor}} className="countBlock-number">167</span>
      <p className="countBlock-unit">txns</p>
      <div className="countBlock-timeWrap">
        <p>000/00/0000</p>
        <p>00:00:00 PM +UTC</p>
        <p className="countBlock-timeWrap-timeAgo">0000000 AGO</p>
      </div>
    </div>
  );
};

export default CountBlock;
