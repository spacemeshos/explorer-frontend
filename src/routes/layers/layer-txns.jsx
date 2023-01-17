import {observer} from "mobx-react";
import longFormHash from "../../helper/longFormHash";
import {useParams} from "react-router-dom";
import {ACCOUNTS, EPOCHS, LAYERS, TXNS} from "../../config/constants";
import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {useStore} from "../../store";
import Table from "../../components/Table";
import {fetchAPI} from "../../api/fetchAPI";
import {useEffect, useState} from "react";
import RightCountBlock from "../../components/CountBlock/RightCountBlock";
import {formatSmidge} from "../../helper/converter";

const LayerTxns = () => {
    const store = useStore();
    const params = useParams();

    const [layerData, setLayerData] = useState({});

    useEffect(() => {
        if(store.network.value === null) return;
        fetchAPI(`${store.network.value}${LAYERS}/${params.id}`).then((result) => {
            setLayerData(result);
        })
    }, [store.network.value]);

    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title={`Layer ${params.id} - Txns`}
                    color={getColorByPageName(LAYERS)}
                    desc=""
                />
                <RightCountBlock
                    color={getColorByPageName(LAYERS)}
                    number={layerData && layerData.txs}
                    caption="txns"
                    coinCaption="Txns Value"
                    coins={layerData && formatSmidge(layerData.txsamount)}
                />
            </div>
            <Table name={LAYERS} subPage={TXNS} id={params.id} />
        </>
    )
}

export default observer(LayerTxns);