// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { byteConverter, smhCoinConverter } from '../../../helper/converter';
import Loader from '../Loader';
import {ACCOUNTS, EPOCHS, LAYERS, REWARDS, SMESHER} from '../../../config/constants';

type Props = {
  viewStore: Object,
  accounts: string,
  rewards: string,
  security: string,
  epoch: string,
  layer: string,
  smeshers: string,
}

const InfoBlock = (props: Props) => {
  const { viewStore, accounts, rewards, security, epoch, layer, smeshers } = props;

  return (
    <div className="infoBlock">
      <ul className="infoBlock-list">
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">
            <a href={`/${ACCOUNTS}`} onClick={() => viewStore.showPage(ACCOUNTS)}>
              {JSON.stringify(accounts) || (<Loader size={15} />)}
            </a>
          </p>
          <p className="infoBlock-item-title">Accounts</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">
            <a href={`/${REWARDS}`} onClick={() => viewStore.showPage(REWARDS)}>
            {smhCoinConverter(rewards) || (<Loader size={15} />)}
            </a>
          </p>
          <p className="infoBlock-item-title">smeshing rewards</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{byteConverter(security)}</p>
          <p className="infoBlock-item-title">security</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">
            <a href={`/${EPOCHS}`} onClick={() => viewStore.showPage(EPOCHS)}>
              {JSON.stringify(epoch) || (<Loader size={15} />)}
            </a>
          </p>
          <p className="infoBlock-item-title">epoch</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">
            <a href={`/${LAYERS}`} onClick={() => viewStore.showPage(LAYERS)}>
              {JSON.stringify(layer) || (<Loader size={15} />)}
            </a>
          </p>
          <p className="infoBlock-item-title">layer</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">
            <a href={`/${SMESHER}`} onClick={() => viewStore.showPage(SMESHER)}>
              {JSON.stringify(smeshers) || (<Loader size={15} />)}
            </a>
          </p>
          <p className="infoBlock-item-title">active smeshers</p>
        </li>
      </ul>
    </div>
  )
};

export default observer(InfoBlock);
