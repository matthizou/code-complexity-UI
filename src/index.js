import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'
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

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)

// Global style: Use injectGlobal``  from styled-components
