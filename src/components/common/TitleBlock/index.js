// @flow
import * as React from 'react';
import { observer } from 'mobx-react';


import BitmapSVG from './BitmapSVG';

type Props = {
  title: string;
  titleColor: string,
  desc: string;
  uiStore: string,
};

const TitleBlock = (props: Props) => {
  const { title, desc, titleColor, uiStore } = props;
  console.log(uiStore.theme);
  return (
    <div className="titleBlock">
      <div className="titleBlock-wrap">
        <p style={{color: titleColor}} className="titleBlock-title">{title}</p>
        <p className="titleBlock-desc">{desc}</p>
      </div>
      <BitmapSVG invert={uiStore.theme !== 'dark'} />
    </div>
  );
};

export default observer(TitleBlock);
