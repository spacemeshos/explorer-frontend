// @flow
import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

const Props = {
  viewStore: Object
};

const TimeBlock = (props: Props) => {
  const { viewStore } = props;

  const networkInfo = toJS(viewStore.mainInfo);
  const { epoch, layer } = networkInfo;

  return (
    <div className="timeBlock">
      {epoch && (
        <div className="timeBlock-item">
          <div className="name">Epoch</div>
          <div className="value">{epoch.number}</div>
        </div>
      )}
      {layer && (
        <div className="timeBlock-item">
          <div className="name">Layer</div>
          <div className="value">{layer.number}</div>
        </div>
      )}
    </div>
  );
};

export default observer(TimeBlock);
