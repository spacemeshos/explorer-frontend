import TitleBlock from "../../components/TitleBlock";
import {getColorByPageName} from "../../helper/getColorByPageName";
import {ACCOUNTS, REWARDS, TXNS} from "../../config/constants";
import RightSideBlock from "../../components/CountBlock/RightSideBlock";
import {useStore} from "../../store";
import {observer} from "mobx-react";
import {fetchAPI} from "../../api/fetchAPI";
import {useEffect, useState} from "react";
import Loader from "../../components/Loader";
import {Link, useParams} from "react-router-dom";
import {formatSmidge, parseSmidge} from "../../helper/converter";
import CopyButton from "../../components/CopyButton";

const Account = () => {
    const store = useStore();
    const name = ACCOUNTS;
    const params = useParams();

    const [data, setData] = useState();
    const [smidge, setSmidge] = useState({value: 0, unit: 'SMH'});

    useEffect(() => {
        if (store.network.value === null) return;
        fetchAPI(`${store.network.value}${name}/${params.id}`).then((res) => {
            setData(res.data[0]);
            setSmidge(parseSmidge(res.data[0].balance));
        })
    }, [store.network.value]);

    return (
        <>
            {data ? (
                <>
                    <div className="page-wrap">
                        <TitleBlock
                            title="Account"
                            color={getColorByPageName(name)}
                            desc="coin account"
                        />
                        <RightSideBlock
                            color={getColorByPageName(name)}
                            number={smidge && smidge.value}
                            unit={`${smidge && smidge.unit} Balance`}
                            startTime={data && data.timestamp}
                        />
                    </div>
                    <div className="details">
                        <ul className="details-list">
                            <li className="item">
                                <span className="item-name">Address</span>
                                <span className="item-value">{data.address}
                                    <CopyButton value={data.address}/>
                                </span>
                            </li>
                            <li className="item">
                                <span className="item-name">Counter</span>
                                <span className="item-value">{data.counter}</span>
                            </li>
                            <li className="item">
                                <span className="item-name">Rewards</span>
                                <span className="item-value">
                                <Link to={`/${ACCOUNTS}/${data.address}/${REWARDS}`}>
                                  {formatSmidge(data.awards)}
                                </Link>
                              </span>
                            </li>
                            <li className="item">
                                <span className="item-name">Balance</span>
                                <span className="item-value">
                                    <Link to={`/${ACCOUNTS}/${data.address}/${REWARDS}`}>
                                      {formatSmidge(data.balance)}
                                    </Link>
                                </span>
                            </li>
                            <li className="item">
                                <span className="item-name">Transactions</span>
                                <span className="item-value">
                                    <Link to={`/${ACCOUNTS}/${data.address}/${TXNS}`}>
                                      {data.txs}
                                    </Link>
                              </span>
                            </li>
                        </ul>
                    </div>
                </>
            ) : (<Loader size={100}/>)}
        </>
    )
}

export default observer(Account);