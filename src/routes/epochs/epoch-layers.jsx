import {observer} from "mobx-react";
import {useParams} from "react-router-dom";
import {EPOCHS, LAYERS} from "../../config/constants";
import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {useStore} from "../../store";
import Table from "../../components/Table";
import {fetchAPI} from "../../api/fetchAPI";
import {useEffect, useState} from "react";

const EpochLayers = () => {
    const store = useStore();
    const { epoch } = store.networkInfo;
    const params = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        if(store.network.value === null || data === null) return;
        fetchAPI(`${store.network.value}${EPOCHS}/${params.id}/${LAYERS}`).then((result) => {
            setData(result);
        })
    }, [store.network.value]);

    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title={`Epoch ${params.id} - Layers`}
                    color={getColorByPageName(EPOCHS)}
                    desc={`Layers contained within Epoch ${params.id}`}
                />
                <RightSideBlock
                    number={epoch && epoch.layers}
                    startTime={epoch && epoch.start}
                    unit="layers"
                    color={getColorByPageName(EPOCHS)}
                />
            </div>
            <Table name={EPOCHS} subPage={LAYERS} id={params.id} />
        </>
    )
}

export default observer(EpochLayers);