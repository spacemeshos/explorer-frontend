import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Store, { StoreProvider } from './store';
import router from './router';

window.name = '_spacemesh';

const store = new Store();
store.bootstrap();

ReactDOM.render(
  <StoreProvider store={store}>
    <RouterProvider router={router} />
  </StoreProvider>,
  document.getElementById('root'),
);

reportWebVitals();
