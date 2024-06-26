import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Toaster} from "react-hot-toast"
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppContextProvider } from './Context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <AppContextProvider>
    <App/>
    </AppContextProvider>
    <Toaster/>
    </BrowserRouter>
);
