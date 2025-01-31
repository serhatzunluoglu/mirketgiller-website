import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AppProvider } from './context/AppContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);


console.log('%c Mirketgiller', 'font-size: 20px; font-weight: bold; color: #d37c26; transform: rotate(360deg);');





                                                                                                        