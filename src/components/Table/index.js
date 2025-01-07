// @flow
import {
  useState, useEffect, useMemo,
} from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import { useLocation, useSearchParams } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
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
  const [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState([]);
  const [status, setStatus] = useState(STATUS_LOADING);

  const tableConfigName = subPage || name;
  const pageSize = 20;

  const [isFetching, setIsFetching] = useState(true);
  const [maxPage, setMaxPage] = useState(0);

  const currentPage = useMemo(() => {
    const pageParam = searchParams.get('page');
    const parsedPage = parseInt(pageParam || '1', 10);
    return Number.isNaN(parsedPage) || parsedPage < 1 ? 1 : parsedPage; // Default to 1 if invalid
  }, [searchParams]);

  const getData = (offset): Promise<number> => {
    switch (name) {
      case OVERVIEW:
      case TXNS:
        return store.api.transaction.transactionServiceList({
          limit: pageSize,
          offset,
          sort_order: 1,
          includeState: true,
          includeResult: true,
        }).then((res) => res.transactions);
      case LAYERS:
        if (subPage === REWARDS) {
          return store.api.reward.rewardServiceList({
            startLayer: id,
            endLayer: id,
            limit: pageSize,
            offset,
            sort_order: 1,
          }).then((res) => res.rewards);
        }
        if (subPage === TXNS) {
          return store.api.transaction.transactionServiceList({
            startLayer: id,
            endLayer: id,
            limit: pageSize,
            offset,
            sort_order: 1,
            includeState: true,
            includeResult: true,
          }).then((res) => res.transactions);
        }
        return store.api.layer.layerServiceList({
          limit: pageSize,
          offset,
          sort_order: 1,
        }).then((res) => res.layers);
      case REWARDS:
        return store.api.reward.rewardServiceList({
          limit: pageSize,
          offset,
          sort_order: 1,
        }).then((res) => res.rewards);
      case ACCOUNTS:
        if (subPage === TXNS) {
          return store.api.transaction.transactionServiceList({
            address: id,
            limit: pageSize,
            offset,
            sort_order: 1,
            includeState: true,
            includeResult: true,
          }).then((res) => res.transactions);
        }
        if (subPage === REWARDS) {
          return store.api.reward.rewardServiceList({
            coinbase: id,
            limit: pageSize,
            offset,
            sort_order: 1,
          }).then((res) => res.rewards);
        }

        return store.api.account.accountServiceList({
          limit: pageSize,
          offset,
        }).then((res) => res.accounts);

      case EPOCHS:
        if (subPage === SMESHER) {
          return fetch(`${store.statsApiUrl}/smeshers/${id}?limit=${pageSize}&offset=${offset}`)
            .then((res) => {
              if (res.status === 429) {
                store.showThrottlePopup();
                throw new Error('Too Many Requests');
              }
              return res.json();
            })
            .then((res) => res.smeshers);
        }
        if (subPage === TXNS) {
          return store.api.transaction.transactionServiceList({
            limit: pageSize,
            offset,
            sort_order: 1,
            includeState: true,
            includeResult: true,
            startLayer: store.netInfo.layersPerEpoch * id,
            endLayer: store.netInfo.layersPerEpoch * id + store.netInfo.layersPerEpoch - 1,
          }).then((res) => res.transactions);
        }
        if (subPage === LAYERS) {
          return store.api.layer.layerServiceList({
            limit: pageSize,
            offset,
            sort_order: 1,
            startLayer: store.netInfo.layersPerEpoch * id,
            endLayer: store.netInfo.layersPerEpoch * id + store.netInfo.layersPerEpoch - 1,
          }).then((res) => res.layers);
        }
        if (subPage === REWARDS) {
          return store.api.reward.rewardServiceList({
            limit: pageSize,
            offset,
            sort_order: 1,
            startLayer: store.netInfo.layersPerEpoch * id,
            endLayer: store.netInfo.layersPerEpoch * id + store.netInfo.layersPerEpoch - 1,
          }).then((res) => res.rewards);
        }
        if (!epochs) {
          break;
        }
        return Promise.resolve(epochs.slice(offset, offset + pageSize));
      case SMESHER:
        if (subPage === ATXS) {
          return store.api.activation.activationServiceList({
            smesherId: [hexToBase64(id)],
            limit: pageSize,
            offset,
          }).then((res) => res.activations);
        }
        if (subPage === REWARDS) {
          return store.api.reward.rewardServiceList({
            smesher: hexToBase64(id),
            limit: pageSize,
            offset,
            sort_order: 1,
          }).then((res) => res.rewards);
        }
        return fetch(`${store.statsApiUrl}/smeshers?limit=${pageSize}&offset=${offset}`)
          .then((res) => {
            if (res.status === 429) {
              store.showThrottlePopup();
              throw new Error('Too Many Requests');
            }
            return res.json();
          })
          .then((res) => res.smeshers);
      default:
        break;
    }
  };

  const calcMaxPage = (offset) => {
    if (offset <= 0) {
      setMaxPage(1);
      return;
    }

    getData(offset).then((res) => {
      if (res.length > 0) {
        const totalItems = offset + res.length;
        const calculatedPage = Math.ceil(totalItems / pageSize);
        setMaxPage(calculatedPage);
      }
      if (res.length === 0) {
        calcMaxPage(offset - pageSize);
      }
    });
  };

  useEffect(() => {
    if (store.netInfo === null) return;
    getData((currentPage - 1) * pageSize).then((res) => {
      if (res.length > 0) {
        setData(res);
        setStatus(STATUS_SUCCESS);
        setIsFetching(false);
      } else {
        setSearchParams({ page: '1' }, { preventScrollReset: true });
        setIsFetching(false);
      }
    }).catch((err) => {
      if (err.status === 429) {
        store.showThrottlePopup();
      }
      setStatus(STATUS_ERROR);
    });
    calcMaxPage((currentPage + 9) * pageSize);
  }, [store.netInfo, searchParams]);

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

  const handlePageClick = (page) => {
    if (page === currentPage) {
      return;
    }
    setIsFetching(true);
    const offset = (page - 1) * pageSize;
    getData(offset).then((res) => {
      setData(res);
      setStatus(STATUS_SUCCESS);
      setIsFetching(false);
    }).then(() => {
      if (page > currentPage && currentPage + 10 > maxPage) {
        if (maxPage >= 10) {
          calcMaxPage(pageSize * (maxPage + 10));
        }
      }
    }).catch((err) => {
      if (err.status === 429) {
        store.showThrottlePopup();
      }
      setStatus(STATUS_ERROR);
    });
    setSearchParams({ page: String(page) }, { preventScrollReset: true });
  };

  const handlePrevClick = () => {
    if (currentPage - 1 > 0) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage + 1 <= maxPage) {
      handlePageClick(currentPage + 1);
    }
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
          {status !== STATUS_SUCCESS && data.length === 0 && <NoData />}
        </div>
      </div>
      <Tooltip id="status" />
      {(name !== OVERVIEW) && (
        <div className="pagination-wrap">
          <span className="pagination">
            <span className={currentPage === 1 ? 'pagination_link--disabled' : ''}>
              <a
                className="pagination_link"
                onClick={handlePrevClick}
              >
                « previous
              </a>
            </span>
            <span className="pagination-pages">
              {
                Array.from({ length: Math.min(10, maxPage) }, (_, i) => {
                  const startPage = Math.min(
                    Math.max(1, currentPage - 5),
                    Math.max(1, maxPage - 9),
                  );
                  return startPage + i;
                }).map((page) => (
                  <span
                    key={page}
                    className={currentPage === page ? 'pagination_link--active' : ''}
                  >
                    <a
                      className="pagination_link"
                      onClick={() => handlePageClick(page)}
                      aria-current={currentPage === page ? 'page' : undefined}
                    >
                      {page}
                    </a>
                  </span>
                ))
              }
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
