// @flow
import { Link } from 'react-router-dom';
import MenuIcon from '../MenuIcon';

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
