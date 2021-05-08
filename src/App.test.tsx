import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

const addATodo = (input: HTMLElement, text: string, button: HTMLElement) => {
    fireEvent.change(input, {target: {value: text}});
    fireEvent.click(button);
};

test('adding text to the input and clicking the add button clears the input and renders the list item in the DOM', () => {
    const {getByText, getByLabelText} = render(<App/>);
    const input = getByLabelText("Add a todo to the list");
    const addButton = getByText("Click to add a Todo");

    addATodo(input, "get bread", addButton);

    expect(input.innerHTML).toBe('');
    expect(getByText("get bread")).toBeInTheDocument();
});

test('clicking a todo\'s delete button removes that text from the list', () => {
    const {getByText, getByTestId, getByLabelText, queryByText} = render(<App/>);
    const input = getByLabelText("Add a todo to the list");
    const addButton = getByText("Click to add a Todo");

    addATodo(input, 'get bread', addButton);
    fireEvent.click(getByTestId('get bread-delete'));

    expect(queryByText('get bread')).not.toBeInTheDocument();
});

test('clicking a todo\'s delete button doesn\'t affect other todos', () => {
    const {getByText, getByTestId, getByLabelText, queryByText} = render(<App/>);
    const input = getByLabelText("Add a todo to the list");
    const addButton = getByText("Click to add a Todo");

    addATodo(input, 'get bread', addButton);
    addATodo(input, 'get cheese', addButton);
    addATodo(input, 'get eggs', addButton);
    fireEvent.click(getByTestId('get cheese-delete'));

    expect(queryByText('get cheese')).not.toBeInTheDocument();
    expect(getByText('get bread')).toBeInTheDocument();
    expect(getByText('get eggs')).toBeInTheDocument();
});

test('clicking a todo\'s mark button toggles on the classname with the strikethrough styling and renders correct button text', () => {
    const {getByLabelText, getByText, getByTestId} = render(<App/>);
    const input = getByLabelText('Add a todo to the list');
    const addButton = getByText('Click to add a Todo');

    addATodo(input, 'get bread', addButton);
    expect(getByText('get bread')).not.toHaveClass('completed');
    fireEvent.click(getByTestId('get bread-toggle'));

    expect(getByText('get bread')).toHaveClass('completed');
    expect(getByTestId('get bread-toggle').innerHTML).toBe('Unmark');
});

test('clicking a todo\'s mark button twice toggles on the classname on and back off and renders correct button text', () => {
    const {getByLabelText, getByText, getByTestId} = render(<App/>);
    const input = getByLabelText('Add a todo to the list');
    const addButton = getByText('Click to add a Todo');

    addATodo(input, 'get bread', addButton);
    fireEvent.click(getByTestId('get bread-toggle'));
    fireEvent.click(getByTestId('get bread-toggle'));

    expect(getByText('get bread')).not.toHaveClass('completed');
    expect(getByTestId('get bread-toggle').innerHTML).toBe('Mark');
});

test('clicking a todo\'s mark button doesn\'t affect other todos styling or button text', () => {
    const {getByLabelText, getByText, getByTestId} = render(<App/>);
    const input = getByLabelText('Add a todo to the list');
    const addButton = getByText('Click to add a Todo');

    addATodo(input, 'get bread', addButton);
    addATodo(input, 'get eggs', addButton);
    addATodo(input, 'get cheese', addButton);
    fireEvent.click(getByTestId('get eggs-toggle'));

    expect(getByText('get eggs')).toHaveClass('completed');
    expect(getByText('get bread')).not.toHaveClass('completed');
    expect(getByText('get cheese')).not.toHaveClass('completed');
});

test('editing and saving a todo replaces the old text', () => {
    const {getByLabelText, getByText, getByTestId, queryByText} = render(<App/>);
    const input = getByLabelText('Add a todo to the list');
    const addButton = getByText('Click to add a Todo');

    addATodo(input, 'get bread', addButton);
    fireEvent.click(getByTestId('get bread-edit'));
    addATodo(getByTestId('get bread-input'), 'get eggs', getByTestId('get bread-save'));

    expect(getByText('get eggs')).toBeInTheDocument();
    expect(queryByText('get bread')).not.toBeInTheDocument();
});

test('editing and saving a todo doesn\'t affect other todos)', () => {
    const {getByLabelText, getByText, getByTestId, queryByText} = render(<App/>);
    const input = getByLabelText('Add a todo to the list');
    const addButton = getByText('Click to add a Todo');

    addATodo(input, 'get bread', addButton);
    addATodo(input, 'get eggs', addButton);
    addATodo(input, 'get meat', addButton);
    fireEvent.click(getByTestId('get bread-edit'));
    addATodo(getByTestId('get bread-input'), 'get cheese', getByTestId('get bread-save'));

    expect(getByText('get cheese')).toBeInTheDocument();
    expect(getByText('get eggs')).toBeInTheDocument();
    expect(getByText('get meat')).toBeInTheDocument();
    expect(queryByText('get bread')).not.toBeInTheDocument();
});

test('creating a blank todo throws an error', () => {
    const {getByLabelText, getByText} = render(<App/>);
    const input = getByLabelText('Add a todo to the list');
    const addButton = getByText('Click to add a Todo');
    window.alert = jest.fn();

    addATodo(input, '', addButton);

    expect(window.alert).toHaveBeenCalledTimes(1);
});

test('creating a duplicate todo throws an error', () => {
    const {getByLabelText, getByText} = render(<App/>);
    const input = getByLabelText('Add a todo to the list');
    const addButton = getByText('Click to add a Todo');
    window.alert = jest.fn();

    addATodo(input, 'get bread', addButton);
    addATodo(input, 'get bread', addButton);

    expect(window.alert).toHaveBeenCalledTimes(1);
});
