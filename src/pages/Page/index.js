// @flow
import * as React from 'react';
import InfoBlock from "../../components/common/InfoBlock";
import TitleBlock from "../../components/common/TitleBlock";
import CountBlock from "../../components/common/CountBlock";
import Table from '../../components/common/Table';

import { getColorByPageName } from "../../helper/getColorByPageName";

type Props = {
  name: string;
  uiStore: Object,
}

const Page = (props: Props) => {
  const { name, uiStore } = props;
  return (
    <div className="page">
      {name === 'overview' && <InfoBlock />}
      <div className="page-wrap">
      <TitleBlock title="Latest Transaction" titleColor={getColorByPageName(name)} desc="Most recent global transactions." uiStore={uiStore}/>
      <CountBlock numberColor={getColorByPageName(name)} bgColor={getColorByPageName(name)}/>
      </div>
      {/*{`Page name: ${name}`}*/}
      <Table />
    </div>
  )
};

export default Page;
