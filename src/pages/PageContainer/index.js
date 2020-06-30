// @flow
import * as React from 'react';

import { observer } from 'mobx-react';

import Page from '../Page';
import SidebarMenu from '../../components/common/SidebarMenu';
import CornerBoxWrapper from '../../components/common/CornerBoxWrapper';

type Props = {
  viewStore: Object,
  uiStore: Object,
};

const PageContainer = (props: Props) => {
  const { viewStore, uiStore } = props;

  return (
    <div className="container">
      <div className="grid">
        <aside className="sidebar">
          <SidebarMenu viewStore={viewStore}/>
        </aside>
        <section className="main">
          <CornerBoxWrapper>
            <Page viewStore={viewStore} uiStore={uiStore}/>
          </CornerBoxWrapper>
        </section>
      </div>
    </div>
  );
};

export default observer(PageContainer);
