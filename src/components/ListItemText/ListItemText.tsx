import React from 'react';
import Todo from '../../interfaces/Todo';
import styles from './ListItemText.module.css'

interface ListItemTextProps {
    todo: Todo;
}

export default function ListItemText(props: ListItemTextProps) {

    const { todo } = props;

    const itemClasses = todo.isCompleted ? `${styles.completed}` : ``;

    return (
        <li className={itemClasses} key={todo.id}>{todo.text}</li>
    );
}