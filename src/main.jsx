import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import NotFound from './routes/NotFound';
import Blogs from './routes/Blogs';
import Article from './routes/Article';
import RootLayout from './routes/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <App />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/article/:id',
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
