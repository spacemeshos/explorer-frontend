import {observer} from "mobx-react";
import longFormHash from "../../helper/longFormHash";
import {useParams} from "react-router-dom";
import {ACCOUNTS, REWARDS, TXNS} from "../../config/constants";
import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {useStore} from "../../store";
import Table from "../../components/Table";
import {fetchAPI} from "../../api/fetchAPI";
import {useEffect, useState} from "react";

const AccountRewards = () => {
    const store = useStore();
    const params = useParams();
    const { network } = store.networkInfo;

    const [data, setData] = useState({});

    useEffect(() => {
        if(store.network.value === null || data === null) return;
        fetchAPI(`${store.network.value}${ACCOUNTS}/${params.id}/${REWARDS}`).then((result) => {
            setData(result);
        })
    }, [store.network.value]);

    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title={`account ${longFormHash(params.id)} - rewards`}
                    color={getColorByPageName(name)}
                    desc={`Rewards contained within account ${longFormHash(id)}`}
                />
                <RightSideBlock
                    color={getColorByPageName(name)}
                    number={data.pagination && data.pagination.totalCount}
                    unit="rewards"
                    startTime={network?.genesis}
                />
            </div>
            <Table name={ACCOUNTS} subPage={REWARDS} id={params.id} />
        </>
    )
}

export default observer(AccountRewards);