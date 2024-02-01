// @flow
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import { Link } from 'react-router-dom';
import shortFormHash from '../../helper/shortFormHash';
import longFormHash from '../../helper/longFormHash';
import {
  ACCOUNTS,
  LAYERS,
  REWARDS, SMESHER,
} from '../../config/constants';
import { formatSmidge } from '../../helper/converter';

const RewardsRow = ({ data }) => (
  data && data.length !== 0 && data.map((item) => (
    <div key={nanoid()} className="tr">
      <div className="td">
        <Link to={`/${REWARDS}/${item._id}`}>
          {item.displayName ? shortFormHash(item.displayName) : '--'}
        </Link>
      </div>
      <div className="td">
        <Link to={`/${ACCOUNTS}/${item.coinbase}`}>
          {longFormHash(item.coinbase)}
        </Link>
      </div>
      <div className="td">
        <Link to={`/${SMESHER}/${item.smesher}`}>
          {longFormHash(item.smesher)}
        </Link>
      </div>
      <div className="td">
        <Link to={`/${LAYERS}/${item.layer}`}>
          {item.layer}
        </Link>
      </div>
      <div className="td">
        {formatSmidge(item.total)}
      </div>
    </div>
  ))
);

export default observer(RewardsRow);
