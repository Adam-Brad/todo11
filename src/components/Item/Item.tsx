import React from 'react';
import Todo from '../../interfaces/Todo';
import ToggleCompleteButton from '../ToggleCompleteButton/ToggleCompleteButton';
import styles from './Item.module.css';

interface ItemProps {
    todo: Todo;
    index: number
    handleDeleteFromList: (index: number) => void;
    handleToggleComplete: (index: number) => void;
}

export default function Item(props: ItemProps) {
    
    const { todo, index, handleDeleteFromList, handleToggleComplete } = props;

    const deleteFromList = () =>  handleDeleteFromList(index);

    const toggleComplete = () => handleToggleComplete(index);

    const itemClasses = todo.isCompleted ? `${styles.completed}` : ``;

    return (
        <>
            <li className={itemClasses} key={todo.id}>{todo.text}</li>
            <button>Mark</button>
            <button data-testid={`${todo.text}-delete`} onClick={deleteFromList}>Delete</button>
            <ToggleCompleteButton todo={todo} toggleComplete={toggleComplete} />
        </>
    );
}