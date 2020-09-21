// @flow
import React from 'react';
import { observer } from 'mobx-react';

import Layout from '../Layout';
import PageContainer from '../../pages/PageContainer';

import '../../styles/Main.scss';

const renderCurrentView = (store, uiStore) => <PageContainer viewStore={store} uiStore={uiStore} />;

const Main = observer(({ store, uiStore }) => (
  <Layout uiStore={uiStore} viewStore={store}>
    { renderCurrentView(store, uiStore) }
  </Layout>
));

export default Main;
