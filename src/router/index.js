import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from '../pages/Home'
import File from '../pages/File'
import Discover from '../pages/Discover'
import Tool from '../pages/Tool'
import User from '../pages/User'
import NavMenu from '../components/nav-menu'
import NavBar from '../components/nav-bar'

export default function routerConfig() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/file" component={File} />
        <Route path="/discover" component={Discover} />
        <Route path="/tool" component={Tool} />
        <Route path="/user" component={User} />
        <Redirect from="/" to="/file" />
      </Switch>
      <NavMenu />
    </BrowserRouter>
  )
}