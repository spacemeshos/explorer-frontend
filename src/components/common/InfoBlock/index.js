// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { byteConverter } from '../../../helper/converter';
import Loader from '../Loader';
import {toJS} from 'mobx';

type Props = {
  data: Object,
}

const InfoBlock = (props: Props) => {
  const { data } = props;
  const value = toJS(data);

  return (
    <div className="infoBlock">
      <ul className="infoBlock-list">
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{value ? value.transactions : (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">transactions</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{value ? value.smeshingRewards : (<Loader size={15} />)} SMH</p>
          <p className="infoBlock-item-title">smeshing rewards</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{value ? byteConverter(value.security) : (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">security</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{value ? value.epochs : (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">epoch</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{value ? value.layers : (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">layer</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{value ? value.activeSmeshers : (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">active smeshers</p>
        </li>
      </ul>
    </div>
  )
};

export default observer(InfoBlock);
