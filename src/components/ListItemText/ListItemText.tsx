import React, {useState} from 'react';
import Todo from '../../interfaces/Todo';
import styles from './ListItemText.module.css'

interface ListItemTextProps {
    todo: Todo;
    handleEditing: (updatedTodo: Todo) => void;
}

export default function ListItemText(props: ListItemTextProps) {
    const [currentTask, setCurrentTask] = useState<string>(props.todo.text);
    const [isEditable, setIsEditable] = useState<boolean>(false);

    const {todo, handleEditing} = props;

    const toggleEditable = () => setIsEditable(!isEditable);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(event.target.value);
    };

    const handleSave = () => {
        todo.text = currentTask;
        handleEditing(todo);
        toggleEditable();
    }

    const itemClasses = todo.isCompleted ? `${styles.completed}` : ``;

    return (
        <>
            {
            isEditable ?
                <div>
                    <input data-testid={`${todo.text}-input`} onChange={handleChange} value={todo.text}/>
                    <button data-testid={`${todo.text}-save`} onClick={handleSave}>Click to Save</button>
                </div>
                :
                <>
                    <li className={itemClasses} key={todo.id}>{todo.text}</li>
                    <button data-testid={`${todo.text}-edit`} onClick={toggleEditable}>Click to edit</button>
                </>
            }
        </>
    );
}