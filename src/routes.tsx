import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/Templates/MainLayout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "users",
        element: <Users />
      }
    ]
  }
]);

