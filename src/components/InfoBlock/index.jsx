// @flow
import * as React from 'react';
import {observer} from 'mobx-react';
import {byteConverter, formatSmidge} from '../../helper/converter';
import Loader from '../Loader';
import {
    ACCOUNTS, EPOCHS, LAYERS, SMESHER,
} from '../../config/constants';
import {Link} from "react-router-dom";

const InfoBlock = ({accounts, security, epoch, layer, smeshers}) => {
    return (
        <div className="infoBlock">
            <ul className="infoBlock-list">
                <li className="infoBlock-item">
                    <p className="infoBlock-item-number">
                        <Link to={`/${ACCOUNTS}`}>
                            {JSON.stringify(accounts) || (<Loader size={15}/>)}
                        </Link>
                    </p>
                    <p className="infoBlock-item-title">Accounts</p>
                </li>
                <li className="infoBlock-item">
                    <p className="infoBlock-item-number">
                        <Link to={`/${REWARDS}`}>
                            {formatSmidge(rewards) || (<Loader size={15}/>)}
                        </Link>
                    </p>
                    <p className="infoBlock-item-title">smeshing rewards</p>
                </li>
                <li className="infoBlock-item">
                    <p className="infoBlock-item-number">{byteConverter(security)}</p>
                    <p className="infoBlock-item-title">security</p>
                </li>
                <li className="infoBlock-item">
                    <p className="infoBlock-item-number">
                        <Link to={`/${EPOCHS}/${epoch}`}>
                            {JSON.stringify(epoch) || (<Loader size={15}/>)}
                        </Link>
                    </p>
                    <p className="infoBlock-item-title">epoch</p>
                </li>
                <li className="infoBlock-item">
                    <p className="infoBlock-item-number">
                        <Link to={`/${LAYERS}/${layer}`}>
                            {JSON.stringify(layer) || (<Loader size={15}/>)}
                        </Link>
                    </p>
                    <p className="infoBlock-item-title">layer</p>
                </li>
                <li className="infoBlock-item">
                    <p className="infoBlock-item-number">
                        <Link to={`/${SMESHER}`}>
                            {JSON.stringify(smeshers) || (<Loader size={15}/>)}
                        </Link>
                    </p>
                    <p className="infoBlock-item-title">active smeshers</p>
                </li>
            </ul>
        </div>
    );
};

export default observer(InfoBlock);
