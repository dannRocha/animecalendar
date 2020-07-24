import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App.js'
import GlobalStyle from './components/globalStyle/GlobalStyle.js'
import * as serviceWorker from './serviceWorker'


ReactDOM.render(
  <React.StrictMode>
      <App />
      <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)


serviceWorker.register();
