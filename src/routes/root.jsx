import {useEffect} from "react";
import {useStore} from "../store";
import {observer} from "mobx-react";
import Header from "../components/Header";
import Search from "../components/common/Search";
import CornerBoxWrapper from "../components/CornerBoxWrapper";
import {Link, Outlet, useLocation} from "react-router-dom";
import '../styles/Main.scss';
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import {LAYERS, OVERVIEW, TXNS} from "../config/constants";
import TimeBlock from "../components/TimeBlock";

const Root = () => {
    const store = useStore();
    const { pathname } = useLocation();
    const activePage = pathname !== '/' ? pathname.split('/')[1] : OVERVIEW;
    const showTimeBlock = (activePage === LAYERS) || (activePage === TXNS);

    useEffect(() => {
        const intervalId = setInterval(() => store.getNetworkInfo(), 30000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <Search/>

            <div className="container">
                <div className="grid">
                    <aside className="sidebar">
                        <SidebarMenu/>
                        {showTimeBlock && (
                        <CornerBoxWrapper>
                          <TimeBlock/>
                        </CornerBoxWrapper>
                        )}
                    </aside>
                    <section className="main">
                        <CornerBoxWrapper>
                            <div className="page">
                                <Outlet/>
                            </div>
                        </CornerBoxWrapper>
                        {activePage === OVERVIEW && (
                          <div className="browseAll-link">
                            <Link to={`/${TXNS}`}>browse all</Link>
                          </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    )
};

export default observer(Root);