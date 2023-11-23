// @flow
import { nanoid } from 'nanoid';
import { formatSmidge } from '../../helper/converter';

const BlocksRow = ({ data }) => (
  data.map((item) => (
    <div key={nanoid()} className="tr">
      <div className="td">
        {item.id}
      </div>
      <div className="td">{item.txsnumber}</div>
      <div className="td">{formatSmidge(item.txsvalue)}</div>
    </div>
  ))
);

export default BlocksRow;
