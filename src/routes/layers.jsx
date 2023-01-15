import InfoBlock from "../components/InfoBlock";
import TitleBlock from "../components/TitleBlock";
import {getColorByPageName} from "../helper/getColorByPageName";
import {LAYERS, OVERVIEW, TXNS} from "../config/constants";
import RightSideBlock from "../components/CountBlock/RightSideBlock";
import {toJS} from "mobx";
import {useStore} from "../store";
import Table from "../components/Table";
import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import {fetchAPI} from "../api/fetchAPI";

const Layers = () => {
    const store = useStore();
    const { layer } = store.networkInfo;
    const name = LAYERS;

    return (
        <>
            <div className="page-wrap">
                <TitleBlock
                    title="Layers"
                    color={getColorByPageName(name)}
                    desc="Layers across the entire mesh"
                />
                <RightSideBlock
                    color={getColorByPageName(name)}
                    number={layer && layer.number}
                    unit="MOST RECENT LAYER"
                    startTime={layer && layer.start}
                />
            </div>
            <Table name={name} />
        </>
    )
}

export default observer(Layers);