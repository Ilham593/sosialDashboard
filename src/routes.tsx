import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from './components/Templates/MainLayout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'
import Albums from './pages/Albums'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "users",
        element: <Users />
      },
      {
        path: "users/:id",
        element: <UserDetail />
      },
      {
        path: "posts",
        element: <Posts />
      },
      {
        path: "posts/:id",
        element: <PostDetail />
      },
      {
        path: "albums",
        element: <Albums />
      }
    ]
  }
]);

