import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import store from './store/store.ts'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>     
    </Provider> 
  </React.StrictMode>,
)
