// @flow
import * as React from 'react';

const TimeBlock = () => {
  const epoch = '0';
  const layer = null;

  return (
    <div className="timeBlock">
      {epoch && (
        <div className="timeBlock-item">
          <div className="name">Epoch</div>
          <div className="value">{epoch}</div>
        </div>
      )}
      {layer && (
        <div className="timeBlock-item">
          <div className="name">Layer</div>
          <div className="value">{layer}</div>
        </div>
      )}
    </div>
  );
};

export default TimeBlock;
