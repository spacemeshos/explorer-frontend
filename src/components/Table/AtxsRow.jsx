// @flow
import * as React from 'react';

import { nanoid } from 'nanoid';
import StatusIcon from '../common/StatusIcon';
import shortFormHash from '../../helper/shortFormHash';
import longFormHash from '../../helper/longFormHash';
import { ATXS, LAYERS } from '../../config/constants';
import { byteConverter } from '../../helper/converter';
import {Link} from "react-router-dom";

const AtxsRow = ({ data }) => {
  return (
    data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <StatusIcon status="confirmed" />
          <Link to={`/${ATXS}/${item.id}`}>
            {shortFormHash(item.id)}
          </Link>
        </div>
        <div className="td">
          {byteConverter(item.cSize)}
        </div>
        <div className="td">
          <Link to={`/${LAYERS}/${item.layer}`}>
            {item.layer}
          </Link>
        </div>
        <div className="td">
          <Link to={`/${ATXS}/${item.prevAtx}`}>
            {longFormHash(item.prevAtx)}
          </Link>
        </div>
      </div>
    ))
  );
};

export default AtxsRow;
