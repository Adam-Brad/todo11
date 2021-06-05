import React, {useState} from 'react';
import Todo from '../../interfaces/Todo';
import styles from './ListItemText.module.css'
import {connect} from "react-redux";

interface ListItemTextProps {
    todo: Todo;
    handleEditing: (updatedTodo: Todo) => boolean;
}

function ListItemText(props: ListItemTextProps) {
    const [currentTask, setCurrentTask] = useState<string>(props.todo.text);
    const [isEditable, setIsEditable] = useState<boolean>(false);

    const {todo, handleEditing} = props;

    const toggleEditable = () => {
        setIsEditable(!isEditable);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(event.target.value);
    };

    const handleSave = () => {
        todo.text = currentTask;
        if (handleEditing(todo)) {
            toggleEditable();
        }
    }

    const itemClasses = todo.isCompleted ? `${styles.completed}` : ``;

    return (
        <>
            {
            isEditable ?
                <div>
                    <input data-testid={`${todo.text}-input`} onChange={handleChange} value={currentTask}/>
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
};

interface StoreState {
    list: Todo[]
}

const mapStateToProps = (state: StoreState) => ({
    list: state.list
})

export default connect(
    mapStateToProps,
    () => ({})
)(ListItemText);