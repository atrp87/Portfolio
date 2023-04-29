import React from 'react'
import ReactDOM from 'react-dom/client'
import RootLayout from './layout/RootLayout';
import Home from './routes/Home';
import Article from './routes/Article';
import NotFound from './routes/NotFound';
import './scss/main.scss';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // Errors bubble up
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'article/:id',
        element: <Article />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
