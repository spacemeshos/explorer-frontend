// @flow
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { EPOCHS, LAYERS } from '../../config/constants';
import { calculateEpoch } from '../../helper/converter';
import { useStore } from '../../store';

const TimeBlock = () => {
  const { nodeStatus, netInfo } = useStore();
  return (
    <div className="timeBlock">
      {nodeStatus && nodeStatus.latestLayer && netInfo && netInfo.layersPerEpoch && (
        <div className="timeBlock-item">
          <div className="name">Epoch</div>
          <div className="value">
            <Link to={`/${EPOCHS}/${calculateEpoch(nodeStatus.latestLayer, netInfo.layersPerEpoch)}`}>
              {calculateEpoch(nodeStatus.latestLayer, netInfo.layersPerEpoch)}
            </Link>
          </div>
        </div>
      )}
      {nodeStatus && nodeStatus.latestLayer && (
        <div className="timeBlock-item">
          <div className="name">Layer</div>
          <div className="value">
            <Link to={`/${LAYERS}/${nodeStatus.latestLayer}`}>
              {nodeStatus.latestLayer}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(TimeBlock);
