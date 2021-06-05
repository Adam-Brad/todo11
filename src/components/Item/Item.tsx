import React from 'react';
import Todo from '../../interfaces/Todo';
import DeleteButton from '../DeleteButton/DeleteButton';
import ListItemText from '../ListItemText/ListItemText';
import ToggleCompleteButton from '../ToggleCompleteButton/ToggleCompleteButton';

interface ItemProps {
    todo: Todo;
    handleEditing: (updatedTodo: Todo) => boolean;
}

export default function Item(props: ItemProps) {
    
    const { todo, handleEditing } = props;


    return (
        <>
            <ListItemText
                todo={todo}
                handleEditing={handleEditing}
            />
            <DeleteButton
                todo={todo}
            />
            <ToggleCompleteButton
                todo={todo}
            />
        </>
    );
}