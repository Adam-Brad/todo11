import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

const addATodo = (input: HTMLElement, text: string, button: HTMLElement) => {
  fireEvent.change(input, {target: {value: text}});
  fireEvent.click(button);
};

test('adding text to the input and clicking the add button clears the input and renders the list item in the DOM', () => {
    const { getByText, getByLabelText } = render(<App />);
    const input = getByLabelText("Add a todo to the list");
    const addButton = getByText("Click to add a Todo");

     addATodo(input, "get bread", addButton);

     expect(input.innerHTML).toBe('');
     expect(getByText("get bread")).toBeInTheDocument();
});


