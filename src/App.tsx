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

    return (
    <div className="App">
        <h1>Typescript Todo #11</h1>
        <Input handleAddToList={handleAddToList} />
        <List list={list} />
    </div>
  );
}

export default App;
