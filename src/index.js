import React from 'react'
import { render } from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './root/Root'
import { browserHistory } from 'react-router'
import configureStore from './store/configureStore'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

const id = window.WEATHER_WIDGET_CONFIG.selectorID
render(
  <Root store={store} history={history} />,
  document.getElementById(id)
)
