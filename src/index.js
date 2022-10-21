import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'tw-elements';
import ErrorBoundary from './utils/error.boundary';
import {BrowserRouter} from 'react-router-dom';
import CRoutes from "./routes/c.routes";
import Authenticate from "./features/login/login.service";
import ErrorPage from "./utils/error.page";

const container = document.getElementById('root');
const root = createRoot(container);

const render = () => root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <BrowserRouter>
                    <CRoutes></CRoutes>
                </BrowserRouter>
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>
);

const error = (e) => {
    console.log('Error Login ' ,e.error);
    root.render(
        <React.StrictMode>
            <ErrorPage error={e.error}></ErrorPage>
        </React.StrictMode>
    );
}


Authenticate(render, error);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
