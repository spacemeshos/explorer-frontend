// @flow
import * as React from 'react';

import { nanoid } from 'nanoid';
import longFormHash from '../../helper/longFormHash';
import { BLOCKS } from '../../config/constants';
import CustomTimeAgo from '../common/CustomTimeAgo';
import { formatSmidge } from '../../helper/converter';
import {Link} from "react-router-dom";

const BlocksRow = ({ data }) => {
  return (
    data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <Link to={`/${BLOCKS}/${item.id}`}>
            {longFormHash(item.id)}
          </Link>
        </div>
        <div className="td">--</div>
        <div className="td">
          <CustomTimeAgo time={item.start} />
        </div>
        <div className="td">{item.txsnumber}</div>
        <div className="td">{formatSmidge(item.txsvalue)}</div>
      </div>
    ))
  );
};

export default BlocksRow;
