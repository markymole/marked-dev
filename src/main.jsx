import React from 'react'
import ReactDOM from 'react-dom/client'

import { Context } from './provider/Context.jsx'
import { PortfolioProvider } from './provider/PortfolioProvider.jsx'
import App from './App.jsx'
import Main from './sections/main'

import './index.css'


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PortfolioProvider>
        <Context>
          <BrowserRouter>
            <Routes>
              <Route index element={<App />}></Route>
            </Routes>
          </BrowserRouter>
        </Context>
      </PortfolioProvider>
  </React.StrictMode>,
)
