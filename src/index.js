import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
import Error from './Error';
import { Login } from './routes/login';
import { Register } from './routes/register';

// This will enable client side routing for our web app.

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children : [
      {
        path:"login",
        element : <Login/>
      },
      {
        path:"register",
        element : <Register/>
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* This first route is what we often call the "root route" since the rest of our 
    routes will render inside of it. It will serve as the root layout of the UI, 
    we'll have nested layouts as we get farther along. */}

    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
