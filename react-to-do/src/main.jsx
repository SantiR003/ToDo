import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './Components/Tareas.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
