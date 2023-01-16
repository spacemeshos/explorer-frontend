// @flow
import {createBrowserRouter, Navigate} from "react-router-dom";
import Root from "../routes/root";
import Overview from "../routes/overview";
import NotFound from "../routes/not-found";
import Layers from "../routes/layers";
import Txs from "../routes/txs";
import Accounts from "../routes/accounts";
import Epochs from "../routes/epochs";
import Smeshers from "../routes/smeshers";
import Tx from "../routes/tx";
import Account from "../routes/account";
import Layer from "../routes/layer";
import Epoch from "../routes/epoch";
import Smesher from "../routes/smesher";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/',
        element: <Navigate to='/overview'/>,
      },
      {
        path: '/overview',
        element: <Overview/>
      },
      {
        path: '/layers',
        element: <Layers/>
      },
      {
        path: '/layers/:id',
        element: <Layer/>
      },
      {
        path: '/txs',
        element: <Txs/>
      },
      {
        path: '/txs/:id',
        element: <Tx/>
      },
      {
        path: '/accounts',
        element: <Accounts/>
      },
      {
        path: '/accounts/:id',
        element: <Account/>
      },
      {
        path: '/epochs',
        element: <Epochs/>
      },
      {
        path: '/epochs/:id',
        element: <Epoch/>
      },
      {
        path: '/smeshers',
        element: <Smeshers/>
      },
      {
        path: '/smeshers/:id',
        element: <Smesher/>
      }
    ]
  },
]);

export default router;