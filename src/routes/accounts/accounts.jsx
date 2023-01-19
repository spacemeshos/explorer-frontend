import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import {ACCOUNTS} from "../../config/constants";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {useStore} from "../../store";
import Table from "../../components/Table";
import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import {fetchAPI} from "../../api/fetchAPI";
import Loader from "../../components/Loader";

const Accounts = () => {
    const store = useStore();
    const {epoch} = store.networkInfo;
    const [dataTimeCreation, setDataTimeCreation] = useState(null);
    const [data, setData] = useState();

    useEffect(() => {
        if (store.network.value === null) return;
        fetchAPI(`${store.network.value}${ACCOUNTS}`).then((res) => {
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
                        title="All Accounts"
                        color={getColorByPageName(ACCOUNTS)}
                        desc="Accounts across the entire mesh"
                    />
                    <RightSideBlock
                        color={getColorByPageName(ACCOUNTS)}
                        number={epoch && epoch.stats.cumulative.accounts}
                        unit="accounts"
                        startTime={dataTimeCreation}
                        label="Most Recent Account"
                    />
                </div>
                <Table name={ACCOUNTS} results={data}/>
            </>
        ) : <Loader size={100}/>
    )
}

export default observer(Accounts);