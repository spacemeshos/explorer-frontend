// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import 'mobx-react-lite/batchingForReactDom';

import { startRouter } from './router';
import { fetchAPI } from './api/fetchAPI';
import Main from './components/Main';

import ViewStore from './store/ViewStore';
import UiStore from './store/UiStore';

import * as serviceWorker from './serviceWorker';

const viewStore = new ViewStore(fetchAPI);
const uiStore = new UiStore();

startRouter(viewStore);

ReactDOM.render(
  <Main store={viewStore} uiStore={uiStore} />,
  document.getElementById('root'),
);

serviceWorker.unregister();
