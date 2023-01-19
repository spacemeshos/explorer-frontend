import TitleBlock from "../components/TitleBlock";
import {getColorByPageName} from "../helper/getColorByPageName";
import {ACCOUNTS, ATXS, LAYERS, SMESHER, TXNS} from "../config/constants";
import {useStore} from "../store";
import {observer} from "mobx-react";
import {fetchAPI} from "../api/fetchAPI";
import {useEffect, useState} from "react";
import longFormHash from "../helper/longFormHash";
import TxnsStatus from "../components/TxnsStatus";
import Loader from "../components/Loader";
import {Link, useParams} from "react-router-dom";
import {byteConverter} from "../helper/converter";
import CopyButton from "../components/CopyButton";
import CountAtxBlock from "../components/CountBlock/CountAtxBlock";

const Atx = () => {
    const store = useStore();
    const params = useParams();

    const [data, setData] = useState();
    const [cSize, setCSize] = useState({value: 0, unit: ''});

    useEffect(() => {
        if (store.network.value === null) return;
        fetchAPI(`${store.network.value}${ATXS}/${params.id}`).then((res) => {
            setData(res.data[0]);
            setCSize(byteConverter(res.data[0]?.cSize, true))
        })
    }, [store.network.value]);

    return (
        <>
            {data ? (
                <>
                    <div className="page-wrap">
                        <TitleBlock
                            title={`Activation ${longFormHash(params.id)}`}
                            color={getColorByPageName(ATXS)}
                            desc="Details"
                        />
                        <CountAtxBlock
                            badgeType="atx"
                            amount={cSize.value}
                            unit={cSize.unit}
                            startTime={data && data.timestamp}
                            color={getColorByPageName(ATXS, store.theme)}
                        />
                    </div>
                    <TxnsStatus status={data.state}/>
                    <div className="details">
                        <ul className="details-list">
                            <li className="item">
                                <span className="item-name">Activation Id</span>
                                <span className="item-value">{data.id}<CopyButton value={data.id}/></span>
                            </li>
                            <li className="item">
                                <span className="item-name">Smesher</span>
                                <span className="item-value">
                                    <Link to={`/${SMESHER}/${data.smesher}`}>
                                      {data.smesher}
                                    </Link>
                                    <CopyButton value={data.smesher}/>
                                </span>
                            </li>
                            <li className="item">
                                <span className="item-name">Rewards Account</span>
                                <span className="item-value">
                                    <Link to={`/${ACCOUNTS}/${data.coinbase}`}>{data.coinbase}</Link>
                                    <CopyButton value={data.coinbase}/>
                                </span>
                            </li>
                            <li className="item">
                                <span className="item-name">Layer</span>
                                <span className="item-value">
                                    <Link to={`/${LAYERS}/${data.layer}`}>
                                      {data.layer}
                                    </Link>
                                </span>
                            </li>
                            <li className="item">
                                <span className="item-name">Data commitment units</span>
                                <span className="item-value">{data.numunits}</span>
                            </li>
                            <li className="item">
                                <span className="item-name">Previous Activation</span>
                                <span className="item-value">
                                    <Link to={`/${ATXS}/${data.prevAtx}`}>
                                      {data.prevAtx}
                                    </Link>
                                    <CopyButton value={data.prevAtx}/>
                                </span>
                            </li>
                        </ul>
                    </div>
                </>
            ) : (<Loader size={100}/>)}
        </>
    )
}

export default observer(Atx);