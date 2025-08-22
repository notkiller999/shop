import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import App from './app/App';
import store, { persistor } from './store';
import './index.css';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	// <React.StrictMode>
		<PersistGate loading={null} persistor={persistor}>
			<Provider store={store}>
				<App/>
			</Provider>
		</PersistGate>
  	// </React.StrictMode>
);

