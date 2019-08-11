import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import './App.css';
//导入axios拦截代码
// import "./config/httpInterceptors.js"
//导入组件
import login from "./login/login.js"
import Home from "./home/home.js"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={login} />
        <Route path="/home" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
