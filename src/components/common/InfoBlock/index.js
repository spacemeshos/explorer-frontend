// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { byteConverter } from '../../../helper/converter';

type Props = {
  data: Object,
}

const InfoBlock = (props: Props) => {
  const { data } = props;
  const { value } = data;

  return (
    <div className="infoBlock">
      <ul className="infoBlock-list">
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{value ? value.transactions : '--'}</p>
          <p className="infoBlock-item-title">transactions</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{value ? value.smeshingRewards : '--'} SMH</p>
          <p className="infoBlock-item-title">smeshing rewards</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{value ? byteConverter(value.security) : '--'}</p>
          <p className="infoBlock-item-title">security</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{value ? value.epochs : '--'}</p>
          <p className="infoBlock-item-title">epoch</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{value ? value.layers : '--'}</p>
          <p className="infoBlock-item-title">layer</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{value ? value.activeSmeshers : '--'}</p>
          <p className="infoBlock-item-title">active smeshers</p>
        </li>
      </ul>
    </div>
  )
};

export default observer(InfoBlock);
