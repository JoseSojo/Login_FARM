import { RouterNotProtect, RouterProtect } from './pages/RouterProtected';
import { BasciLayout } from './layouts/BasicLayout';
import { InitPage } from './pages/Init';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { ProfilePage } from './pages/Profile';
import { HomePage } from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterNotProtect />,
    children: [
      {
        path: '/',
        element: <InitPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },{
        path: '/register',
        element: <RegisterPage />
      }
    ]
  },
  {
    path: '/',
    element: <RouterProtect />,
    children: [
      {
        path:'/profile',
        element: <ProfilePage />
      },
      {
        path:'/home',
        element: <HomePage />
      }
    ]
  }
])

function App() {
  
  return (
    <BasciLayout>
      <RouterProvider router={router} />
    </BasciLayout>
  )
}

export default App
