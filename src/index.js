import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18+
import { Provider } from 'react-redux';
import { store } from './store/store'; // Ensure this points to your Redux store
import App from './App';
import './index.css'; // Ensure this imports Tailwind CSS

// Create the root for React rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
