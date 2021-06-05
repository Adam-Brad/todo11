import React from 'react';
import Todo from '../../interfaces/Todo';
import DeleteButton from '../DeleteButton/DeleteButton';
import ListItemText from '../ListItemText/ListItemText';
import ToggleCompleteButton from '../ToggleCompleteButton/ToggleCompleteButton';

interface ItemProps {
    todo: Todo;
    index: number;
    handleToggleComplete: (index: number) => void;
    handleEditing: (updatedTodo: Todo) => boolean;
}

export default function Item(props: ItemProps) {
    
    const { todo, index, handleToggleComplete, handleEditing } = props;

    const toggleComplete = () => handleToggleComplete(index);

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
                toggleComplete={toggleComplete}
            />
        </>
    );
}