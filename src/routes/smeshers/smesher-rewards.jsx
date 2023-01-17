import {observer} from "mobx-react";
import longFormHash from "../../helper/longFormHash";
import {useParams} from "react-router-dom";
import {ACCOUNTS, EPOCHS, REWARDS, SMESHER, TXNS} from "../../config/constants";
import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {useStore} from "../../store";
import Table from "../../components/Table";
import {fetchAPI} from "../../api/fetchAPI";
import {useEffect, useState} from "react";
import {AmountBlock} from "../../components/CountBlock";

const SmesherRewards = () => {
    const store = useStore();
    const params = useParams();
    const { epoch, network } = store.networkInfo;

    const [data, setData] = useState({});

    useEffect(() => {
        if(store.network.value === null || data === null) return;
        fetchAPI(`${store.network.value}${SMESHER}/${params.id}/${REWARDS}`).then((result) => {
            setData(result);
        })
    }, [store.network.value]);

    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title={`Smesher ${longFormHash(params.id)} - Details`}
                    color={getColorByPageName(SMESHER)}
                    desc="Smesher details for this reward"
                />
                <RightSideBlock
                    color={getColorByPageName(SMESHER, store.theme)}
                    number={epoch && epoch.stats.cumulative.transactions}
                    unit="txns"
                    startTime={network?.genesis}
                />
            </div>
            <Table name={SMESHER} subPage={REWARDS} id={params.id} />
        </>
    )
}

export default observer(SmesherRewards);