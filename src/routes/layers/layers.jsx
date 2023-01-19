import InfoBlock from "../../components/InfoBlock";
import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import {LAYERS, OVERVIEW, TXNS} from "../../config/constants";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {toJS} from "mobx";
import {useStore} from "../../store";
import Table from "../../components/Table";
import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import {fetchAPI} from "../../api/fetchAPI";

const Layers = ({customPageWrap}) => {
    const store = useStore();
    const { layer } = store.networkInfo;

    return (
        <>
            {
                customPageWrap ? customPageWrap : <div className="page-wrap">
                    <TitleBlock
                        title="Layers"
                        color={getColorByPageName(LAYERS)}
                        desc="Layers across the entire mesh"
                    />
                    <RightSideBlock
                        color={getColorByPageName(LAYERS)}
                        number={layer && layer.number}
                        unit="MOST RECENT LAYER"
                        startTime={layer && layer.start}
                    />
                </div>
            }
            <Table name={LAYERS} />
        </>
    )
}

export default observer(Layers);