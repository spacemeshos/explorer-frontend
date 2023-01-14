// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { byteConverter } from '../../helper/converter';
import Loader from '../common/Loader';
import {
  ACCOUNTS, EPOCHS, LAYERS, SMESHER,
} from '../../config/constants';
import {useStore} from "../../store";
import {Link} from "react-router-dom";

type Props = {
  accounts: string,
  rewards: string,
  security: string,
  epoch: string,
  layer: string,
  smeshers: string,
}

const InfoBlock = (props: Props) => {
  const { accounts, security, epoch, layer, smeshers } = props;

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
        {/* <li className="infoBlock-item"> */}
        {/*  <p className="infoBlock-item-number"> */}
        {/*    <a href={`/${REWARDS}`} onClick={(e) => onClickHandler(e, REWARDS)}> */}
        {/*      {formatSmidge(rewards) || (<Loader size={15} />)} */}
        {/*    </a> */}
        {/*  </p> */}
        {/*  <p className="infoBlock-item-title">smeshing rewards</p> */}
        {/* </li> */}
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">{byteConverter(security)}</p>
          <p className="infoBlock-item-title">security</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">
            {/*//onClick={(e) => viewStore.linkHandler(e, EPOCHS, epoch)}*/}
            <Link to={`/${EPOCHS}/${epoch}`}>
              {JSON.stringify(epoch) || (<Loader size={15} />)}
            </Link>
          </p>
          <p className="infoBlock-item-title">epoch</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">
            <Link to={`/${LAYERS}/${layer}`}>
              {JSON.stringify(layer) || (<Loader size={15} />)}
            </Link>
          </p>
          <p className="infoBlock-item-title">layer</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">
            <Link to={`/${SMESHER}`}>
              {JSON.stringify(smeshers) || (<Loader size={15} />)}
            </Link>
          </p>
          <p className="infoBlock-item-title">active smeshers</p>
        </li>
      </ul>
    </div>
  );
};

export default observer(InfoBlock);
