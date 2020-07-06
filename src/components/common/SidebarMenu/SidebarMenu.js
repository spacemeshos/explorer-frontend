// @flow
import React from 'react';
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import MenuItem from './MenuItem';
import { pagesLink } from '../../../config/pagesLink';
import {BLOCKS, LAYERS} from "../../../config/constants";

type Props = {
  viewStore: Object,
};

const SidebarMenu = (props: Props) => {
  const { viewStore } = props;
  const { currentPath } = viewStore;

  const onClickHandler = (e, page) => {
    e.preventDefault();
    viewStore.showPage({ page });
  };

  let activePage = currentPath !== '/' ? currentPath.split('/')[1] : 'overview';

  if (currentPath !== '/' && currentPath.split('/')[1] === BLOCKS) {
    activePage = LAYERS
  }

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
