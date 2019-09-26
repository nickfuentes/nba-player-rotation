import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BaseLayout } from "./components/BaseLayout"
import * as serviceWorker from "./serviceWorker"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AllPlayers from "./components/AllPlayers"
import CreatePlayer from "./components/CreatePlayer"
import RotationBuilder from "./components/RotationBuilder"

import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./store/reducer"

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <BaseLayout>
        <Switch>
          <Route path="/" exact component={AllPlayers} />
          <Route path="/rotation-builder" component={RotationBuilder} />
          <Route path="/create-player" component={CreatePlayer} />
        </Switch>
      </BaseLayout>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
