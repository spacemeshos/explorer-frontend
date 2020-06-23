// @flow
import * as React from 'react';

type Props = {
  color: string,
};

const CountBlock = (props: Props) => {
  const { color } = props;

  return (
    <div style={{backgroundColor: color.bgColor}} className="countBlock">
      <span style={{color: color.textColor}} className="countBlock-number">167</span>
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
