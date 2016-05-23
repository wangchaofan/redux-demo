import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionType.js';

const initialState = [{
  text: 'use redux',
  completed: false,
  id: 0
}];

export default function todos(state = initialState, action) {
  switch(action) {
    case ADD_TODO: 
      return [
        {
          id: state.reduce
        }
      ]
  }
}