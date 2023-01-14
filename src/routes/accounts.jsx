import InfoBlock from "../components/InfoBlock";
import TitleBlock from "../components/TitleBlock";
import {getColorByPageName} from "../helper/getColorByPageName";
import {ACCOUNTS, LAYERS, OVERVIEW, TXNS} from "../config/constants";
import RightSideBlock from "../components/CountBlock/RightSideBlock";
import {toJS} from "mobx";
import {useStore} from "../store";
import Table from "../components/Table";
import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import {fetchAPI} from "../api/fetchAPI";

const Accounts = () => {
    const store = useStore();
    let apiPath = store.network.value;
    const { epoch } = store.networkInfo;
    const name = ACCOUNTS;

    let [dataTimeCreation, setDataTimeCreation] = useState([]);

    useEffect(() => {
        console.log(apiPath)
        if(apiPath !== null) {
            fetchAPI(`${apiPath}${ACCOUNTS}`).then((res) => {
                const creation = res.data && res.data.length && res.data.length > 0 && res.data[0].timestamp;
                setDataTimeCreation(creation);
            })
        }

    }, [apiPath]);

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
                    coin = {false}
                />
            </div>
            <Table name={name} />
        </>
    )
}

export default observer(Accounts);