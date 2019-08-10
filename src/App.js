import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import './App.css';
//导入组件
import login from "./login/login.js"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={login} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
