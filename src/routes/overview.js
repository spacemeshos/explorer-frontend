import InfoBlock from "../components/InfoBlock";
import TitleBlock from "../components/TitleBlock";
import {getColorByPageName} from "../helper/getColorByPageName";
import {OVERVIEW, TXNS} from "../config/constants";
import RightSideBlock from "../components/CountBlock/RightSideBlock";
import {toJS} from "mobx";
import {useStore} from "../store";
import Table from "../components/Table";
import {observer} from "mobx-react";

const Overview = () => {
    const store = useStore();
    const { epoch, layer, network } = store.networkInfo;
    console.log(epoch)
    return (
        <>
            <InfoBlock
                accounts={epoch && epoch.stats.cumulative.accounts}
                rewards={epoch && epoch.stats.cumulative.rewards}
                security={epoch && epoch.stats.cumulative.security}
                epoch={epoch && epoch.number}
                layer={epoch && layer.number}
                smeshers={epoch && epoch.stats.cumulative.smeshers}
            />
            <div className="page-wrap">
                <TitleBlock
                    title="Transactions"
                    color={getColorByPageName(TXNS)}
                    desc="Recent transactions"
                />
                <RightSideBlock
                    color={getColorByPageName(TXNS)}
                    number={epoch && epoch.stats.cumulative.transactions}
                    unit="txns since genesis"
                    coinCaption="Coin transferred"
                    coins={epoch && epoch.stats.cumulative.txsamount}
                />
            </div>
            <Table name={OVERVIEW}/>
        </>
    )
}

export default observer(Overview);