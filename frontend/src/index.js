import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/UserContext';
import { MessagesContextProvider } from './context/MessageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MessagesContextProvider>
        <App />
      </MessagesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


