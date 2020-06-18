// @flow
import * as React from 'react';

import Header from './Header';
import Search from '../common/Search';

type Props = {
  uiStore: Object;
  children: React.node;
};

const Layout = (props: Props) => {
  const { children, uiStore } = props;

  return (
    <div className="wrapper">
      <Header uiStore={uiStore} />
      <Search />
      { children }
    </div>
  );
};

export default Layout;
