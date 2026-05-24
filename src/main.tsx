import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'


createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>
)
