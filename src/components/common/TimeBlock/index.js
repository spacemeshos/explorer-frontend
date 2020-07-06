// @flow
import * as React from 'react';

type Props = {

};

const TimeBlock = (props: Props) => {
  const epoch = 123123123;
  const layer = 123123;

  return (
    <div className="timeBlock">
      <div className="timeBlock-item">
        <div className="name">Epoch</div>
        <div className="value">{epoch}</div>
      </div>
    </div>
  );
};

export default TimeBlock;
