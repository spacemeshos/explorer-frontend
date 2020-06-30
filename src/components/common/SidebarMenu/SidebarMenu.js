// @flow
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import MenuItem from './MenuItem';
import { pagesLink } from '../../../config/pagesLink';

type Props = {
  viewStore: Object,
};

const SidebarMenu = (props: Props) => {
  const { viewStore } = props;

  const onClickHandler = (e, page) => {
    e.preventDefault();
    viewStore.showPage({ page });
  };

  const activePage = viewStore.currentPath.split('/')[1];

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

export default observer(SidebarMenu);
