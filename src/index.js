import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App.js'
import GlobalStyle from './components/globalStyle/GlobalStyle.js'


ReactDOM.render(
  <React.StrictMode>
      <App />
      <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)
