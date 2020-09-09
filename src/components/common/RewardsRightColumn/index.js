// @flow
import * as React from 'react';
import {smhCoinConverter} from '../../../helper/converter';

type Props = {
  color: string,
  number: string,
  coin: string,
};

const RewardsRightColumn = (props: Props) => {
  const { color, number, coin } = props;
  return (
    <div className="rightColumn" style={{ backgroundColor: color.bgColor }}>
      <div className="rightColumn-number" style={{ color: color.textColor }}>{number || '000'}</div>
      <div className="rightColumn-desc">rewards distributed</div>
      <div className="rightColumn-data">
        {`smash rewards since genesis: ${smhCoinConverter(coin)}`}
      </div>

    </div>
  );
};

export default RewardsRightColumn;
