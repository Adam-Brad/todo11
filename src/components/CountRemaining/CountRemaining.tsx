import React from 'react';
import Todo from "../../interfaces/Todo";
import {connect} from "react-redux";
import StoreState from "../../interfaces/StoreState"

interface CountRemainingProps {
  list: Todo[]
}

function CountRemaining({list}: CountRemainingProps) {

  const displayedRemainingCount = list.reduce((count: number, todo: Todo) => {
    if (!todo.isCompleted) {
      count++;
    }
    return count;
  }, 0);

  return (
    <p>Count of remaining todo's: {displayedRemainingCount} </p>
  );
}

const mapStateToProps = (state: StoreState) => ({
  list: state.list
});

export default connect(
  mapStateToProps,
  () =>({})
)(CountRemaining);