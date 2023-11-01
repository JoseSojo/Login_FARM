import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvide } from './context/SessionContext.tsx';

// https://login-farm-2023.onrender.com/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvide>
    <App />
  </AuthProvide>,
)
