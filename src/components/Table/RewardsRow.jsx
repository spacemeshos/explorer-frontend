// @flow
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import { Link } from 'react-router-dom';
import { Spacemeshv2alpha1Reward } from 'api';
import longFormHash from '../../helper/longFormHash';
import {
  ACCOUNTS,
  LAYERS,
  SMESHER,
} from '../../config/constants';
import { base64ToHex, formatSmidge } from '../../helper/converter';

type Props = {
  data: Spacemeshv2alpha1Reward[],
}

const RewardsRow = ({ data }: Props) => (
  data && data.length !== 0 && data.map((item: Spacemeshv2alpha1Reward) => (
    <div key={nanoid()} className="tr">
      <div className="td">
        <Link to={`/${ACCOUNTS}/${item.coinbase}`}>
          {longFormHash(item.coinbase)}
        </Link>
      </div>
      <div className="td">
        <Link to={`/${SMESHER}/${base64ToHex(item.smesher)}`}>
          {longFormHash(base64ToHex(item.smesher))}
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
