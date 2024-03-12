import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './modules/home/App';
import * as serviceWorker from './serviceWorker';



import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Logs from './modules/logs/Logs';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/logs",
        element: <Logs />,
    },
]);


ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
,
document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
