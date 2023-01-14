import TitleBlock from "../components/TitleBlock";
import {getColorByPageName} from "../helper/getColorByPageName";
import {TXNS} from "../config/constants";
import RightSideBlock from "../components/CountBlock/RightSideBlock";
import {useStore} from "../store";
import Table from "../components/Table";
import {observer} from "mobx-react";

const Txs = () => {
    const store = useStore();
    const { epoch } = store.networkInfo;
    const name = TXNS;
    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title="Txs"
                    color={getColorByPageName(name)}
                    desc="Txs across the entire mesh"
                />
                <RightSideBlock
                    color={getColorByPageName(name)}
                    number={epoch && epoch.stats.cumulative.transactions}
                    unit="txns since genesis"
                    coinCaption="Value Since Genesis"
                    coins={epoch && epoch.stats.cumulative.txsamount}
                    coin = {true}
                />
            </div>
            <Table name={name} />
        </>
    )
}

export default observer(Txs);