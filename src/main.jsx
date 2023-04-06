import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Error from './Error/Error';
import { First } from 'react-bootstrap/esm/PageItem';
import Home from './component/Home/Home';
import Service from './component/Servi/Service';
import Friends from './component/Friends/Friends';
import Friend from './component/Friend/Friend';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Detail from './component/Detail/Detail';
const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    children:[
      {
      path:'/',
      element:<First></First>
      },
      {
      path:'about',
      element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
        },
        {
          path:'friends',
          element:<Friends></Friends>,
          loader:()=> fetch("https://jsonplaceholder.typicode.com/users")
          },
        {
          path:'service',
          element:<Service></Service>
          },
          {
            path:'friend/:friendId',
            element:<FriendDetail></FriendDetail>,
            loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
            },
            {
              path:'detail/:detailId',
              element:<Detail></Detail>,
              loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.detailId}`)
            },

    ]
  },
 
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  
  </React.StrictMode>,
)
