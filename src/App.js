import './App.css';
import React from "react";
import { useHistory, withRouter, Redirect } from "react-router-dom";


 function App() {

  let history = useHistory();

  function nameSubmit() {
    history.push("/Name");
  }

  function typeSubmit() {
    history.push("/Types");
  }

  return (
    <div className = "main-menu">
        <h1 className = "main-heading">What do you want to Search Pokemon Cards by?</h1>
        <div className = "controls">
            <button onClick = {nameSubmit} class = "buttons">Pokemon Name</button>
            <button onClick = {typeSubmit} class = "buttons">Pokemon Type</button>
        </div>
    </div>
  );
}

export default App;
