import Todo from "../interfaces/Todo";
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    list: []
}

interface StoreState {
    list: Todo[]
}

interface AddTodoAction {
    type: string;
    payload: string;
}

export const listReducer = (state: StoreState = initialState, action: AddTodoAction): StoreState => {
    switch (action.type) {
        case 'ADD':
            const todoToAdd: Todo = {
                text: action.payload,
                isCompleted: false,
                id: uuidv4()
            }
            return {
                list: [...state.list, todoToAdd]
            }
        case 'DELETE':
            const listAfterDelete = state.list.filter((todo: Todo) => todo.id !== action.payload);
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
        default:
            return state
    }
};