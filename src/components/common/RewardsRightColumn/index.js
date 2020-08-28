// @flow
import * as React from 'react';

type Props = {
  color: string,
};

const RewardsRightColumn = (props: Props) => {
  const { color } = props;
  return (
    <div className="rightColumn" style={{ backgroundColor: color.bgColor }}>
      <div className="rightColumn-number" style={{ color: color.textColor }}>000</div>
      <div className="rightColumn-desc">rewards distributed</div>
      <div className="rightColumn-data">
        smash rewards since genesis: 0000000000 SMH
      </div>

    </div>
  );
};

export default RewardsRightColumn;
