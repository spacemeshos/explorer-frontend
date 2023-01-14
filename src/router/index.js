// @flow
import {createBrowserRouter} from "react-router-dom";
import Root from "../routes/root";
import Overview from "../routes/overview";
import NotFound from "../routes/not-found";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/overview',
        element: <Overview/>
      }
    ]
  },
]);

export default router;