import {observer} from "mobx-react";
import {useParams} from "react-router-dom";
import {ATXS, EPOCHS, SMESHER} from "../../config/constants";
import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {useStore} from "../../store";
import Table from "../../components/Table";
import {fetchAPI} from "../../api/fetchAPI";
import {useEffect, useState} from "react";
import longFormHash from "../../helper/longFormHash";
import Loader from "../../components/Loader";

const SmesherAtxs = () => {
    const store = useStore();
    const params = useParams();

    const [data, setData] = useState();

    useEffect(() => {
        if (store.network.value === null) return;
        fetchAPI(`${store.network.value}${SMESHER}/${params.id}/${ATXS}`).then((result) => {
            setData(result);
        })
    }, [store.network.value]);

    return (
        data ? (
            <>
                <div className="page-wrap">
                    <TitleBlock
                        title={`Smesher ${longFormHash(params.id)} Activations`}
                        color={getColorByPageName(SMESHER)}
                        desc=""
                    />
                    <RightSideBlock
                        color={getColorByPageName(SMESHER, store.theme)}
                        number={data.pagination?.totalCount}
                        unit="Activations"
                        startTime={data.data && data.data[0].timestamp}
                    />
                </div>
                <Table name={SMESHER} subPage={ATXS} id={params.id} results={data}/>
            </>
        ) : <Loader size={100}/>
    )
}

export default observer(SmesherAtxs);