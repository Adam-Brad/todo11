import React from 'react';
import './App.css';
import Input from "./components/Input/Input";
import List from './components/List/List';
import DeleteCompletedButton from "./components/DeleteCompletedButton/DeleteCompletedButton";
import {connect} from "react-redux";

function App() {
    // const handleEditing = (updatedTodo: Todo) => {
    //     if (checkForDuplicateEdit(updatedTodo, list)) {
    //         return false;
    //     }
    //
    //     const listAfterEditing = list.map((todo: Todo) => {
    //         if (updatedTodo.id === todo.id) {
    //             todo.text = updatedTodo.text;
    //         }
    //         return todo;
    //     });
    //
    //     setList(listAfterEditing);
    //     return true;
    // };

    return (
    <div className="App">
        <h1>Typescript Todo #11</h1>
        <Input />
        <List />
        <div>
            <DeleteCompletedButton />
        </div>
    </div>
  );
}

export const AppContainer = connect(
    null,
    () => ({})
)(App);
