import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ListedBooks from './components/ListedBooks/ListedBooks';
import BooksListed from './components/BooksListed/BooksListed';
import PagesToRead from './components/PagesToRead/PagesToRead';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/book/:id',
        loader: () => fetch('data.json'),
        element:<ListedBooks></ListedBooks>,
       
        
      },
      {
        path:'/books-listed',
        loader: () => fetch('data.json'),
        element:<BooksListed></BooksListed>,
       
      },
      {
        path:'/page-read',
        loader: () => fetch('data.json'),
        element:<PagesToRead></PagesToRead>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
