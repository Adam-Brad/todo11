import React from 'react';
import Todo from '../../interfaces/Todo';
import Item from '../Item/Item';

interface ListProps {
    list: Todo[];
    handleDeleteFromList: (index: number) => void;
}

export default function List(props: ListProps) {

    const { list, handleDeleteFromList } = props;

    const displayedList = list.map((todo: Todo, index: number) => (
        <Item
            todo={todo}
            index={index}
            handleDeleteFromList={handleDeleteFromList}
        />
        // <>
        //     <li key={todo.id}>{todo.text}</li>
        //     <button>Mark</button>
        //     <button>Delete</button>
        // </>
    ));
    
    return (
        <>
            {displayedList}
        </>
    );
}