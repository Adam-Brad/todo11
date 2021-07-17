import React from 'react';
import './App.css';
import Input from "./components/Input/Input";
import List from './components/List/List';
import DeleteCompletedButton from "./components/DeleteCompletedButton/DeleteCompletedButton";
import {connect} from "react-redux";
import CountRemaining from "./components/CountRemaining/CountRemaining";

export function App() {
  return (
    <div className="App">
      <h1>Typescript Todo #11</h1>
      <CountRemaining />
      <Input/>
      <List/>
      <div>
        <DeleteCompletedButton/>
      </div>
    </div>
  );
}

export default connect(
  null,
  () => ({})
)(App);
