import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {RouterProvider} from 'react-router-dom';

import Store, {StoreProvider} from "./store";
import {fetchAPI} from "./api/fetchAPI";
import router from "./router";

window.name = '_spacemesh';

const store = new Store(fetchAPI);

ReactDOM.render(
    <StoreProvider store={store}>
        <RouterProvider router={router}/>
    </StoreProvider>,
    document.getElementById('root'),
);

reportWebVitals();
