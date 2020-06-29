// @flow
import React, { useState } from 'react';

import { nanoid } from 'nanoid';

import MenuItem from './MenuItem';
import { pagesLink } from '../../../config/pagesLink';

type Props = {
  store: Object
};

const SidebarMenu = (props: Props) => {
  const { store } = props;
  const pageName = window.location.pathname === '/' ? 'overview' : window.location.pathname.split('/')[1];
  const [activePage, setActivePage] = useState(pageName);

  const onClickHandler = (e, page) => {
    e.preventDefault();
    store.showPage({ page });
    setActivePage(page);
  };

  return (
    <div className="sidebarMenu">
      <ul className="sidebarMenu-list">
        {pagesLink.map((item) => (
          <MenuItem
            key={nanoid()}
            onClickHandler={onClickHandler}
            title={item.title}
            page={item.page}
            icon={item.icon}
            activePage={activePage}
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
