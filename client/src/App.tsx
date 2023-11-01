import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RouterNotProtect, RouterProtect } from './pages/RouterProtected'

const router = createBrowserRouter([
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
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
