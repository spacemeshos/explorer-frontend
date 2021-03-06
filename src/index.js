// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'mobx-react-lite/batchingForReactDom';

import { startRouter } from './router';
import { fetchAPI } from './api/fetchAPI';
import Main from './components/Main';

import ViewStore from './store/ViewStore';
import UiStore from './store/UiStore';

const viewStore = new ViewStore(fetchAPI);
const uiStore = new UiStore();

startRouter(viewStore);

window.name = '_spacemesh';

ReactDOM.render(
  <Main viewStore={viewStore} uiStore={uiStore} />,
  document.getElementById('root'),
);

reportWebVitals();
