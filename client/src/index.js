import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BaseLayout } from "./components/BaseLayout"
import * as serviceWorker from "./serviceWorker"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AllPlayers from "./components/AllPlayers"
import CreatePlayer from "./components/CreatePlayer"
import Favorites from "./components/Favorites"

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/" exact component={AllPlayers} />
        <Route path="/create-player" component={CreatePlayer} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
