import React from "react";
import './CSS/App.css';
import {Switch,Route} from "react-router-dom";
import Main from "./Pages/Main";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Main}/>
      </Switch>
    </>
  );
}

export default App;
