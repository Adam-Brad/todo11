import React from 'react';
import Todo from '../../interfaces/Todo';
import Item from '../Item/Item';
import {connect} from "react-redux";

interface ListProps {
  list: Todo[];
}

function List(props: ListProps) {

  const {list} = props;

  const displayedList = list.map((todo: Todo) => (
    <Item
      todo={todo}
    />
  ));

  return (
    <>
      {displayedList}
    </>
  );
}

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