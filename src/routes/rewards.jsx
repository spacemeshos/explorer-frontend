import TitleBlock from "../components/TitleBlock";
import {getColorByPageName} from "../helper/getColorByPageName";
import {REWARDS, TXNS} from "../config/constants";
import RightSideBlock from "../components/CountBlock/RightSideBlock";
import {useStore} from "../store";
import Table from "../components/Table";
import {observer} from "mobx-react";

const Rewards = () => {
    const store = useStore();
    const { epoch } = store.networkInfo;
    const name = REWARDS;
    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title="Smeshing Rewards"
                    color={getColorByPageName(name)}
                    desc="Rewards across the entire mesh"
                />
                <RightSideBlock
                    color={getColorByPageName(name)}
                    number={epoch?.stats.cumulative.rewardsnumber}
                    unit="rewards distributed"
                    coinCaption="Rewards value since genesis"
                    coins={epoch?.stats.cumulative.rewards}
                />
            </div>
            <Table name={name} />
        </>
    )
}

export default observer(Rewards);