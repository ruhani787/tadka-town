import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApiProvider } from './Practice/Api1';


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiProvider>
    <App/>
  </ApiProvider>
);