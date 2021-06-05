import React from "react";
// import {connect} from "react-redux";
// import {Dispatch} from "redux";

// interface AddTodoAction {
//     type: string;
//     payload: string;
// }

interface DeleteCompletedButtonProps {
    handleDeleteAllCompleted: () => void;
}

export default function DeleteCompletedButton(props: DeleteCompletedButtonProps) {

    const { handleDeleteAllCompleted } = props;

    return (
        <button data-test-id="delete-all-completed" onClick={handleDeleteAllCompleted}>Delete All Completed</button>

    );
};
//
// const mapDispatchToProps = (dispatch: Dispatch<AddTodoAction>) => ({
//     handleDeleteAllCompleted:
// })
//
// export default connect(
//     null,
//     mapDispatchToProps
// )(DeleteCompletedButton);