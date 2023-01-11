// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import {Provider, Observer} from 'mobx-react';

import {Root} from './routes/root';
import {Overview} from "./routes/overview";
import store from "./store/store";
window.name = '_spacemesh';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: 'overview',
                element: <Overview/>
            }
        ]
    },
]);

//  <Main viewStore={viewStore} uiStore={uiStore} />
ReactDOM.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>,
    document.getElementById('root'),
);

reportWebVitals();
