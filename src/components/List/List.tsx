import React from 'react';
import Todo from '../../interfaces/Todo';
import Item from '../Item/Item';
import {connect} from "react-redux";

interface ListProps {
    list: Todo[];
    handleToggleComplete: (index: number) => void;
    handleEditing: (updatedTodo: Todo) => boolean;
}

function List(props: ListProps) {

    const { list, handleToggleComplete, handleEditing } = props;

    const displayedList = list.map((todo: Todo, index: number) => (
        <Item
            todo={todo}
            index={index}
            handleToggleComplete={handleToggleComplete}
            handleEditing={handleEditing}
        />
    ));
    
    return (
        <>
            {displayedList}
        </>
    );
};

interface StoreState {
    list: Todo[];
}

const mapStateToProps = (state: StoreState) => ({
    list: state.list
})

export default connect(
    mapStateToProps,
    () => ({})
)(List);