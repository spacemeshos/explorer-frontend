import {observer} from "mobx-react";
import longFormHash from "../../helper/longFormHash";
import {useParams} from "react-router-dom";
import {ACCOUNTS, TXNS} from "../../config/constants";
import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {useStore} from "../../store";
import Table from "../../components/Table";
import {fetchAPI} from "../../api/fetchAPI";
import {useEffect, useState} from "react";
import Loader from "../../components/Loader";

const AccountTxns = () => {
    const store = useStore();
    const params = useParams();

    const [data, setData] = useState();

    useEffect(() => {
        if (store.network.value === null) return;
        fetchAPI(`${store.network.value}${ACCOUNTS}/${params.id}/${TXNS}`).then((result) => {
            setData(result);
        })
    }, [store.network.value]);

    return (
        data ? (
            <>
                <div className="page-wrap">
                    <TitleBlock
                        title="account transactions"
                        color={getColorByPageName(ACCOUNTS)}
                        desc={longFormHash(params.id)}
                    />
                    <RightSideBlock
                        color={getColorByPageName(ACCOUNTS)}
                        number={data.pagination && data.pagination.totalCount}
                        unit="txns"
                        startTime={data.data && data.data[0]?.timestamp}
                    />
                </div>
                <Table name={ACCOUNTS} subPage={TXNS} id={params.id} results={data}/>
            </>
        ) : <Loader size={100}/>
    )
}

export default observer(AccountTxns);