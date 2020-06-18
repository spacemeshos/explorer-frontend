// @flow
import * as React from 'react';
import { observer } from 'mobx-react';

type Props = {
  store: Object
};

const Overview = (props: Props) => {
  const { store } = props;
  const view = store.currentView.name;

  return (
    <h1>{view}</h1>
  );
};

export default observer(Overview);
