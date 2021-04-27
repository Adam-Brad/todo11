import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Todo from "./interfaces/Todo";
import Input from "./components/Input/Input";
import List from './components/List/List';

function App() {
    const [list, setList] = useState<Todo[]>([]);

    const handleAddToList = (task: string) => {
        const todoToAdd: Todo = {
            text: task,
            isCompleted: false,
            id: uuidv4()
        }
        setList([...list, todoToAdd]);
    };
    
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

    const handleSave = (task: string, index: number) => {
        const listAfterSave = list.map((todo: Todo, i: number) => {
           if (i === index) {
               todo.text = task;
           }
           return todo;
        });
        setList(listAfterSave);
    }

    return (
    <div className="App">
        <h1>Typescript Todo #11</h1>
        <Input handleAddToList={handleAddToList} />
        <List 
            list={list}
            handleDeleteFromList={handleDeleteFromList}
            handleToggleComplete={handleToggleComplete}
            handleSave={handleSave}
        />
    </div>
  );
}

export default App;
