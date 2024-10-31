import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import {UserProvider} from "./UserContext";
import App from "./App";
import './i18n'; // sideEffects: true
import "./index.css";
//import './tailwind.css';
import './globalStyles.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
      <UserProvider>
        <App/>
      </UserProvider>
    </React.StrictMode>
);
