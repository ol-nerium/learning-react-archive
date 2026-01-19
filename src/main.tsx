import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './app/store';
import { fetchUsers } from './features/users/usersSlice';

import { worker } from './api/server';

import './primitiveui.css';
import './index.css';

import App from './App';

// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
  // Start our mock API server
  await worker.start({ onUnhandledRequest: 'bypass' });

  store.dispatch(fetchUsers());
  // this is a valid way to fetch data on startup. This actually starts the fetching process before we start rendering our React components, so the data should be available sooner.

  const root = createRoot(document.getElementById('root')!);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

start();
