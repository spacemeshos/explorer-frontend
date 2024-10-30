// @flow
import { observer } from 'mobx-react';

import Logo from '../Logo';
import NavBar from '../NavBar';
import Switcher from '../Switcher';
import { useStore } from '../../store';
import NetworkStatus from '../NetworkStatus';
import DropDown from '../DropDown';

const Header = () => {
  const store = useStore();

  const links = [
    {
      href: 'https://spacemesh.io/start/',
      title: 'join the network',
    },
    {
      href: store.network.dash,
      title: 'dashboard',
    },
  ];

  return (
    <div className="header">
      <Logo />
      <NavBar links={links} />
      <div className="header_dropdown">
        <NetworkStatus color={store.networkColor} />
        <DropDown
          options={store.networks}
          selectedItem={store.network}
          onSelect={(e) => {
            store.setNetwork(e);
            store.processNetworkInfo();
          }}
        />
      </div>
      <Switcher id="switch" onChange={(e) => store.changeTheme(e)} checked={store.theme === 'dark'} />
    </div>
  );
};

export default observer(Header);
