import {useEffect} from "react";
import {useStore} from "../store";
import {observer} from "mobx-react";
import Header from "../components/Header";
import Search from "../components/common/Search";
import CornerBoxWrapper from "../components/common/CornerBoxWrapper";
import {Outlet} from "react-router-dom";
import '../styles/Main.scss';
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";

const Root = () => {
    const store = useStore();
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
                        {/*{showTimeBlock && (*/}
                        {/*<CornerBoxWrapper>*/}
                        {/*  <TimeBlock viewStore={viewStore} />*/}
                        {/*</CornerBoxWrapper>*/}
                        {/*)}*/}
                    </aside>
                    <section className="main">
                        <CornerBoxWrapper>
                            <div className="page">
                                <Outlet/>
                            </div>
                        </CornerBoxWrapper>
                        {/*{viewStore.currentView.name === OVERVIEW && (*/}
                        {/*  <div className="browseAll-link">*/}
                        {/*    <a href={`/${TXNS}`} onClick={() => viewStore.showPage({ page: TXNS })}>browse all</a>*/}
                        {/*  </div>*/}
                        {/*)}*/}
                    </section>
                </div>
            </div>
        </div>
    )
};

export default observer(Root);