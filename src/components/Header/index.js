// @flow
import React from 'react';
import {observer} from 'mobx-react';

import Logo from '../common/Logo';
import NavBar from '../common/NavBar';
import Switcher from '../common/Switcher';
import DropDown from '../DropDown';
import NetworkStatus from '../common/NetworkStatus';
import {useStore} from "../../store";

const Header = () => {
    const store = useStore();

    const links = [
        {
            href: 'https://spacemesh.io/testnet/',
            title: 'join testnet',
        },
        {
            href: store.network.dash,
            title: 'dashboard',
        },
    ];

    return (
        <div className="header">
            <Logo/>
            <NavBar links={links}/>
            <div className="header_dropdown">
                <NetworkStatus color={store.networkColor}/>
                <DropDown options={store.networks} selectedItem={store.network}
                          onSelect={(e) => store.setNetwork(e)}/>
            </div>
            <Switcher id="switch" onChange={(e) => store.changeTheme(e)} checked={store.theme === 'dark'}/>
        </div>
    );
};

export default observer(Header);
