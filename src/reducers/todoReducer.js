import {ADD_TODO, REMOVE_TODO, CLEAR_TODO} from './actionTypes';

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const {id, data} = action.payload;
      return {...state, todos: [...state.todos, {id: id, data: data}]};

    case REMOVE_TODO:
      const newL = state.todos.filter(todo => {
        todo.id !== action.payload.id;
      });

      return {
        ...state,
        todos: newL,
      };

    case CLEAR_TODO:
      return {todos: []};
    default:
      return state;
  }
};
