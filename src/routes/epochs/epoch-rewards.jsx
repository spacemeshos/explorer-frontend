import {observer} from "mobx-react";
import longFormHash from "../../helper/longFormHash";
import {useParams} from "react-router-dom";
import {ACCOUNTS, EPOCHS, REWARDS, TXNS} from "../../config/constants";
import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {useStore} from "../../store";
import Table from "../../components/Table";
import {fetchAPI} from "../../api/fetchAPI";
import {useEffect, useState} from "react";
import {AmountBlock} from "../../components/CountBlock";

const EpochRewards = () => {
    const store = useStore();
    const params = useParams();
    const { network } = store.networkInfo;

    const [data, setData] = useState({});

    useEffect(() => {
        if(store.network.value === null || data === null) return;
        fetchAPI(`${store.network.value}${EPOCHS}/${params.id}/${REWARDS}`).then((result) => {
            setData(result);
        })
    }, [store.network.value]);

    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title={`Epoch ${params.id} Rewards`}
                    color={getColorByPageName(EPOCHS)}
                    desc="Rewards awarded to Smeshers"
                />
                <AmountBlock
                    number={data.pagination && data.pagination.totalCount}
                    startTime={network && network.genesis}
                    unit="rewards"
                    color={getColorByPageName(EPOCHS)}
                />
            </div>
            <Table name={EPOCHS} subPage={REWARDS} id={params.id} />
        </>
    )
}

export default observer(EpochRewards);