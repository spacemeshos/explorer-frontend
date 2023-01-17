import TitleBlock from "../components/TitleBlock";
import {getColorByPageName} from "../helper/getColorByPageName";
import {TXNS} from "../config/constants";
import RightSideBlock from "../components/CountBlock/RightSideBlock";
import {useStore} from "../store";
import Table from "../components/Table";
import {observer} from "mobx-react";

const Txns = () => {
    const store = useStore();
    const { epoch } = store.networkInfo;
    const name = TXNS;
    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title="transactions"
                    color={getColorByPageName(name)}
                    desc="txns across the entire mesh"
                />
                <RightSideBlock
                    color={getColorByPageName(name)}
                    number={epoch && epoch.stats.cumulative.transactions}
                    unit="txns since genesis"
                    coinCaption="Value Since Genesis"
                    coins={epoch && epoch.stats.cumulative.txsamount}
                />
            </div>
            <Table name={name} />
        </>
    )
}

export default observer(Txns);