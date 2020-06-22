// @flow
import * as React from 'react';

import { observer } from 'mobx-react';

import Page from '../Page';
import SidebarMenu from '../../components/common/SidebarMenu';
import CornerBoxWrapper from '../../components/common/CornerBoxWrapper';

type Props = {
  store: Object,
};

const PageContainer = (props: Props) => {
  const { store, uiStore } = props;
  console.log(props);

  return (
    <div className="container">
      <div className="grid">
        <aside className="sidebar">
          <SidebarMenu store={store} />
        </aside>
        <section className="main">
          <CornerBoxWrapper>
            <Page name={store.currentView.name} uiStore={uiStore}/>
          </CornerBoxWrapper>
        </section>
      </div>
    </div>
  );
};

export default observer(PageContainer);
