// @flow
import {createBrowserRouter} from "react-router-dom";
import Root from "../routes/root";
import Overview from "../routes/overview";
import NotFound from "../routes/not-found";
import Layers from "../routes/layers";
import Txs from "../routes/txs";
import Accounts from "../routes/accounts";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
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
        path: '/accounts',
        element: <Accounts/>
      }
    ]
  },
]);

export default router;