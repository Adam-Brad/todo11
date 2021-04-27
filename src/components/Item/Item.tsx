import React from 'react';
import Todo from '../../interfaces/Todo';

interface ItemProps {
    todo: Todo;
    index: number
    handleDeleteFromList: (index: number) => void;
}

export default function Item(props: ItemProps) {
    
    const { todo, index, handleDeleteFromList } = props;

    const deleteFromList = () =>  handleDeleteFromList(index);
    
    return (
        <>
            <li key={todo.id}>{todo.text}</li>
            <button>Mark</button>
            <button data-testid={`${todo.text}-delete`} onClick={deleteFromList}>Delete</button>
        </>
    );
}