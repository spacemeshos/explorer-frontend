// @flow
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { byteConverter, formatSmidge } from '../../helper/converter';
import Loader from '../Loader';
import {
  ACCOUNTS, EPOCHS, LAYERS, REWARDS, SMESHER,
} from '../../config/constants';

const InfoBlock = ({ accounts, security, epoch, layer, rewards, smeshers }) => (
  <div className="infoBlock">
    <ul className="infoBlock-list">
      <li className="infoBlock-item">
        <p
          className="infoBlock-item-number"
          data-tooltip-id="overview-tooltip"
          data-tooltip-content="This shows the cumulative count of accounts since the genesis block."
          data-tooltip-place="bottom"
        >
          <Link to={`/${ACCOUNTS}`}>
            {accounts || (<Loader size={20} />)}
          </Link>
        </p>
        <p className="infoBlock-item-title">Accounts</p>
      </li>
      <li className="infoBlock-item">
        <p
          className="infoBlock-item-number"
          data-tooltip-id="overview-tooltip"
          data-tooltip-content="This shows the total combined value of all rewards distributed in SMH for the current epoch."
          data-tooltip-place="bottom"
        >
          <Link to={`/${REWARDS}`}>
            {rewards ? formatSmidge(rewards) : (<Loader size={20} />)}
          </Link>
        </p>
        <p className="infoBlock-item-title">smeshing rewards</p>
      </li>
      <li className="infoBlock-item">
        <p
          className="infoBlock-item-number"
          data-tooltip-id="overview-tooltip"
          data-tooltip-content="This shows the amount of storage committed by all active smeshers in the previous epoch."
          data-tooltip-place="bottom"
        >
          {security ? byteConverter(security) : (<Loader size={20} />)}
        </p>
        <p className="infoBlock-item-title">security</p>
      </li>
      <li className="infoBlock-item">
        <p
          className="infoBlock-item-number"
          data-tooltip-id="overview-tooltip"
          data-tooltip-content="This shows the current epoch number."
          data-tooltip-place="bottom"
        >
          <Link to={`/${EPOCHS}/${epoch}`}>
            {epoch || (<Loader size={20} />)}
          </Link>
        </p>
        <p className="infoBlock-item-title">epoch</p>
      </li>
      <li className="infoBlock-item">
        <p
          className="infoBlock-item-number"
          data-tooltip-id="overview-tooltip"
          data-tooltip-content="This shows the current layer number."
          data-tooltip-place="bottom"
        >
          <Link to={`/${LAYERS}/${layer}`}>
            {layer || (<Loader size={20} />)}
          </Link>
        </p>
        <p className="infoBlock-item-title">layer</p>
      </li>
      <li className="infoBlock-item">
        <p
          className="infoBlock-item-number"
          data-tooltip-id="overview-tooltip"
          data-tooltip-content="This shows the count of active smeshers in the current epoch."
          data-tooltip-place="bottom"
        >
          <Link to={`/${SMESHER}`}>
            {smeshers || (<Loader size={20} />)}
          </Link>
        </p>
        <p className="infoBlock-item-title">active smeshers</p>
      </li>
    </ul>
    <Tooltip id="overview-tooltip" />
  </div>
);

export default observer(InfoBlock);
