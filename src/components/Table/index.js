// @flow
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import { useLocation } from 'react-router-dom';
import TransactionsRow from './TransactionsRow';
import AccountTxsRow from './AccountTxsRow';
import EpochsRow from './EpochsRow';
import RewardsRow from './RewardsRow';
import AccountsRow from './AccountsRow';
import SmesherRow from './SmesherRow';

import {
  ACCOUNTS,
  EPOCHS,
  LAYERS,
  OVERVIEW,
  REWARDS,
  SMESHER,
  TXNS,
  ATXS,
  BLOCKS,
  STATUS_SUCCESS, STATUS_ERROR, STATUS_LOADING, ACCOUNTS_TXNS,
} from '../../config/constants';
import tableFieldConfig from './config/tableFieldConfig';
import LayersRow from './LayersRow';
import AtxsRow from './AtxsRow';
import BlocksRow from './BlocksRow';
import Loader from '../Loader';
import NoData from '../NoData';
import { useStore } from '../../store';
import { hexToBase64 } from '../../helper/converter';

type Props = {
  name: string,
  subPage?: string,
  id?: string,
  epochs?: any,
}

const Table = ({ name, subPage, id, epochs }: Props) => {
  const store = useStore();
  const { pathname } = useLocation();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(STATUS_LOADING);

  const tableConfigName = subPage || name;
  const pageSize = 20;

  const [currentOffset, setCurrentOffset] = useState(0);
  const [isFetching, setIsFetching] = useState(true);

  const getData = (offset) => {
    switch (name) {
      case OVERVIEW:
      case TXNS:
        store.api.transaction.transactionServiceList({
          limit: pageSize,
          offset,
          sort_order: 1,
          includeState: true,
          includeResult: true,
        }).then((res) => {
          setData(res.transactions);
          setStatus(STATUS_SUCCESS);
          setIsFetching(false);
        }).catch((err) => {
          if (err.status === 429) {
            store.showThrottlePopup();
          }
          setStatus(STATUS_ERROR);
        });
        break;
      case LAYERS:
        if (subPage === REWARDS) {
          store.api.reward.rewardServiceList({
            startLayer: id,
            endLayer: id,
            limit: pageSize,
            offset,
            sort_order: 1,
          }).then((res) => {
            setData(res.rewards);
            setStatus(STATUS_SUCCESS);
            setIsFetching(false);
          }).catch((err) => {
            if (err.status === 429) {
              store.showThrottlePopup();
            }
            setStatus(STATUS_ERROR);
          });
        } else if (subPage === TXNS) {
          store.api.transaction.transactionServiceList({
            startLayer: id,
            endLayer: id,
            limit: pageSize,
            offset,
            sort_order: 1,
            includeState: true,
            includeResult: true,
          }).then((res) => {
            setData(res.transactions);
            setStatus(STATUS_SUCCESS);
            setIsFetching(false);
          }).catch((err) => {
            if (err.status === 429) {
              store.showThrottlePopup();
            }
            setStatus(STATUS_ERROR);
          });
        } else {
          store.api.layer.layerServiceList({
            limit: pageSize,
            offset,
            sort_order: 1,
          }).then((res) => {
            setData(res.layers);
            setStatus(STATUS_SUCCESS);
            setIsFetching(false);
          }).catch((err) => {
            if (err.status === 429) {
              store.showThrottlePopup();
            }
            setStatus(STATUS_ERROR);
          });
        }
        break;
      case REWARDS:
        store.api.reward.rewardServiceList({
          limit: pageSize,
          offset,
          sort_order: 1,
        }).then((res) => {
          setData(res.rewards);
          setStatus(STATUS_SUCCESS);
          setIsFetching(false);
        }).catch((err) => {
          if (err.status === 429) {
            store.showThrottlePopup();
          }
          setStatus(STATUS_ERROR);
        });
        break;
      case ACCOUNTS:
        if (subPage === TXNS) {
          store.api.transaction.transactionServiceList({
            address: id,
            limit: pageSize,
            offset,
            sort_order: 1,
            includeState: true,
            includeResult: true,
          }).then((res) => {
            setData(res.transactions);
            setStatus(STATUS_SUCCESS);
            setIsFetching(false);
          }).catch((err) => {
            if (err.status === 429) {
              store.showThrottlePopup();
            }
            setStatus(STATUS_ERROR);
          });
        } else if (subPage === REWARDS) {
          store.api.reward.rewardServiceList({
            coinbase: id,
            limit: pageSize,
            offset,
            sort_order: 1,
          }).then((res) => {
            setData(res.rewards);
            setStatus(STATUS_SUCCESS);
            setIsFetching(false);
          }).catch((err) => {
            if (err.status === 429) {
              store.showThrottlePopup();
            }
            setStatus(STATUS_ERROR);
          });
        } else {
          store.api.account.accountServiceList({
            limit: pageSize,
            offset,
          }).then((res) => {
            setData(res.accounts);
            setStatus(STATUS_SUCCESS);
            setIsFetching(false);
          }).catch((err) => {
            if (err.status === 429) {
              store.showThrottlePopup();
            }
            setStatus(STATUS_ERROR);
          });
        }
        break;
      case EPOCHS:
        if (subPage === SMESHER) {
          fetch(`${store.statsApiUrl}/smeshers/${id}?limit=${pageSize}&offset=${offset}`)
            .then((res) => {
              if (res.status === 429) {
                store.showThrottlePopup();
                throw new Error('Too Many Requests');
              }
              return res.json();
            })
            .then((res) => {
              setData(res.smeshers);
              setStatus(STATUS_SUCCESS);
              setIsFetching(false);
            });
        } else if (subPage === TXNS) {
          store.api.transaction.transactionServiceList({
            limit: pageSize,
            offset,
            sort_order: 1,
            includeState: true,
            includeResult: true,
            startLayer: store.netInfo.layersPerEpoch * id,
            endLayer: store.netInfo.layersPerEpoch * id + store.netInfo.layersPerEpoch - 1,
          }).then((res) => {
            setData(res.transactions);
            setStatus(STATUS_SUCCESS);
            setIsFetching(false);
          }).catch((err) => {
            if (err.status === 429) {
              store.showThrottlePopup();
            }
            setStatus(STATUS_ERROR);
          });
        } else if (subPage === LAYERS) {
          store.api.layer.layerServiceList({
            limit: pageSize,
            offset,
            sort_order: 1,
            startLayer: store.netInfo.layersPerEpoch * id,
            endLayer: store.netInfo.layersPerEpoch * id + store.netInfo.layersPerEpoch - 1,
          }).then((res) => {
            setData(res.layers);
            setStatus(STATUS_SUCCESS);
            setIsFetching(false);
          }).catch((err) => {
            if (err.status === 429) {
              store.showThrottlePopup();
            }
            setStatus(STATUS_ERROR);
          });
        } else if (subPage === REWARDS) {
          store.api.reward.rewardServiceList({
            limit: pageSize,
            offset,
            sort_order: 1,
            startLayer: store.netInfo.layersPerEpoch * id,
            endLayer: store.netInfo.layersPerEpoch * id + store.netInfo.layersPerEpoch - 1,
          }).then((res) => {
            setData(res.rewards);
            setStatus(STATUS_SUCCESS);
            setIsFetching(false);
          }).catch((err) => {
            if (err.status === 429) {
              store.showThrottlePopup();
            }
            setStatus(STATUS_ERROR);
          });
        } else {
          if (!epochs) {
            break;
          }
          setData(epochs.slice(offset, offset + pageSize));
          setStatus(STATUS_SUCCESS);
          setIsFetching(false);
        }
        break;
      case SMESHER:
        if (subPage === ATXS) {
          store.api.activation.activationServiceList({
            smesherId: [hexToBase64(id)],
            limit: pageSize,
            offset,
          }).then((res) => {
            setData(res.activations);
            setStatus(STATUS_SUCCESS);
            setIsFetching(false);
          }).catch((err) => {
            if (err.status === 429) {
              store.showThrottlePopup();
            }
            setStatus(STATUS_ERROR);
          });
        } else if (subPage === REWARDS) {
          store.api.reward.rewardServiceList({
            smesher: hexToBase64(id),
            limit: pageSize,
            offset,
            sort_order: 1,
          }).then((res) => {
            setData(res.rewards);
            setStatus(STATUS_SUCCESS);
            setIsFetching(false);
          }).catch((err) => {
            if (err.status === 429) {
              store.showThrottlePopup();
            }
            setStatus(STATUS_ERROR);
          });
        } else {
          fetch(`${store.statsApiUrl}/smeshers?limit=${pageSize}&offset=${offset}`)
            .then((res) => {
              if (res.status === 429) {
                store.showThrottlePopup();
                throw new Error('Too Many Requests');
              }
              return res.json();
            })
            .then((res) => {
              setData(res.smeshers);
              setStatus(STATUS_SUCCESS);
              setIsFetching(false);
            });
        }

        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (store.netInfo === null) return;
    getData(0);
  }, [store.netInfo]);

  const renderTableData = () => {
    if (isFetching) {
      return <Loader size={100} />;
    }

    switch (tableConfigName) {
      case OVERVIEW:
        return (
          <TransactionsRow
            key={nanoid()}
            data={data.slice(0, 7)}
            config={tableFieldConfig[tableConfigName]}
          />
        );
      case EPOCHS:
        return (
          <EpochsRow
            key={nanoid()}
            data={data}
            config={tableFieldConfig[tableConfigName]}
          />
        );
      case LAYERS:
        return (
          <LayersRow
            key={nanoid()}
            data={data}
            config={tableFieldConfig[tableConfigName]}
          />
        );
      case TXNS:
        return (
          <TransactionsRow
            key={nanoid()}
            data={data}
            config={tableFieldConfig[tableConfigName]}
            pathname={pathname}
          />
        );
      case REWARDS:
        return (
          <RewardsRow
            key={nanoid()}
            data={data}
            config={tableFieldConfig[tableConfigName]}
          />
        );
      case ACCOUNTS:
        return (
          <AccountsRow
            key={nanoid()}
            data={data}
            config={tableFieldConfig[tableConfigName]}
          />
        );
      case SMESHER:
        return (
          <SmesherRow
            key={nanoid()}
            data={data}
            config={tableFieldConfig[tableConfigName]}
          />
        );
      case ATXS:
        return (
          <AtxsRow
            key={nanoid()}
            data={data}
            config={tableFieldConfig[tableConfigName]}
          />
        );
      case BLOCKS:
        return (
          <BlocksRow
            key={nanoid()}
            data={data}
            config={tableFieldConfig[tableConfigName]}
          />
        );
      case ACCOUNTS_TXNS:
        return (
          <AccountTxsRow
            key={nanoid()}
            data={data}
            config={tableFieldConfig[tableConfigName]}
            pathname={pathname}
          />
        );
      default:
        break;
    }
  };

  const handlePrevClick = () => {
    if (currentOffset === 0) {
      return;
    }
    setIsFetching(true);
    const prevOffset = currentOffset - pageSize;
    setCurrentOffset(prevOffset);
    getData(prevOffset);
  };

  const handleNextClick = () => {
    if (data.length < pageSize) {
      return;
    }
    setIsFetching(true);
    const nextOffset = currentOffset + pageSize;
    setCurrentOffset(nextOffset);
    getData(nextOffset);
  };

  if (isFetching) {
    return <Loader size={100} />;
  }

  return (
    <>
      <div className="table">
        <div className="responsive-table">
          <div className="tr th">
            {tableFieldConfig[tableConfigName].map((item) => (
              <div key={nanoid()} style={item.style} className="td">
                {item.fieldName}
              </div>
            ))}
          </div>
          {data && data.length > 0 && renderTableData()}
          {status === STATUS_SUCCESS && data.length === 0 && <NoData />}
        </div>
      </div>
      {(name !== OVERVIEW) && (
        <div className="pagination-wrap">
          <span className="pagination">
            <span className={currentOffset === 0 ? 'pagination_link--disabled' : ''}>
              <a
                className="pagination_link"
                onClick={handlePrevClick}
              >
                « previous
              </a>
            </span>
            <span className={data.length < pageSize ? 'pagination_link--disabled' : ''}>
              <a
                className="pagination_link"
                onClick={handleNextClick}
              >
                next »
              </a>
            </span>
          </span>
        </div>
      )}
    </>
  );
};

export default observer(Table);
