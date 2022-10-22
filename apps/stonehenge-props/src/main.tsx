import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './app/app';
import Store from './app/storeApp/appStore';

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>
);
