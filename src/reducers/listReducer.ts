import Todo from "../interfaces/Todo";

const initialState = {
    list: []
}

interface StoreState {
    list: Array<Todo>
}

interface AddTodoAction {
    type: string;
    payload: Todo;
}

interface ToggleCompleteAction {
    type: string;
    payload: string;
}

export const listReducer = (state: StoreState = initialState, action: AddTodoAction | ToggleCompleteAction): StoreState => {
    switch (action.type) {
        case 'ADD':
            return {
                list: [...state.list, <Todo>action.payload]
            }
        case 'DELETE':
            const listAfterDelete = state.list.filter((todo: Todo) => todo.id !== (<Todo>action.payload).id);
            return {
                list: listAfterDelete
            }
        case 'TOGGLE COMPLETE' :
            const listAfterToggleComplete = state.list.map((todo: Todo) => {
                if (todo.id === action.payload) {
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
            });
            return {
                list: listAfterToggleComplete
            }
        case 'DELETE ALL COMPLETED' :
            const listAfterDeleteAllCompleted = state.list.filter(todo => {
                if (todo.isCompleted === false) {
                    return todo;
                }
            });
            if (listAfterDeleteAllCompleted.length === state.list.length) {
                alert('No completed todos to delete');
                return state;
            }
            return {
                list: listAfterDeleteAllCompleted
            }
        case 'EDIT' :
                const listAfterEditing = state.list.map((todo: Todo) => {
                    if ((<Todo>action.payload).id === todo.id) {
                        todo.text = (<Todo>action.payload).text;
                    }
                    return todo;
                });

                return {
                    list: listAfterEditing
                }
        default:
            return state
    }
};