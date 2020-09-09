// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { byteConverter, smhCoinConverter } from '../../../helper/converter';
import Loader from '../Loader';

type Props = {
  transactions: string,
  rewards: string,
  security: string,
  epoch: string,
  layer: string,
  smeshers: string,
}

const InfoBlock = (props: Props) => {
  const { transactions, rewards, security, epoch, layer, smeshers } = props;

  return (
    <div className="infoBlock">
      <ul className="infoBlock-list">
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{transactions || (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">transactions</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{smhCoinConverter(rewards) || (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">smeshing rewards</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{security ? byteConverter(security) : (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">security</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{epoch || (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">epoch</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{layer || (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">layer</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{smeshers || (<Loader size={15} />)}</p>
          <p className="infoBlock-item-title">active smeshers</p>
        </li>
      </ul>
    </div>
  )
};

export default observer(InfoBlock);
