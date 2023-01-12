// @flow
import * as React from 'react';
import MenuIcon from '../common/MenuIcon';
import {Link} from "react-router-dom";

type Props = {
  title: string,
  page: string,
  icon: string,
  activePage: string,
};

const MenuItem = (props: Props) => {
  const { title, page, icon, activePage } = props;

  const activePageClass = activePage === page ? 'active' : '';

  return (
    <li className="item">
      <Link to={`/${page}`} className={`item-link ${icon} ${activePageClass}`}>
        <MenuIcon name={icon} />
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default MenuItem;
