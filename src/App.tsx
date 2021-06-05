import React, {useState} from 'react';
// import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Todo from "./interfaces/Todo";
import Input from "./components/Input/Input";
import List from './components/List/List';
// import checkForBlankError from "./errorHandlingService/checkForBlankError";
// import checkForDuplicateCreate from "./errorHandlingService/checkForDuplicateCreate";
import checkForDuplicateEdit from "./errorHandlingService/checkForDuplicateEdit";
import DeleteCompletedButton from "./components/DeleteCompletedButton/DeleteCompletedButton";
import {connect} from "react-redux";

function App() {
    const [list, setList] = useState<Todo[]>([]);

    const handleEditing = (updatedTodo: Todo) => {
        if (checkForDuplicateEdit(updatedTodo, list)) {
            return false;
        }

        const listAfterEditing = list.map((todo: Todo) => {
            if (updatedTodo.id === todo.id) {
                todo.text = updatedTodo.text;
            }
            return todo;
        });

        setList(listAfterEditing);
        return true;
    };

    const handleDeleteAllCompleted = () => {
        const listAfterDeleteAllCompleted = list.filter(todo => {
            if (todo.isCompleted === false) {
                return todo;
            }
        });
        setList(listAfterDeleteAllCompleted);
    };

    return (
    <div className="App">
        <h1>Typescript Todo #11</h1>
        <Input />
        <List
            handleEditing={handleEditing}
        />
        <div>
            <DeleteCompletedButton handleDeleteAllCompleted={handleDeleteAllCompleted} />
        </div>
    </div>
  );
}

export const AppContainer = connect(
    null,
    () => ({})
)(App);
