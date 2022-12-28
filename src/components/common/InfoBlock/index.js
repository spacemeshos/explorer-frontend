// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { byteConverter, formatSmidge } from '../../../helper/converter';
import Loader from '../Loader';
import {
  ACCOUNTS, EPOCHS, LAYERS, REWARDS, SMESHER,
} from '../../../config/constants';

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

  const onClickHandler = (e, page) => {
    e.preventDefault();
    viewStore.showPage({ page });
  };

  return (
    <div className="infoBlock">
      <ul className="infoBlock-list">
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">
            <a href={`/${ACCOUNTS}`} onClick={(e) => onClickHandler(e, ACCOUNTS)}>
              {JSON.stringify(accounts) || (<Loader size={15} />)}
            </a>
          </p>
          <p className="infoBlock-item-title">Accounts</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">
            <a href={`/${REWARDS}`} onClick={(e) => onClickHandler(e, REWARDS)}>
              {formatSmidge(rewards) || (<Loader size={15} />)}
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
            <a href={`/${EPOCHS}/${epoch}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, epoch)}>
              {JSON.stringify(epoch) || (<Loader size={15} />)}
            </a>
          </p>
          <p className="infoBlock-item-title">epoch</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">
            <a href={`/${LAYERS}/${layer}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, layer)}>
              {JSON.stringify(layer) || (<Loader size={15} />)}
            </a>
          </p>
          <p className="infoBlock-item-title">layer</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">
            <a href={`/${SMESHER}`} onClick={(e) => onClickHandler(e, SMESHER)}>
              {JSON.stringify(smeshers) || (<Loader size={15} />)}
            </a>
          </p>
          <p className="infoBlock-item-title">active smeshers</p>
        </li>
      </ul>
    </div>
  );
};

export default observer(InfoBlock);
