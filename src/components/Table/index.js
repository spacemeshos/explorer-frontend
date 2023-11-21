// @flow
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import ReactPaginate from 'react-paginate';
import TransactionsRow from './TransactionsRow';
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
  SMART_WALLET,
  SMESHER,
  TXNS,
  ATXS,
  BLOCKS,
  STATUS_SUCCESS, STATUS_ERROR, STATUS_LOADING,
} from '../../config/constants';
import tableFieldConfig from './config/tableFieldConfig';
import LayersRow from './LayersRow';
import AtxsRow from './AtxsRow';
import BlocksRow from './BlocksRow';
import AppRow from './AppRow';
import Loader from '../Loader';
import NoData from '../NoData';
import { useStore } from '../../store';
import { fetchAPI } from '../../api/fetchAPI';

const Table = ({ name, subPage, id, results }) => {
  const store = useStore();
  const [data, setData] = useState(results?.data);
  const [status, setStatus] = useState(STATUS_LOADING);
  const [currentNetwork, setCurrentNetwork] = useState(store.network.value);

  const tableConfigName = subPage || name;
  const pageSize = 20;
  const pages = Math.ceil((results?.pagination.totalCount || 0) / pageSize);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(pages);
  const [isFetching, setIsFetching] = useState(false);

  const getUri = () => {
    let pathName = name;

    if (subPage && id) {
      pathName = `${name}/${id}/${subPage}`;
    }

    if (name === OVERVIEW) {
      pathName = TXNS;
    }

    return pathName;
  };

  const getRewardsData = (d) => d.map((item) => ({ ...item, displayName: `0x${item._id}` }));

  useEffect(() => {
    if (store.network.value === null) return;
    if (data !== null && data !== undefined && (Object.entries(data).length > 0) && currentNetwork === store.network.value) {
      if (name === REWARDS || subPage === REWARDS) {
        setData(getRewardsData(data));
      }
      return;
    }
    setCurrentNetwork(store.network.value);

    fetchAPI(`${store.network.value}${getUri()}`).then((result) => {
      if (name === REWARDS || subPage === REWARDS) {
        setData(getRewardsData(result.data));
      } else {
        setData(result.data);
      }
      const totalPages = Math.ceil(result.pagination.totalCount / pageSize);
      setPageCount(totalPages);
      setStatus(STATUS_SUCCESS);
    });
  }, [store.network.value]);

  const getPaginationData = (pageNumber) => {
    if (name === OVERVIEW) return;
    fetchAPI(`${store.network.value}${getUri()}?page=${pageNumber}&pagesize=${pageSize}`).then(
      (result) => {
        if (name === REWARDS || subPage === REWARDS) {
          setData(getRewardsData(result.data));
        } else {
          setData(result.data);
        }
        setStatus(STATUS_SUCCESS);
        setIsFetching(false);
      },
      (error) => {
        console.log(error);
        setIsFetching(false);
        setStatus(STATUS_ERROR);
      },
    );
  };

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
      case SMART_WALLET:
        return (
          <AppRow
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
      default:
        break;
    }
  };

  const handlePageClick = (event) => {
    setIsFetching(true);
    const nextPage = event.selected + 1;
    setPage(nextPage);
    getPaginationData(nextPage);
  };

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
          {data ? renderTableData() : <Loader size={100} />}
          {status === STATUS_SUCCESS && data.length === 0 && <NoData />}
        </div>
      </div>
      {(pageCount && name !== OVERVIEW) && (
        <div className="pagination-wrap">
          <ReactPaginate
            containerClassName="pagination"
            previousLinkClassName="pagination_link"
            nextLinkClassName="pagination_link"
            disabledClassName="pagination_link--disabled"
            activeClassName="pagination_link--active"
            pageLinkClassName="pagination_link"
            breakClassName="pagination_break"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            forcePage={page - 1}
            pageRangeDisplayed={2}
            disableInitialCallback
            nextLabel="»"
            previousLabel="«"
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </>
  );
};

export default observer(Table);
