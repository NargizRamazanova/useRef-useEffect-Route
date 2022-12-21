import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Container from '@mui/material/Container';

import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "about",
        element: <About/>
      }
    ]
  },
  
]);






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container maxWidth="sm">
    <RouterProvider router={router} />
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
