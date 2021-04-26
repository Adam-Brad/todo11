import React from 'react';
import Todo from '../../interfaces/Todo';

interface ListProps {
    list: Todo[];
}

export default function List(props: ListProps) {

    const { list } = props;

    const displayedList = list.map((todo: Todo) => (
        <>
            <li key={todo.id}>{todo.text}</li>
            <button>Mark</button>
            <button>Delete</button>
        </>
    ));
    
    return (
        <>
            {displayedList}
        </>
    );
}