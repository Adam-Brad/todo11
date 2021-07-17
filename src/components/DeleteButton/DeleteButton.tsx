import React from 'react';
import Todo from '../../interfaces/Todo';
import {connect} from "react-redux";
import {Dispatch} from "redux";

interface DeleteButtonProps {
  todo: Todo;
  deleteFromList: (todo: Todo) => void;
}

interface AddTodoAction {
  type: string;
  payload: string;
}

function DeleteButton(props: DeleteButtonProps) {

  const {todo, deleteFromList} = props;

  function handleDelete() {
    deleteFromList(todo);
  }

  return (
    <button data-testid={`${todo.text}-delete`} onClick={handleDelete}>Delete</button>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<AddTodoAction>) => ({
  deleteFromList: (todo: Todo) => dispatch({
    type: 'DELETE',
    payload: todo.id
  })
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteButton);