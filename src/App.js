import React, { PureComponent } from 'react'
import RouterConfig from './router'
import store from './store'
import { Provider } from 'react-redux'

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <RouterConfig />
      </Provider>
    )
  }
}
