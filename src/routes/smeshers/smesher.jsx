import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import {ACCOUNTS, ATXS, REWARDS, SMESHER} from "../../config/constants";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {useStore} from "../../store";
import {observer} from "mobx-react";
import {fetchAPI} from "../../api/fetchAPI";
import {useEffect, useState} from "react";
import longFormHash from "../../helper/longFormHash";
import Loader from "../../components/Loader";
import {Link, useParams} from "react-router-dom";
import {byteConverter, formatSmidge} from "../../helper/converter";
import CopyButton from "../../components/CopyButton";

const Smesher = () => {
    const store = useStore();
    const params = useParams();

    const {network} = store.networkInfo;
    const [data, setData] = useState();

    useEffect(() => {
        if (store.network.value === null) return;
        fetchAPI(`${store.network.value}${SMESHER}/${params.id}`).then((res) => {
            setData(res.data[0]);
        })
    }, [store.network.value]);

    return (
        <>
            {data ? (
                <>
                    <div className="page-wrap">
                        <TitleBlock
                            title={`Smesher ${longFormHash(params.id)}`}
                            color={getColorByPageName(name)}
                            desc="Details"
                        />
                        <RightSideBlock
                            color={getColorByPageName(name, store.theme)}
                            number={data?.atxcount}
                            unit="atxs"
                            startTime={network?.genesis}
                        />
                    </div>
                    <div className="details">
                        <ul className="details-list">
                            <li className="item">
                                <span className="item-name">Id</span>
                                <span className="item-value">{data.id}<CopyButton value={data.id}/></span>
                            </li>
                            <li className="item">
                                <span className="item-name">Rewards Account</span>
                                <span className="item-value">
                                    <Link to={`/${ACCOUNTS}/${data.coinbase}`}>
                                      {data.coinbase}
                                    </Link>
                                    <CopyButton value={data.coinbase}/>
                                </span>
                            </li>
                            <li className="item">
                                <span className="item-name">Space</span>
                                <span className="item-value">
                                {byteConverter(data.cSize)}
                              </span>
                            </li>
                            <li className="item">
                                <span className="item-name">Reward</span>
                                <span className="item-value">
                                <Link to={`/${SMESHER}/${data.id}/${REWARDS}`}>{formatSmidge(data.rewards)}</Link>
                              </span>
                            </li>
                            <li className="item">
                                <span className="item-name">Activations</span>
                                <span className="item-value">
                                    <Link to={`/${SMESHER}/${data.id}/${ATXS}`}>{data.atxcount}</Link>
                              </span>
                            </li>
                        </ul>
                    </div>
                </>
            ) : (<Loader size={100}/>)}
        </>
    )
}

export default observer(Smesher);