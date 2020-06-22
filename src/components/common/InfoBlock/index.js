// @flow
import * as React from 'react';

type Props = {

};

const InfoBlock = (props: Props) => {
  return (
    <div className="infoBlock">
      <ul className="infoBlock-list">
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">3,222</p>
          <p className="infoBlock-item-title">transactions</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">523 SMH</p>
          <p className="infoBlock-item-title">smeshing rewards</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">63.5 PB</p>
          <p className="infoBlock-item-title">security</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">13</p>
          <p className="infoBlock-item-title">epoch</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">126812</p>
          <p className="infoBlock-item-title">layer</p>
        </li>
        <li className="infoBlock-item">
          <p className="infoBlock-item-number">521</p>
          <p className="infoBlock-item-title">active smeshers</p>
        </li>
      </ul>
    </div>
  );
};

export default InfoBlock;
