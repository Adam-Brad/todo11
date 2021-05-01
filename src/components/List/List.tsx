import React from 'react';
import Todo from '../../interfaces/Todo';
import Item from '../Item/Item';

interface ListProps {
    list: Todo[];
    handleDeleteFromList: (index: number) => void;
    handleToggleComplete: (index: number) => void;
    handleEditing: (updatedTodo: Todo) => void;
}

export default function List(props: ListProps) {

    const { list, handleDeleteFromList, handleToggleComplete, handleEditing } = props;

    const displayedList = list.map((todo: Todo, index: number) => (
        <Item
            todo={todo}
            index={index}
            handleDeleteFromList={handleDeleteFromList}
            handleToggleComplete={handleToggleComplete}
            handleEditing={handleEditing}
        />
    ));
    
    return (
        <>
            {displayedList}
        </>
    );
}