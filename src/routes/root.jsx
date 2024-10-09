import { observer } from 'mobx-react';
import {
  Link, Outlet, useLocation,
} from 'react-router-dom';
import Header from '../components/Header';
import Search from '../components/Search';
import CornerBoxWrapper from '../components/CornerBoxWrapper';
import '../styles/Main.scss';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import {
  LAYERS, OVERVIEW, TXNS,
} from '../config/constants';
import TimeBlock from '../components/TimeBlock';
import ThrottleWarningPopup from '../components/ThrottleWarningPopup';

const Root = ({ errorElement }) => {
  const { pathname } = useLocation();
  const activePage = pathname !== '/' ? pathname.split('/')[1] : OVERVIEW;
  const showTimeBlock = (activePage === LAYERS) || (activePage === TXNS);

  return (
    <div className="wrapper">
      <Header />
      <Search />

      <div className="container">
        <ThrottleWarningPopup />
        <div className="grid">
          <aside className="sidebar">
            <SidebarMenu />
            {showTimeBlock && (
            <CornerBoxWrapper>
              <TimeBlock />
            </CornerBoxWrapper>
            )}
          </aside>
          <section className="main">
            <CornerBoxWrapper>
              <div className="page">
                {errorElement || <Outlet />}
              </div>
            </CornerBoxWrapper>
            {activePage === OVERVIEW && !errorElement && (
              <div className="browseAll-link">
                <Link to={`/${TXNS}`}>browse all</Link>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default observer(Root);
