// @flow
import React from 'react';

import { observer } from 'mobx-react';

// import NotFound from '../../pages/NotFound';

import '../../styles/Main.scss';
import Layout from '../Layout';
import PageContainer from '../../pages/PageContainer';

// import { pagesLink } from '../../config/pagesLink';

const renderCurrentView = (store, uiStore) => {
 // const view = store.currentView;
  // const isPageExist = pagesLink.map((i) => i.page).find((j) => j === view.name);
  //
  // if (!isPageExist) {
  //   return <NotFound />;
  // }

  return <PageContainer viewStore={store} uiStore={uiStore}/>;
};

const Main = observer(({ store, uiStore }) => (
  <Layout uiStore={uiStore} viewStore={store}>
    { renderCurrentView(store, uiStore) }
  </Layout>
));

export default Main;
