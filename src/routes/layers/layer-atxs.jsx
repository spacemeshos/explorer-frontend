import {observer} from "mobx-react";
import {useParams} from "react-router-dom";
import {ATXS, LAYERS} from "../../config/constants";
import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {useStore} from "../../store";
import Table from "../../components/Table";

const LayerAtxs = () => {
    const store = useStore();
    const { network, epoch } = store.networkInfo;
    const params = useParams();

    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title={`Layer ${params.id} - Activations`}
                    color={getColorByPageName(LAYERS)}
                    desc={`Txns within layer ${params.id}`}
                />
                <RightSideBlock
                    number={epoch && epoch.stats.cumulative.transactions}
                    startTime={network && network.genesis}
                    unit="txns"
                    color={getColorByPageName(LAYERS)}
                />
            </div>
            <Table name={LAYERS} subPage={ATXS} id={params.id} />
        </>
    )
}

export default observer(LayerAtxs);