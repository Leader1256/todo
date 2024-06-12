// src/redux/taskReducer.js
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, EDIT_TASK } from './taskActions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const saveToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasksAdd = [...state.tasks, { id: Date.now(), text: action.payload, completed: false }];
      saveToLocalStorage(newTasksAdd);
      return { ...state, tasks: newTasksAdd };
    case DELETE_TASK:
      const newTasksDelete = state.tasks.filter(task => task.id !== action.payload);
      saveToLocalStorage(newTasksDelete);
      return { ...state, tasks: newTasksDelete };
    case TOGGLE_TASK:
      const newTasksToggle = state.tasks.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      saveToLocalStorage(newTasksToggle);
      return { ...state, tasks: newTasksToggle };
    case EDIT_TASK:
      const newTasksEdit = state.tasks.map(task =>
        task.id === action.payload.id ? { ...task, text: action.payload.updatedTask } : task
      );
      saveToLocalStorage(newTasksEdit);
      return { ...state, tasks: newTasksEdit };
    default:
      return state;
  }
};
