import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="390064739384-llln636v5qsagv5g1tf8tlecj62al9o6.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
 
  </React.StrictMode>
);

