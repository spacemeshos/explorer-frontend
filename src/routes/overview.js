import InfoBlock from "../components/common/InfoBlock";
import TitleBlock from "../components/common/TitleBlock";
import {getColorByPageName} from "../helper/getColorByPageName";
import {TXNS} from "../config/constants";
import RightSideBlock from "../components/common/CountBlock/RightSideBlock";
import Table from "../components/common/Table";
import {toJS} from "mobx";
import store from "../store/store";

type Props = {
    viewStore: Object,
    uiStore: Object,
}

export const Overview = (props) => {
    // const {viewStore, uiStore} = props;
    // const { name } = viewStore.currentView;
    //
    // console.log(viewStore.mainInfo)
    // const { epoch, layer, network } = toJS(viewStore.networkInfo);
    // const data = viewStore?.currentView?.data;
    return (
        <>
            {/*<InfoBlock*/}
            {/*    viewStore={viewStore}*/}
            {/*    accounts={epoch && epoch.stats.cumulative.accounts}*/}
            {/*    rewards={epoch && epoch.stats.cumulative.rewards}*/}
            {/*    security={epoch && epoch.stats.cumulative.security}*/}
            {/*    epoch={epoch && epoch.number}*/}
            {/*    layer={epoch && layer.number}*/}
            {/*    smeshers={epoch && epoch.stats.cumulative.smeshers}*/}
            {/*/>*/}
            {/*<div className="page-wrap">*/}
            {/*    <TitleBlock*/}
            {/*        title="Transactions"*/}
            {/*        color={getColorByPageName(TXNS)}*/}
            {/*        desc="Recent transactions"*/}
            {/*        uiStore={uiStore}*/}
            {/*    />*/}
            {/*    <RightSideBlock*/}
            {/*        color={getColorByPageName(TXNS)}*/}
            {/*        number={epoch && epoch.stats.cumulative.transactions}*/}
            {/*        unit="txns since genesis"*/}
            {/*        coinCaption="Coin transferred"*/}
            {/*        coins={epoch && epoch.stats.cumulative.txsamount}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<Table name={name} viewStore={viewStore}/>*/}
        </>
    )
}