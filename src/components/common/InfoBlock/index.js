// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { byteConverter } from '../../../helper/converter';
import Loader from '../Loader';
import { toJS } from 'mobx';
import getValueFromStatsObject from '../../../helper/getValueFromStatsObject';
import isEmpty from '../../../helper/isEmpty';

type Props = {
  data: Object,
}

const InfoBlock = (props: Props) => {
  const { data } = props;
  const value = toJS(data);
  const stats = !isEmpty(value) && getValueFromStatsObject(value.stats);

  return (
    <div className="infoBlock">
      <ul className="infoBlock-list">
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{!isEmpty(value) ? stats.transactions : (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">transactions</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{!isEmpty(value) ? stats.rewards : (<Loader size={15} />)} SMH</p>
          <p className="infoBlock-item-title">smeshing rewards</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{!isEmpty(value) ? byteConverter(stats.security) : (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">security</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{!isEmpty(value) ? value.number : (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">epoch</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{!isEmpty(value) ? value.layers : (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">layer</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{!isEmpty(value) ? stats.smeshers : (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">active smeshers</p>
        </li>
      </ul>
    </div>
  )
};

export default observer(InfoBlock);
