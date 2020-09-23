import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Aquas from "./components/Aquas";
import Navbar from "./shared/Navbar";
import AquaForm from "./components/AquaForm";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aquas" component={Aquas} />
        <Route exact path="/aquaform" component={AquaForm} />
      </Switch>
    </>
  );
};

export default App;
