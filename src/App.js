import React from "react";
import './CSS/App.css';
import {Switch,Route} from "react-router-dom";
import Main from "./Pages/Main";
import SignIn from "./Components/SignInform/SignIn";
import SignUp from "./Components/SignInform/SignUp";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/home" component={Main}/>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/sign-up" component={SignUp}/>
      </Switch>
    </>
  );
}

export default App;
