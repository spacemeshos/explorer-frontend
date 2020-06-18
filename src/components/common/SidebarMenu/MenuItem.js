// @flow
import * as React from 'react';
import MenuIcon from '../MenuIcon';

type Props = {
  title: string,
  page: string,
  icon: string,
  onClickHandler: Function,
};

const MenuItem = (props: Props) => {
  const { title, page, icon, onClickHandler } = props;

  return (
    <li className="item">
      <a className={`item-link ${icon}`} href={`/${page}`} onClick={(e) => onClickHandler(e, page)}>
        <MenuIcon name={icon} />
        <p>{title}</p>
      </a>
    </li>
  );
};

export default MenuItem;
