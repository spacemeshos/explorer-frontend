// @flow
import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { EPOCHS, LAYERS } from '../../config/constants';
import {useStore} from "../../store";
import {Link} from "react-router-dom";

const TimeBlock = () => {
  const store = useStore();
  const { epoch, layer } = store.networkInfo;

  return (
    <div className="timeBlock">
      {epoch && (
        <div className="timeBlock-item">
          <div className="name">Epoch</div>
          <div className="value">
            <Link to={`/${EPOCHS}/${epoch.number}`}>
              {epoch.number}
            </Link>
          </div>
        </div>
      )}
      {layer && (
        <div className="timeBlock-item">
          <div className="name">Layer</div>
          <div className="value">
            <Link to={`/${LAYERS}/${layer.number}`}>
              {layer.number}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(TimeBlock);
