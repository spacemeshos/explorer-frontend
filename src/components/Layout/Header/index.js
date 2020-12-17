// @flow
import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { StoreContext } from '../../../contextProviders/StoreContext';

import Logo from '../../common/Logo';
import NavBar from '../../common/NavBar';
import Switcher from '../../common/Switcher';
import DropDown from '../../common/DropDown';
import NetworkStatus from '../../common/NetworkStatus';

const links = [
  {
    href: 'https://spacemesh.io/testnet/',
    title: 'join testnet',
  },
  {
    href: '/',
    title: 'community forums',
  },
  {
    href: 'https://stage-dash.spacemesh.io/',
    title: 'dashboard',
  },
];

const Header = () => {
  const store = useContext(StoreContext);
  const { uiStore, viewStore } = store;

  return (
    <div className="header">
      <Logo />
      <NavBar links={links} />
      <div className="header_dropdown">
        <NetworkStatus color={uiStore.color} />
        <DropDown options={viewStore.networks} selectedItem={viewStore.network} onSelect={(e) => viewStore.setNetwork(e)} />
      </div>
      <Switcher id="switch" onChange={(e) => uiStore.changeTheme(e)} checked={uiStore.theme === 'dark'} />
    </div>
  );
};

export default observer(Header);
