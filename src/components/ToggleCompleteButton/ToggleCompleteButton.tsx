import React from 'react';
import Todo from '../../interfaces/Todo';
import {connect} from "react-redux";
import {Dispatch} from "redux";

interface ToggleCompleteButtonProps {
  todo: Todo;
  toggleComplete: (todo: Todo) => void;
}

function ToggleCompleteButton(props: ToggleCompleteButtonProps) {

  const {todo, toggleComplete} = props;

  const toggleCompleteButtonText = todo.isCompleted ? `Unmark` : `Mark`;

  const handleToggle = () => {
    toggleComplete(todo)
  }

  return (
    <button data-testid={`${todo.text}-toggle`} onClick={handleToggle}>{toggleCompleteButtonText}</button>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleComplete: (todo: Todo) => dispatch({
    type: 'TOGGLE COMPLETE',
    payload: todo.id
  })
});

export default connect(
  null,
  mapDispatchToProps
)(ToggleCompleteButton);