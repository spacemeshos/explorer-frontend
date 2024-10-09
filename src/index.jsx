import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Store, { StoreProvider } from './store';
import { fetchAPI } from './api/fetchAPI';
import router from './router';

window.name = '_spacemesh';

const store = new Store(fetchAPI);
store.bootstrap();

const style = {
  backgroundColor: '#ffcc00',
  color: '#333',
  textAlign: 'center',
  padding: '10px 0',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000,
  fontWeight: 'bold',
};

ReactDOM.render(
  <StoreProvider store={store}>
    <div style={style}>
      This is a legacy version of the Spacemesh Explorer. Some data may be missing or incorrect.
    </div>
    <RouterProvider router={router} />
  </StoreProvider>,
  document.getElementById('root'),
);

reportWebVitals();
