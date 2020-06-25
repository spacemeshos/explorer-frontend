// @flow
import * as React from 'react';
import MenuIcon from '../MenuIcon';

type Props = {
  title: string,
  page: string,
  icon: string,
  activePage: string,
  onClickHandler: Function,
};

const MenuItem = (props: Props) => {
  const { title, page, icon, activePage, onClickHandler } = props;

  const activePageClass = activePage === page ? 'active' : '';

  return (
    <li className="item">
      <a className={`item-link ${icon} ${activePageClass}`} href={`/${page}`} onClick={(e) => onClickHandler(e, page)}>
        <MenuIcon name={icon} />
        <p>{title}</p>
      </a>
    </li>
  );
};

export default MenuItem;
