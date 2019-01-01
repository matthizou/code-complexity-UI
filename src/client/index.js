import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
// import { IntlProvider, addLocaleData } from 'react-intl'
// import en from 'react-intl/locale-data/en'
// import es from 'react-intl/locale-data/es'
import 'minireset.css/minireset.css'

import { configureStore } from './common/configureStore'
import { theme } from './style/theme'
import { BrowserRouter } from 'react-router-dom'
import { App } from './components/App'

const store = configureStore()
// addLocaleData([...en, ...es])

const GlobalStyle = createGlobalStyle`
  body {
    color: red;
    background-color: #DDD;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <React.Fragment>
          <App />
          <GlobalStyle />
        </React.Fragment>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
