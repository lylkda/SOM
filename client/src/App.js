import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Students from "./pages/Students";
import Detail from "./pages/Detail";
import Logout from "./components/Logout";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Nominated from "./pages/Nominated";
import History from "./pages/History";
import Signup from "./pages/Signup";
import Login from "./pages/Signup/Login";
import Landing from "./pages/Landing";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Nav style={{color: "red"}}/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/nominated" component={Nominated} />
        <Route exact path="/nominate" component={Students} />
        <Route exact path="/history" component={History} />
        <Route exact path="/students/:id" component={Detail} />
        <Route exact path="/logout" component={Logout} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
