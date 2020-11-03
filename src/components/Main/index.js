// @flow
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import Layout from '../Layout';
import PageContainer from '../../pages/PageContainer';

import '../../styles/Main.scss';

const renderCurrentView = (store, uiStore) => <PageContainer viewStore={store} uiStore={uiStore} />;
type Props = {
  store: Object,
  uiStore: Object,
}

const Main = (props: Props) => {
  const { store, uiStore } = props;

  useEffect(() => {
    uiStore.getNetworkInfo();
    const intervalId = setInterval(() => uiStore.getNetworkInfo(), 30000);
    return clearInterval(intervalId);
  },
  []);

  return (
    <Layout uiStore={uiStore} viewStore={store}>
      { renderCurrentView(store, uiStore) }
    </Layout>
  );
};

export default observer(Main);
