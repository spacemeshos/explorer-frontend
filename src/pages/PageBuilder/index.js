// @flow
import * as React from 'react';

import { observer } from 'mobx-react';

import Box from '../../components/common/Box';
import SidebarMenu from '../../components/common/SidebarMenu';
import CornerBoxWrapper from '../../components/common/CornerBoxWrapper';

type Props = {
  store: Object,
};

const PageBuilder = (props: Props) => {
  const { store } = props;
  console.log('Page store', store);
  return (
    <div className="container">
      <div className="grid">
        <aside className="sidebar">
          <SidebarMenu store={store} />
        </aside>
        <section className="main">
          <CornerBoxWrapper>
            <Box name={store.currentView.name} />
          </CornerBoxWrapper>
        </section>
      </div>
    </div>
  );
};

export default observer(PageBuilder);
