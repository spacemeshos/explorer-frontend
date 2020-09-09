// @flow
import * as React from 'react';
import { observer } from 'mobx-react';

import SidebarMenu from '../../components/common/SidebarMenu';
import CornerBoxWrapper from '../../components/common/CornerBoxWrapper';
import RenderMainPage from '../RenderPage/RenderMainPage';
import RenderDetailPage from '../RenderPage/RenderDetailPage';
import RenderSubPage from '../RenderPage/RenderSubPage';
import TimeBlock from '../../components/common/TimeBlock';

import { LAYERS, OVERVIEW, TXNS } from '../../config/constants';
import isEmpty from '../../helper/isEmpty';

type Props = {
  viewStore: Object,
  uiStore: Object,
};

const PageContainer = (props: Props) => {
  const { viewStore, uiStore } = props;
  const pageName = viewStore.currentView.name;

  const renderCurrentPage = () => {
    const { name, id, subPage } = viewStore.currentView;

    const isMainPage = name && isEmpty(id) && isEmpty(subPage);
    const isDetailsPage = name && !isEmpty(id)  && isEmpty(subPage);
    const isSubPage = name && !isEmpty(id) && !isEmpty(subPage);

    if (isMainPage) {
      return (
        <RenderMainPage viewStore={viewStore} uiStore={uiStore} />
      );
    }

    if (isDetailsPage) {
      return (
        <RenderDetailPage
          viewStore={viewStore}
          uiStore={uiStore}
          name={name}
          id={id}
        />
      );
    }

    if (isSubPage) {
      return (
        <RenderSubPage
          viewStore={viewStore}
          uiStore={uiStore}
          name={name}
          id={id}
          subPage={subPage}
        />
      );
    }
  };

  const showTimeBlock = (pageName === LAYERS) || (pageName === TXNS);

  return (
    <div className="container">
      <div className="grid">
        <aside className="sidebar">
          <SidebarMenu viewStore={viewStore} />
          {showTimeBlock && (
          <CornerBoxWrapper>
            <TimeBlock viewStore={viewStore}/>
          </CornerBoxWrapper>
          )}
        </aside>
        <section className="main">
          <CornerBoxWrapper>
            <div className="page">
              { renderCurrentPage() }
            </div>
          </CornerBoxWrapper>
          {viewStore.currentView.name === OVERVIEW && (
            <div className="browseAll-link">
              <a href={`/${TXNS}`} onClick={() => viewStore.showPage({ page: TXNS })}>browse all</a>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default observer(PageContainer);
