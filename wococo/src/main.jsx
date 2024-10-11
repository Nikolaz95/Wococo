import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import MainContent from './components/Page/MainContent/MainContent.jsx';
import Root from './components/Root.jsx';
import SingIn from './components/Page/auth/SingIn/SingIn.jsx';
import Register from './components/Page/auth/Register/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainContent />
      },
      {
        path: "/singIn",
        element: <SingIn />
      },

      {
        path: "/register",
        element: <Register />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
