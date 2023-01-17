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

const Smeshers = () => {
    const store = useStore();
    const name = SMESHER;

    const [pagination, setPagination] = useState({totalCount: 0});
    const [dataTimeCreation, setDataTimeCreation] = useState([]);

    useEffect(() => {
        if (store.network.value === null) return;
        fetchAPI(`${store.network.value}${SMESHER}`).then((res) => {
            const creation = res.data && res.data.length && res.data.length > 0 && res.data[0].timestamp;
            setDataTimeCreation(creation);
            setPagination(res.pagination);
        })
    }, [store.network.value]);

    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title="Smeshers"
                    color={getColorByPageName(name)}
                    desc=""
                />
                <RightSideBlock
                    color={getColorByPageName(name, store.theme)}
                    number={pagination?.totalCount}
                    unit="TOTAL SMESHERS"
                    startTime={dataTimeCreation}
                />
            </div>
            <Table name={name} />
        </>
    )
}

export default observer(Smeshers);