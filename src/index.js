import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeContextProvider } from './context/ThemeContext'
import { DataContextProvider } from './context/DataContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
