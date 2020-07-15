// @flow
import React, { useContext, useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { StoreContext } from '../../../contextProviders/StoreContext';

import Logo from '../../common/Logo';
import NavBar from '../../common/NavBar';
import Switcher from '../../common/Switcher';
import DropDown from '../../common/DropDown';

const links = [
  {
    href: '/',
    title: 'join spacemesh 0.1',
  },
  {
    href: '/',
    title: 'community forums',
  },
  {
    href: '/',
    title: 'dashboard',
  },
];

const Header = () => {
  const store = useContext(StoreContext);
  const { uiStore, viewStore } = store;

  useEffect(() => {
    viewStore.getNetworks();
  }, [viewStore]);

  return (
    <div className="header">
      <Logo />
      <NavBar links={links} />
      <DropDown options={toJS(viewStore.networks)} />
      <Switcher id="switch" onChange={(e) => uiStore.changeTheme(e)} checked={uiStore.theme === 'dark'} />
    </div>
  );
};

export default observer(Header);
