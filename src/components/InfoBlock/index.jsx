// @flow
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { byteConverter, formatSmidge } from '../../helper/converter';
import Loader from '../Loader';
import {
  ACCOUNTS, EPOCHS, LAYERS, REWARDS, SMESHER,
} from '../../config/constants';

const InfoBlock = ({ accounts, security, epoch, layer, rewards, smeshers }) => (
  <div className="infoBlock">
    <ul className="infoBlock-list">
      <li className="infoBlock-item">
        <p className="infoBlock-item-number">
          <Link to={`/${ACCOUNTS}`}>
            {accounts || (<Loader size={20} />)}
          </Link>
        </p>
        <p className="infoBlock-item-title">Accounts</p>
      </li>
      <li className="infoBlock-item">
        <p className="infoBlock-item-number">
          <Link to={`/${REWARDS}`}>
            {rewards ? formatSmidge(rewards) : (<Loader size={20} />)}
          </Link>
        </p>
        <p className="infoBlock-item-title">smeshing rewards</p>
      </li>
      <li className="infoBlock-item">
        <p className="infoBlock-item-number">{security ? byteConverter(security) : (<Loader size={20} />)}</p>
        <p className="infoBlock-item-title">security</p>
      </li>
      <li className="infoBlock-item">
        <p className="infoBlock-item-number">
          <Link to={`/${EPOCHS}/${epoch}`}>
            {epoch || (<Loader size={20} />)}
          </Link>
        </p>
        <p className="infoBlock-item-title">epoch</p>
      </li>
      <li className="infoBlock-item">
        <p className="infoBlock-item-number">
          <Link to={`/${LAYERS}/${layer}`}>
            {layer || (<Loader size={20} />)}
          </Link>
        </p>
        <p className="infoBlock-item-title">layer</p>
      </li>
      <li className="infoBlock-item">
        <p className="infoBlock-item-number">
          <Link to={`/${SMESHER}`}>
            {smeshers || (<Loader size={20} />)}
          </Link>
        </p>
        <p className="infoBlock-item-title">active smeshers</p>
      </li>
    </ul>
  </div>
);

export default observer(InfoBlock);
