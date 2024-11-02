import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import StoreContextProvader from './contex/StoreContext'
import './index.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter >
      <StoreContextProvader>
          <App />
      </StoreContextProvader>
    </BrowserRouter>
  
)
