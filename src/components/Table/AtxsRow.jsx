// @flow
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import StatusIcon from '../StatusIcon';
import shortFormHash from '../../helper/shortFormHash';
import { ATXS, EPOCHS } from '../../config/constants';
import { base64ToHex, byteConverter } from '../../helper/converter';
import { useStore } from '../../store';

const AtxsRow = ({ data }) => {
  const store = useStore();
  return data.map((item) => (
    <div key={nanoid()} className="tr">
      <div className="td">
        <StatusIcon status="confirmed" />
        <Link to={`/${ATXS}/${base64ToHex(item.id)}`}>
          {shortFormHash(base64ToHex(item.id))}
        </Link>
      </div>
      <div className="td">
        {byteConverter(item.numUnits * store.postUnitSize)}
      </div>
      <div className="td">
        <Link to={`/${EPOCHS}/${item.publishEpoch + 1}`}>
          {item.publishEpoch + 1}
        </Link>
      </div>
    </div>
  ));
};

export default AtxsRow;
