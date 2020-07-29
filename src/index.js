import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App.js'
import GlobalStyle from './components/globalStyle/GlobalStyle.js'
import * as serviceWorker from './serviceWorker'
// import GlobalProvider from './context/globalContext'

ReactDOM.render(
  <React.StrictMode>
      {/* <GlobalProvider> */}
        <App />
        <GlobalStyle />
      {/* </GlobalProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
)


serviceWorker.register();
