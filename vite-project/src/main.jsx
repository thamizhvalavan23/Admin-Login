import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Appcontextprovider from './AdminLogin/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appcontextprovider>
    <App />
    </Appcontextprovider>
  </StrictMode>,
)
