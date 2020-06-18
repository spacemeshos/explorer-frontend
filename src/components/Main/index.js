// @flow
import React from 'react';

import { observer } from 'mobx-react';

import NotFound from '../../pages/NotFound';

import '../../styles/Main.scss';
import Layout from '../Layout';
import PageBuilder from '../../pages/PageBuilder';

import { pagesLink } from '../../config/pagesLink';

const renderCurrentView = (store) => {
  const view = store.currentView;
  const isPageExist = pagesLink.map((i) => i.page).find((j) => j === view.name);

  if (!isPageExist) {
    return <NotFound />;
  }

  return <PageBuilder store={store} />;
};

const Main = observer(({ store, uiStore }) => (
  <Layout uiStore={uiStore}>
    { renderCurrentView(store) }
  </Layout>
));

export default Main;
