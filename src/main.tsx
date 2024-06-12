import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/font/stylesheet.css'
import './assets/css/styled.css'
import 'virtual:uno.css'
import 'tippy.js/dist/tippy.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
