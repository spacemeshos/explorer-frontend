// @flow
import * as React from 'react';

import { observer } from 'mobx-react';

import Logo from '../../common/Logo';
import NavBar from '../../common/NavBar';
import Switcher from '../../common/Switcher';
import DropDown from '../../common/DropDown';

type Props = {
  uiStore: Object,
}

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

const Header = (props: Props) => {
  const { uiStore } = props;

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
