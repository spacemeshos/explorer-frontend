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
  data && data.map((item) => (
    <div key={nanoid()} className="tr">
      <div className="td"><Link to={`/${EPOCHS}/${item.number}`}>{item.number}</Link></div>
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
      <div className="td">
        <Link to={`/${EPOCHS}/${item.number}/${REWARDS}`}>
          {formatSmidge(item.stats.current.rewards)}
        </Link>
      </div>
      <div className="td" style={{ flexGrow: 2 }}>{formatSmidge(item.stats.current.circulation)}</div>
    </div>
  ))
);

export default observer(EpochsRow);
