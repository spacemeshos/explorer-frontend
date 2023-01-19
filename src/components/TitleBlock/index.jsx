// @flow
import { observer } from 'mobx-react';

import BitmapSVG from './BitmapSVG';
import { useStore } from '../../store';

type Props = {
    title: string;
    color: string,
    desc: string;
    uiStore: string,
};

const TitleBlock = (props: Props) => {
  const store = useStore();
  const { title, desc, color } = props;

  return (
    <div className="titleBlock">
      <div className="titleBlock-wrap">
        <p style={{ color: color.textColor }} className="titleBlock-title">{title}</p>
        <p className="titleBlock-desc">{desc}</p>
      </div>
      <BitmapSVG invert={store.theme !== 'dark'} />
    </div>
  );
};

export default observer(TitleBlock);
