import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // 3d 배경
    errorElement: null, // 에러 페이지 - 404 등 추가
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
