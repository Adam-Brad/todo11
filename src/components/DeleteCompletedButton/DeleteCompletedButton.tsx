import React from "react";

interface DeleteCompletedButtonProps {
    handleDeleteAllCompleted: () => void;
}

export default function DeleteCompletedButton(props: DeleteCompletedButtonProps) {

    const { handleDeleteAllCompleted } = props;

    return (
        <button data-test-id="delete-all-completed" onClick={handleDeleteAllCompleted}>Delete All Completed</button>

    )
}