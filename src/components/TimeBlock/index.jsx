// @flow
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { EPOCHS, LAYERS } from '../../config/constants';
import { useStore } from '../../store';
import { calculateEpoch } from '../../helper/converter';

const TimeBlock = () => {
  const store = useStore();

  return (
    <div className="timeBlock">
      {store.nodeStatus.latestLayer && store.netInfo.layersPerEpoch && (
        <div className="timeBlock-item">
          <div className="name">Epoch</div>
          <div className="value">
            <Link to={`/${EPOCHS}/${calculateEpoch(store.nodeStatus.latestLayer, store.netInfo.layersPerEpoch)}`}>
              {calculateEpoch(store.nodeStatus.latestLayer, store.netInfo.layersPerEpoch)}
            </Link>
          </div>
        </div>
      )}
      {store.nodeStatus.latestLayer && (
        <div className="timeBlock-item">
          <div className="name">Layer</div>
          <div className="value">
            <Link to={`/${LAYERS}/${store.nodeStatus.latestLayer}`}>
              {store.nodeStatus.latestLayer}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(TimeBlock);
