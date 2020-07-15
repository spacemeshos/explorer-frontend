// @flow
import * as React from 'react';
import { observer } from 'mobx-react';

import BitmapSVG from './BitmapSVG';

type Props = {
  title: string;
  color: string,
  desc: string;
  uiStore: string,
};

const TitleBlock = (props: Props) => {
  const { title, desc, color, uiStore } = props;

  return (
    <div className="titleBlock">
      <div className="titleBlock-wrap">
        <p style={{ color: color.textColor }} className="titleBlock-title">{title}</p>
        <p className="titleBlock-desc">{desc}</p>
      </div>
      <BitmapSVG invert={uiStore.theme !== 'dark'} />
    </div>
  );
};

export default observer(TitleBlock);
