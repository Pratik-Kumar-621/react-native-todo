import {ADD_TODO, REMOVE_TODO, CLEAR_TODO} from './actionTypes';

export const addTodo = data => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: {
      id: id,
    },
  };
};

export const clearTodo = () => {
  return {
    type: CLEAR_TODO,
  };
};
