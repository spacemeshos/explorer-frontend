// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import {byteConverter, smhCoinConverter} from '../../../helper/converter';
import {ACCOUNTS, LAYERS, SMESHER} from '../../../config/constants';
import {fullDate} from '../../../helper/formatter';
import CustomTimeAgo from '../CustomTimeAgo';

type Props = {
  data: Object,
  viewStore: Object,
};

const DetailReward = (props: Props) => {
  const { data, viewStore } = props;
  const fee = data.total - data.layerReward;

  return (
   <div className="details">
     <ul className="details-list">
       <li className="item">
         <span className="item-name">Id</span>
         <span className="item-value">
          {data._id}
          <CopyButton value={data._id} />
        </span>
       </li>
       <li className="item">
         <span className="item-name">Timestamp</span>
         <span className="item-value">
           <CustomTimeAgo time={data.timestamp} /> {fullDate(data.timestamp)}
        </span>
       </li>
       <li className="item">
         <span className="item-name">Layer Number</span>
         <span className="item-value">
           <a
             href={`/${LAYERS}/${data.layer}`}
             onClick={(e) => viewStore.linkHandler(e, LAYERS, data.layer )}
           >
             {data.layer}
          </a>
        </span>
       </li>
       <li className="item">
         <span className="item-name">Smasher ID</span>
         <span className="item-value">
          <a
            href={`/${SMESHER}/${data.smesher}`}
            onClick={(e) => viewStore.linkHandler(e, SMESHER, data.smesher )}
          >
            {data.smesher}
          </a>
          <CopyButton value={data.smesher} />
        </span>
       </li>
       <li className="item">
         <span className="item-name">Account</span>
         <span className="item-value">
          <a
            href={`/${ACCOUNTS}/${data.coinbase}`}
            onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, data.coinbase )}
          >
            {data.coinbase}
          </a>
          <CopyButton value={data.coinbase} />
        </span>
       </li>
       <li className="item">
         <span className="item-name">Block Reward</span>
         <span className="item-value">{smhCoinConverter(data.total)}</span>
       </li>
       <li className="item">
         <span className="item-name">Space</span>
         <span className="item-value">{byteConverter(data.space)}</span>
       </li>
     </ul>
   </div>
  )
};

export default DetailReward;
