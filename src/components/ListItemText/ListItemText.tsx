import React, { useState } from 'react';
import Todo from '../../interfaces/Todo';
import styles from './ListItemText.module.css'

interface ListItemTextProps {
    todo: Todo;
    index: number;
    handleSave: (task: string, index: number) => void;
}

export default function ListItemText(props: ListItemTextProps) {
    const [currentTask, setCurrentTask] = useState<string>('');
    const [isEditable, setIsEditable] = useState<boolean>(false);

    const { todo, index, handleSave} = props;

    const toggleEditable = () => setIsEditable(!isEditable);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(event.target.value);
    }

    const saveUpdatedTodo = () => {
        handleSave(currentTask, index);
        setIsEditable(false);
    }

    const itemClasses = todo.isCompleted ? `${styles.completed}` : ``;

    return (
        isEditable ?
            <div>
                <input data-testid={`${todo.text}-input`} onChange={handleChange} value={currentTask} />
                <button data-testid={`${todo.text}-save`} onClick={saveUpdatedTodo}>Save</button>
            </div>
            :
            <>
                <li className={itemClasses} key={todo.id}>{todo.text}</li>
                <button data-testid={`${todo.text}-edit`} onClick={toggleEditable}>Edit</button>
            </>

    );
}