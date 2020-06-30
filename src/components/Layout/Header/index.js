// @flow
import React, { useContext } from 'react';

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
  const { uiStore } = store;

  return (
    <div className="header">
      <Logo />
      <NavBar links={links} />
      <DropDown />
      <Switcher id="switch" onChange={(e) => uiStore.changeTheme(e)} checked={uiStore.theme === 'dark'} />
    </div>
  );
};

export default observer(Header);
