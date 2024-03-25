import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { States } from './States.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>   
  <States>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </States>
  </React.StrictMode>,
)
