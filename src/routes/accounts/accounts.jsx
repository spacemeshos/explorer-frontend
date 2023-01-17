import InfoBlock from "../../components/InfoBlock";
import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import {ACCOUNTS, LAYERS, OVERVIEW, TXNS} from "../../config/constants";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {toJS} from "mobx";
import {useStore} from "../../store";
import Table from "../../components/Table";
import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import {fetchAPI} from "../../api/fetchAPI";

const Accounts = () => {
    const store = useStore();
    const {epoch} = store.networkInfo;
    const name = ACCOUNTS;
    const [dataTimeCreation, setDataTimeCreation] = useState([]);

    useEffect(() => {
        if (store.network.value === null) return;
        fetchAPI(`${store.network.value}${ACCOUNTS}`).then((res) => {
            const creation = res.data && res.data.length && res.data.length > 0 && res.data[0].timestamp;
            setDataTimeCreation(creation);
        })
    }, [store.network.value]);

    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title="All Accounts"
                    color={getColorByPageName(name)}
                    desc="Accounts across the entire mesh"
                />
                <RightSideBlock
                    color={getColorByPageName(name)}
                    number={epoch && epoch.stats.cumulative.accounts}
                    unit="accounts"
                    startTime={dataTimeCreation}
                    label="Most Recent Account"
                />
            </div>
            <Table name={name}/>
        </>
    )
}

export default observer(Accounts);