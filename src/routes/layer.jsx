import TitleBlock from "../components/TitleBlock";
import {getColorByPageName} from "../helper/getColorByPageName";
import {ACCOUNTS, BLOCKS, EPOCHS, LAYERS, REWARDS, SMESHER, TXNS} from "../config/constants";
import RightSideBlock from "../components/CountBlock/RightSideBlock";
import {useStore} from "../store";
import Table from "../components/Table";
import {observer} from "mobx-react";
import {fetchAPI} from "../api/fetchAPI";
import {useEffect, useState} from "react";
import longFormHash from "../helper/longFormHash";
import {CountTxnsBlock} from "../components/CountBlock";
import TxnsStatus from "../components/TxnsStatus";
import {DetailsCoinTxns} from "../components/common/Details";
import Loader from "../components/Loader";
import {Link, useParams} from "react-router-dom";
import {formatSmidge, parseSmidge} from "../helper/converter";
import CopyButton from "../components/CopyButton";
import {typeOfTransaction} from "../helper/tx";
import CustomTimeAgo from "../components/CustomTimeAgo";
import {fullDate} from "../helper/formatter";
import getValueFromStatsObject from "../helper/getValueFromStatsObject";

const Layer = () => {
    const store = useStore();
    const name = LAYERS;
    const params = useParams();

    const [data, setData] = useState({});
    const [rewards, setRewards] = useState({});

    useEffect(() => {
        if (store.network.value === null) return;
        fetchAPI(`${store.network.value}${name}/${params.id}`).then((res) => {
            setData(res.data[0]);
            setRewards(parseSmidge(res.data[0].rewards));
        })
    }, [store.network.value]);

    return (
        <>
            {data ? (
                <>
                    <div className="page-wrap">
                        <TitleBlock
                            title={`Layer ${params.id}`}
                            color={getColorByPageName(name)}
                            desc="Layer details"
                        />
                        <RightSideBlock
                            color={getColorByPageName(name)}
                            number={rewards.value}
                            unit={rewards.unit}
                            coinCaption="Rewards"
                            coins={data && data.rewards}
                        />
                    </div>
                    <div className="details">
                        <ul className="details-list">
                            <li className="item">
                                <span className="item-name">Number</span>
                                <span className="item-value">{data.number}</span>
                            </li>
                            <li className="item">
                                <span className="item-name">Start Timestamp</span>
                                <span className="item-value">
                                    <CustomTimeAgo time={data.start}/>{` ${fullDate(data.start)}`}
                                </span>
                            </li>
                            <li className="item">
                                <span className="item-name">End Timestamp</span>
                                <span className="item-value">
                                    <CustomTimeAgo time={data.end}/>{` ${fullDate(data.end)}`}
                                </span>
                            </li>
                            <li className="item">
                                <span className="item-name">Transactions</span>
                                <span className="item-value">
                                    <Link to={`/${LAYERS}/${data.number}/${TXNS}`}>{data.txs}</Link>
                                </span>
                            </li>
                            {/* <li className="item"> */}
                            {/*  <span className="item-name">Rewards </span> */}
                            {/*  <span className="item-value"> */}
                            {/*    <a */}
                            {/*      href={`/${LAYERS}/${data.number}/${REWARDS}`} */}
                            {/*      onClick={(e) => { viewStore.linkHandler(e, LAYERS, data.number, REWARDS); }} */}
                            {/*    > */}
                            {/*      {formatSmidge(data.rewards)} */}
                            {/*    </a> */}
                            {/*  </span> */}
                            {/* </li> */}
                            {/* <li className="item"> */}
                            {/*  <span className="item-name">Confidence</span> */}
                            {/*  <span className="item-value">--</span> */}
                            {/* </li> */}
                            <li className="item">
                                <span className="item-name">Epoch</span>
                                <span className="item-value">
                                    <Link to={`/${EPOCHS}/${data.epoch}`}>{data.epoch}</Link>
                                </span>
                            </li>
                            <li className="item">
                                <span className="item-name">Smeshers</span>
                                <span className="item-value">
                                    <Link to={`/${LAYERS}/${data.number}/${SMESHER}`}>{data.smeshers}</Link>
                                </span>
                            </li>
                            <li className="item">
                                <span className="item-name">Hash</span>
                                <span className="item-value">{data.hash}<CopyButton value={data.hash}/></span>
                            </li>
                            <li className="item">
                                <span className="item-name">Blocks</span>
                                <span className="item-value">
                                    <Link to={`/${LAYERS}/${data.number}/${BLOCKS}`}>{data.blocksnumber}</Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                </>
            ) : (<Loader size={100}/>)}
        </>
    )
}

export default observer(Layer);