import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvide } from './context/SessionContext.tsx'
import { BrowserRouter } from 'react-router-dom'

// https://login-farm-2023.onrender.com/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvide>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvide>,
)
