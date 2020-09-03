// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import StatusIcon from '../StatusIcon';
import shortFormHash from '../../../helper/shortFormHash';
import longFormHash from '../../../helper/longFormHash';

import { ACCOUNTS, LAYERS, TXNS } from '../../../config/constants';
import Loader from '../Loader';
import NoData from '../NoData';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const TransactionsRow = (props: Props) => {
  const { data, viewStore } = props;

 return data.case({
   pending: () => {
     return <Loader size={100}/>
   },
   fulfilled: ({ data }) => {

     return (
       data.length !== 0 ? data.map((item) => (
         <div key={nanoid()} className="tr">
           <div className="td">
             <StatusIcon status="confirmed" />
             <a href={`/${TXNS}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, TXNS, item.id)}>
               {shortFormHash(item.id)}
             </a>
           </div>
           <div className="td">
             <a href={`/${LAYERS}/${item.layer}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, item.layer)}>
               {item.layer}
             </a>
           </div>
           <div className="td">{item.amount}</div>
           <div className="td">
             <a href={`/${ACCOUNTS}/${item.sender}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, item.from)}>
               {longFormHash(item.sender)}
             </a>
             <div className="arrow">-&gt;</div>
           </div>
           <div className="td">
             <a href={`/${ACCOUNTS}/${item.receiver}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, item.to)}>
               {longFormHash(item.receiver)}
             </a>
           </div>
           <div className="td">{item.type}</div>
         </div>
       )) : (<NoData />)
     )
   },
   rejected: () => (<NoData />),
 })
};

export default observer(TransactionsRow);
