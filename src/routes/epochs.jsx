import InfoBlock from "../components/InfoBlock";
import TitleBlock from "../components/TitleBlock";
import {getColorByPageName} from "../helper/getColorByPageName";
import {EPOCHS, LAYERS, OVERVIEW, TXNS} from "../config/constants";
import RightSideBlock from "../components/CountBlock/RightSideBlock";
import {toJS} from "mobx";
import {useStore} from "../store";
import Table from "../components/Table";
import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import {fetchAPI} from "../api/fetchAPI";

const Epochs = () => {
    const store = useStore();
    const { network, epoch } = store.networkInfo;
    const name = EPOCHS;

    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title="Epochs"
                    color={getColorByPageName(name)}
                    desc="Epochs across the entire mesh"
                />
                <RightSideBlock
                    color={getColorByPageName(name)}
                    number={epoch && epoch.number + 1}
                    unit="Epochs since genesis"
                    startTime={network && network.genesis}
                    label="Genesis Time"
                />
            </div>
            <Table name={name} />
        </>
    )
}

export default observer(Epochs);