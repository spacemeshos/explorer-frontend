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
        path: '/epochs',
        element: <Epochs/>
      },
      {
        path: '/smeshers',
        element: <Smeshers/>
      }
    ]
  },
]);

export default router;