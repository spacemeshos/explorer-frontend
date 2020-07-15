// @flow
import * as React from 'react';

import Header from './Header';
import Search from '../common/Search';

import { StoreContext } from '../../contextProviders/StoreContext';

type Props = {
  uiStore: Object;
  viewStore: Object;
  children: React.node;
};

const Layout = (props: Props) => {
  const { children, uiStore, viewStore } = props;

  return (
    <StoreContext.Provider value={{ viewStore, uiStore }}>
      <div className="wrapper">
        <Header />
        <Search viewStore={viewStore} />
        { children }
      </div>
    </StoreContext.Provider>
  );
};

export default Layout;
