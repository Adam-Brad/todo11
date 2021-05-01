import React from 'react';
import Todo from '../../interfaces/Todo';

interface DeleteButtonProps {
    todo: Todo;
    deleteFromList: () => void;
}

export default function DeleteButton(props: DeleteButtonProps) {

    const { todo, deleteFromList } = props;

    return (
        <button data-testid={`${todo.text}-delete`} onClick={deleteFromList}>Delete</button>
    );
}