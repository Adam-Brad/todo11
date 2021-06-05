
const initialState = {
    list: []
}

interface StoreState {
    list: string[]
}

interface AddTodoAction {
    type: string;
    payload: string;
}

export const listReducer = (state: StoreState = initialState, action: AddTodoAction): StoreState => {
    switch (action.type) {
        case 'ADD':
            return {
                list: [...state.list, action.payload]
            }
        default:
            return state
    }
};