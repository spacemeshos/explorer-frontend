// @flow
import * as React from 'react';

import { nanoid } from 'nanoid';

import MenuItem from './MenuItem';
import { pagesLink } from '../../../config/pagesLink';

type Props = {
  store: Object
};

const SidebarMenu = (props: Props) => {
  const { store } = props;

  const onClickHandler = (e, page) => {
    e.preventDefault();
    store.showPage({ page });
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
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
