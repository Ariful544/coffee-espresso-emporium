import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout';
import PagesLayout from './Layouts/PagesLayout';
import AddCoffee from './pages/AddCoffee';
import ViewDetails from './pages/ViewDetails';
import UpdateCoffee from './pages/UpdateCoffee';
import ErrorPage from './pages/ErrorPage';
import ErrorLayout from './Layouts/ErrorLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
  },
  {
    path: '/coffees',
    element: <PagesLayout/>,
    children:[
      {
        path: 'add-coffee',
        element: <AddCoffee/>
      },
      {
        path: 'view-details',
        element: <ViewDetails/>
      },
      {
        path: 'update-coffee',
        element: <UpdateCoffee/>
      }
    ]
  },
  {
    path:'*',
    element: <ErrorLayout/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
