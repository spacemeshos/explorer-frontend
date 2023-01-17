import {observer} from "mobx-react";
import longFormHash from "../../helper/longFormHash";
import {useParams} from "react-router-dom";
import {ACCOUNTS, EPOCHS, TXNS} from "../../config/constants";
import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {useStore} from "../../store";
import Table from "../../components/Table";
import {fetchAPI} from "../../api/fetchAPI";
import {useEffect, useState} from "react";

const EpochTxns = () => {
    const store = useStore();
    const { epoch, network } = store.networkInfo;
    const params = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        if(store.network.value === null || data === null) return;
        fetchAPI(`${store.network.value}${EPOCHS}/${params.id}/${TXNS}`).then((result) => {
            setData(result);
        })
    }, [store.network.value]);

    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title={`Epoch ${params.id} - Txns`}
                    color={getColorByPageName(EPOCHS)}
                    desc={`Txns contained within Epoch ${params.id}`}
                />
                <RightSideBlock
                    number={epoch && epoch.stats.cumulative.transactions}
                    unit="txns"
                    startTime={network && network.genesis}
                    color={getColorByPageName(EPOCHS)}
                />
            </div>
            <Table name={EPOCHS} subPage={TXNS} id={params.id} />
        </>
    )
}

export default observer(EpochTxns);