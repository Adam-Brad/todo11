import React from 'react';
import Todo from '../../interfaces/Todo';
import DeleteButton from '../DeleteButton/DeleteButton';
import ListItemText from '../ListItemText/ListItemText';
import ToggleCompleteButton from '../ToggleCompleteButton/ToggleCompleteButton';

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

    return (
        <>
            <ListItemText todo={todo} />
            <DeleteButton
                todo={todo}
                deleteFromList={deleteFromList}
            />
            <ToggleCompleteButton
                todo={todo}
                toggleComplete={toggleComplete}
            />
        </>
    );
}