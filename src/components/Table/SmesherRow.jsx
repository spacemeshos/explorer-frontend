// @flow
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import shortFormHash from '../../helper/longFormHash';

import { ACCOUNTS, SMESHER } from '../../config/constants';
import { base64ToHex, byteConverter } from '../../helper/converter';
import { useStore } from '../../store';
import Loader from '../Loader';

const SmesherRow = ({ data }) => {
  const store = useStore();
  const [atxs, setAtxs] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (data && data.length > 0) {
        setIsFetching(true);
        try {
          const promises = data.map(async (item) => {
            const res = await store.api.activation.activationServiceList({
              smesherId: [item.pubkey],
              limit: 100,
            });
            return { [item.pubkey]: res };
          });

          const allStats = await Promise.all(promises);
          const combinedStats = allStats.reduce((acc, result) => ({ ...acc, ...result }), {});
          setAtxs(combinedStats);
        } catch (error) {
          console.error(error);
        } finally {
          setIsFetching(false);
        }
      }
    };
    fetchData();
  }, [data]);

  if (isFetching) {
    return <Loader size={100} />;
  }

  return data && data.map((item) => (
    <div key={nanoid()} className="tr">
      <div className="td">
        <Link to={`/${SMESHER}/${base64ToHex(item.pubkey)}`}>
          {shortFormHash(base64ToHex(item.pubkey))}
        </Link>
      </div>
      <div className="td">
        <Link to={`/${ACCOUNTS}/${item.coinbase}`}>
          {shortFormHash(atxs[item.pubkey].activations[atxs[item.pubkey].activations.length - 1].coinbase)}
        </Link>
      </div>
      <div className="td">
        {byteConverter(atxs[item.pubkey].activations[atxs[item.pubkey].activations.length - 1].numUnits * store.postUnitSize)}
      </div>
      <div className="td">
        <Link to={`/${SMESHER}/${base64ToHex(item.pubkey)}`}>{item.atxs}</Link>
      </div>
    </div>
  ));
};

export default observer(SmesherRow);
