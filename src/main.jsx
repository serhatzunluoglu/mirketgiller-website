import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AppProvider } from './context/AppContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SchemaMarkup from './components/schema-markup/SchemaMarkup.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <SchemaMarkup />
      <App />
    </AppProvider>
  </React.StrictMode>
);
