// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { getColorByPageName } from "../../../helper/getColorByPageName";
import { AmountBlock } from '../CountBlock';
import { LAYERS, OVERVIEW } from '../../../config/constants';

type Props = {
  unit: string,
  viewStore: Object,
};

const CountModuleContainer = (props: Props) => {
  const { unit, viewStore } = props;
  const { name, data } = viewStore.currentView;

  let number = null;
  let startTime = null;

  const setParams = ({ data }) => {

    if (data && data.length === 0) {
      number = "0";
      startTime = "0";
    } else {
      switch (name) {
        case OVERVIEW:
          number = data[0].amount;
          startTime = data[0].start_time;
          return;
        case LAYERS:
          number = data[0].number;
          startTime = data[0].start_time;
          return;
      }
    }
  };

  return data.case({
    pending: () => <AmountBlock number={0} startTime={0} unit={unit} color={getColorByPageName(name)} />,
    fulfilled: (value) => {
      setParams(value);

      return <AmountBlock number={0} startTime={0} unit={unit} color={getColorByPageName(name)} />
    },
  });
};

export default observer(CountModuleContainer);
