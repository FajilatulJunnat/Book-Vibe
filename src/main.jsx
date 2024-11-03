import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Bookdetail from './components/Bookdetail';
import ListedBooks from './components/ListedBooks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: '/book/:bookId',
        element:<Bookdetail></Bookdetail>,
        loader: () =>fetch('/booksData.json')
      },
      {
        path: "/listedBooks",
        element:
        <ListedBooks></ListedBooks>,
        loader: () =>fetch('/booksData.json')
      },
      {
        path: "/dashboard",
        element:<Dashboard></Dashboard>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
