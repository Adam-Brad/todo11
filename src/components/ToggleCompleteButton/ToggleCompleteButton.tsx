import React from 'react';
import Todo from '../../interfaces/Todo';

interface ToggleCompleteButtonProps {
    todo: Todo;
    toggleComplete: () => void;
}

export default function ToggleCompleteButton(props: ToggleCompleteButtonProps) {

    const { todo, toggleComplete } = props;

    const toggleCompleteButtonText = todo.isCompleted ? `Unmark` : `Mark`;

    return (
        <button data-testid={`${todo.text}-toggle`} onClick={toggleComplete}>{toggleCompleteButtonText}</button>
    );
}