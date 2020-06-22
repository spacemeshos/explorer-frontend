// @flow
import * as React from 'react';
import TransactionsRow from './TransactionsRow';

import { nanoid } from 'nanoid';

type Props = {

};

const transactionTableConfig = [
  {
    fieldName: 'id'
  },
  {
    fieldName: 'layer'
  },
  {
    fieldName: 'value'
  },
  {
    fieldName: 'from',
  },
  {
    fieldName: 'to'
  },
  {
    fieldName: 'type'
  },
];

const transactionTableData = [
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 32,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh'
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh'
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh'
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh'
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh'
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh'
  },
];

const Table = (props: Props) => {

  const renderTableData = () => {
    return (
      <TransactionsRow key={nanoid()} data={transactionTableData} config={transactionTableConfig}/>
    )
  };

  return (
    <div className="table">
      <div className="tr th">
        { transactionTableConfig.map(item => <div className="td">{item.fieldName}</div>) }
      </div>
      { renderTableData() }
    </div>

  );
};

export default Table;
