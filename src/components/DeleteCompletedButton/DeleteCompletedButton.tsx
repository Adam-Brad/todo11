import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";

interface DeleteCompletedButtonProps {
  handleDeleteAllCompleted: () => void;
}

function DeleteCompletedButton(props: DeleteCompletedButtonProps) {

  const {handleDeleteAllCompleted} = props;

  return (
    <button data-test-id="delete-all-completed" onClick={handleDeleteAllCompleted}>Delete All Completed</button>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleDeleteAllCompleted: () => dispatch({
    type: 'DELETE ALL COMPLETED'
  })
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteCompletedButton);
