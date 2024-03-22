// @flow
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import { Link } from 'react-router-dom';
import {
  EPOCHS,
  LAYERS, REWARDS, SMESHER,
  TXNS,
} from '../../config/constants';
import CustomTimeAgo from '../CustomTimeAgo';
import { formatSmidge } from '../../helper/converter';

const EpochsRow = ({ data }) => (
  data && data.map((item) => {
    const futureEpoch = item.start * 1000 > Date.now();
    return (
      <div key={nanoid()} className={`tr ${futureEpoch ? 'futureEpoch' : ''}`}>
        <div className="td">
          <Link to={`/${EPOCHS}/${item.number}`}>
            {item.number}
          </Link>
        </div>
        <div className="td">
          <CustomTimeAgo time={item.start} />
        </div>
        <div className="td">
          <Link to={`/${EPOCHS}/${item.number}/${LAYERS}`}>{item.layers}</Link>
        </div>
        <div className="td">
          <Link to={`/${EPOCHS}/${item.number}/${TXNS}`}>{item.stats.current.transactions}</Link>
        </div>
        <div className="td">
          <Link to={`/${EPOCHS}/${item.number}/${SMESHER}`}>{item.stats.current.smeshers}</Link>
        </div>
        <div className="td" style={{ flexGrow: 2 }}>
          <Link to={`/${EPOCHS}/${item.number}/${REWARDS}`}>
            {formatSmidge(item.stats.current.rewards)}
          </Link>
        </div>
      </div>
    );
  })
);

export default observer(EpochsRow);
