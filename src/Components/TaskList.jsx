// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/taskActions';
import "./TaskList.css";
import { useState } from 'react';
const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
 
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  
  const handleToggle = (id) => {
    dispatch(toggleTask(id));
   
  };

  const handleEdit = (id) => {
    const newTask = prompt('Edit task:');
    if (newTask) {
      dispatch(editTask(id, newTask));
    }
  };
  
  return (
    <>
    <h1>List Of Tasks </h1>
    <ul>
  
      {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        <h2> {task.text}</h2>
         <button onClick={() => handleToggle(task.id)} className="comp">Complete</button>
          <button onClick={() => handleEdit(task.id)} className="edit">Edit </button> 
         <button onClick={() => handleDelete(task.id)} className="delete">Delete</button>
        </li> 
      ))}
      
    </ul>
   

  
    </>
  );
};

export default TaskList;
