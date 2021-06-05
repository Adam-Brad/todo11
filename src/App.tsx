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

    // const handleAddToList = (task: string) => {
    //     if (checkForBlankError(task) && checkForDuplicateCreate(list, task)){
    //         const todoToAdd: Todo = {
    //             text: task,
    //             isCompleted: false,
    //             id: uuidv4()
    //         }
    //         setList([...list, todoToAdd]);
    //     }
    // };
    
    const handleDeleteFromList = (index: number) => {
        const listAfterDelete = list.filter((todo: Todo, i: number) => i !== index);
        setList(listAfterDelete);
    }

    const handleToggleComplete = (index: number) => {
        const listAfterToggleComplete = list.map((todo: Todo, i: number) => {
            if (i === index) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
        setList(listAfterToggleComplete);
    };

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
            handleDeleteFromList={handleDeleteFromList}
            handleToggleComplete={handleToggleComplete}
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
