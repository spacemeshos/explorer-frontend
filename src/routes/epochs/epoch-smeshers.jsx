import {observer} from "mobx-react";
import longFormHash from "../../helper/longFormHash";
import {useParams} from "react-router-dom";
import {ACCOUNTS, EPOCHS, SMESHER, TXNS} from "../../config/constants";
import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {useStore} from "../../store";
import Table from "../../components/Table";
import {fetchAPI} from "../../api/fetchAPI";
import {useEffect, useState} from "react";

const EpochSmeshers = () => {
    const store = useStore();
    const { epoch, network } = store.networkInfo;
    const params = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        if(store.network.value === null || data === null) return;
        fetchAPI(`${store.network.value}${EPOCHS}/${params.id}/${SMESHER}`).then((result) => {
            setData(result);
        })
    }, [store.network.value]);

    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title={`Epoch ${params.id} - Participating Smashers`}
                    color={getColorByPageName(EPOCHS)}
                    desc="Smeshers submitting at least one honest block"
                />
                <RightSideBlock
                    number={epoch && epoch.stats.cumulative.smeshers}
                    startTime={network && network.genesis}
                    unit="smeshers in the epoch"
                    color={getColorByPageName(EPOCHS)}
                />
            </div>
            <Table name={EPOCHS} subPage={SMESHER} id={params.id} />
        </>
    )
}

export default observer(EpochSmeshers);