import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './../actions/todoActionTypes'

const initialState = {
    todos: [
        {id: 0, text: 'Buy Milk', completed: false},
        {id: 1, text: 'Buy Bread', completed: false},
        {id: 2, text: 'Wash Car', completed: true},
    ],
    filter: 'SHOW_ALL'
}

const addTodo = (todos, action) => {
    const { id, text } = action

    // Return a new list of Todos by spreading the old list and adding the new item to the end
    return [
        ...todos,
        {
            id: id,
            text: text,
            completed: false
        }
    ]
}

const toggleTodo = (todos, action) => {
    const { id } = action
    return todos.map(todo =>
        (todo.id === id)
            ? {...todo, completed: !todo.completed}
            : todo
    )
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_TODO:
            const todos = addTodo(state.todos, action)
            return Object.assign({}, state, {todos})
        case TOGGLE_TODO:
            const updatedTodos = toggleTodo(state.todos, action)
            return Object.assign({}, state, {todos: updatedTodos})
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {filter: action.filter})
        default:
            return state
    }
}


export const getVisibleTodos = state => {
    const {todos, filter} = state.todos

    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

export const getVisibilityFilter = state => {
    return state.todos.filter
}

export default reducer