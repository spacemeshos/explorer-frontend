// @flow
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';
import { pagesLink } from '../../config/pagesLink';
import {
  BLOCKS, LAYERS, OVERVIEW,
} from '../../config/constants';

const SidebarMenu = () => {
  const { pathname } = useLocation();

  let activePage = pathname !== '/' ? pathname.split('/')[1] : OVERVIEW;

  if (pathname !== '/' && pathname.split('/')[1] === BLOCKS) {
    activePage = LAYERS;
  }

  return (
    <div className="sidebarMenu">
      <ul className="sidebarMenu-list">
        {pagesLink.map((item) => (
          <MenuItem
            key={nanoid()}
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
