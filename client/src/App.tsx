import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { RouterNotProtect, RouterProtect } from './pages/RouterProtected';
import { BasciLayout } from './layouts/BasicLayout';
import { InitPage } from './pages/Init';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { ProfilePage } from './pages/Profile';
import { HomePage } from './pages/Home';

/*const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterNotProtect />,
    children: [
      {
        path: '/',
        element: <h1>Index</h1>
      },
      {
        path: '/login',
        element: <h1>Login</h1>
      },{
        path: '/register',
        element: <h1>Register</h1>
      }
    ]
  },
  {
    path: '/',
    element: <RouterProtect />,
    children: [
      {
        path:'/profile',
        element: <h2>Profile</h2>
      }
    ]
  }
])*/

function App() {
  
  return (
    <BasciLayout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InitPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </BasciLayout>
  )
}

export default App
