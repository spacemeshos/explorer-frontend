// @flow
import React from 'react';
import { observer } from 'mobx-react';

import Layout from '../Layout';
import PageContainer from '../../pages/PageContainer';

import '../../styles/Main.scss';

const renderCurrentView = (store, uiStore) => <PageContainer viewStore={store} uiStore={uiStore} />;
type Props = {
  viewStore: Object,
  uiStore: Object,
}

const Main = (props: Props) => {
  const { viewStore, uiStore } = props;
  return (
    <Layout uiStore={uiStore} viewStore={viewStore}>
      { renderCurrentView(viewStore, uiStore) }
    </Layout>
  );
};

export default observer(Main);
