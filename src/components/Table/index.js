// @flow
import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import {toJS} from 'mobx';
import {observer} from 'mobx-react';

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
import {useStore} from "../../store";
import {fetchAPI} from "../../api/fetchAPI";

const smartWalletData = [
    {
        address: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
        name: 'SM W #1',
        created: '3 days ago',
        balance: 11,
    },
    {
        address: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
        name: 'SM W #1',
        created: '3 days ago',
        balance: 11,
    },
];

const Table = ({name, subPage, id, results}) => {
    const store = useStore();
    const [data, setData] = useState(results?.data);
    const [status, setStatus] = useState(STATUS_LOADING);
    const [pagination, setPagination] = useState(results?.pagination);
    const [isFetching, setIsFetching] = useState(false);

    const tableConfigName = subPage ? subPage : name;
    const pageSize = 20;

    const getUri = () => {
        let pathName = name;

        if(subPage && id) {
            pathName = `${name}/${id}/${subPage}`
        }

        if(name === OVERVIEW) {
            pathName = TXNS;
        }

        return pathName
    }

    useEffect(() => {
        if(store.network.value === null || data === null) return;
        if(results) setStatus(STATUS_SUCCESS);

        fetchAPI(`${store.network.value}${getUri()}`).then((result) => {
            setData(result.data);
            setPagination(result.pagination);
            setStatus(STATUS_SUCCESS);
        })
    }, [store.network.value]);

    useEffect(() => {
        window.addEventListener('scroll', pageEndDetection);
        return () => window.removeEventListener('scroll', pageEndDetection);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        // eslint-disable-next-line no-unused-expressions
        pagination?.hasNext && getPaginationData(name, pagination.next);
        setIsFetching(false);
    }, [isFetching]);

    const pageEndDetection = () => {
        if (window.innerHeight + Math.round(document.documentElement.scrollTop) !== document.documentElement.offsetHeight) {
            return;
        }
        setIsFetching(true);
    };

    const getRewardsData = (data) => {
        return data.map(item => ({...item, _id: `0x${item._id}`}))
    }

    const getPaginationData = (page, pageNumber) => {
        if (page === OVERVIEW) return;
        fetchAPI(`${store.network.value}${getUri()}?page=${pageNumber}&pagesize=${pageSize}`).then(
            (result) => {
                if (page === REWARDS) {
                    const rewardsData = getRewardsData(result.data);
                    setData([...data, ...rewardsData]);
                } else {
                    setData([...data, ...result.data])
                }

                setPagination(result.pagination)
                setStatus(STATUS_SUCCESS)
            },
            (error) => {
                console.log(error);
                setStatus(STATUS_ERROR);
            },
        );
    }

    const renderTableData = () => {
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

    return (
        <div className="table">
            <div className="responsive-table">
                <div className="tr th">
                    {tableFieldConfig[tableConfigName].map((item) => (
                        <div key={nanoid()} style={item.style} className="td">
                            {item.fieldName}
                        </div>
                    ))}
                </div>
                {data ? renderTableData() : <Loader size={100}/>}
                {status === STATUS_SUCCESS && data.length === 0 && <NoData/>}
            </div>
        </div>
    );
};

export default observer(Table);
