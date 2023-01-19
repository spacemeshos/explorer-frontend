import InfoBlock from "../../components/InfoBlock";
import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import {ACCOUNTS, EPOCHS, LAYERS, OVERVIEW, SMESHER, TXNS} from "../../config/constants";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {toJS} from "mobx";
import {useStore} from "../../store";
import Table from "../../components/Table";
import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import {fetchAPI} from "../../api/fetchAPI";
import Loader from "../../components/Loader";

const Smeshers = () => {
    const store = useStore();

    const [dataTimeCreation, setDataTimeCreation] = useState([]);
    const [data, setData] = useState();

    useEffect(() => {
        if (store.network.value === null) return;
        fetchAPI(`${store.network.value}${SMESHER}`).then((res) => {
            const creation = res.data && res.data.length && res.data.length > 0 && res.data[0].timestamp;
            setDataTimeCreation(creation);
            setData(res);
        })
    }, [store.network.value]);

    return (
        data ? (
            <>
                <div className="page-wrap">
                    <TitleBlock
                        title="Smeshers"
                        color={getColorByPageName(SMESHER)}
                        desc=""
                    />
                    <RightSideBlock
                        color={getColorByPageName(SMESHER, store.theme)}
                        number={data.pagination?.totalCount}
                        unit="TOTAL SMESHERS"
                        startTime={dataTimeCreation}
                    />
                </div>
                <Table name={SMESHER} results={data}/>
            </>
        ) : <Loader size={100}/>
    )
}

export default observer(Smeshers);