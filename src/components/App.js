import React from "react";
import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperties from "./AddProperty";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Properties />
        </Route>
        <Route exact path="/add-property">
          <AddProperties />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
