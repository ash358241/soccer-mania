import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/team/:id">
          <TeamDetails></TeamDetails>
        </Route>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
