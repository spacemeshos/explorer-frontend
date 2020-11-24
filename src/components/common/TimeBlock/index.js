// @flow
import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { EPOCHS, LAYERS } from '../../../config/constants';

const Props = {
  viewStore: Object,
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
          <div className="value">
            <a href={`/${EPOCHS}/${epoch.number}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, epoch.number)}>
              {epoch.number}
            </a>
          </div>
        </div>
      )}
      {layer && (
        <div className="timeBlock-item">
          <div className="name">Layer</div>
          <div className="value">
            <a href={`/${LAYERS}/${layer.number}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, layer.number)}>
              {layer.number}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(TimeBlock);
