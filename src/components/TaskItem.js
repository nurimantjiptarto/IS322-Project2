import React from 'react';
import './main.css'

export const columnTitles = ["todo", "in-progress", "review", "done"]
const TaskItem = props => {
  if (!props.columnIdx)
    console.log(props.task.title)
  return (
    <li className="list-group-item">
      <h3>{ props.task.title } </h3>
      <p>Id: { props.task.id } </p>
      <p>Type: { props.task.type } </p>
      { props.columnIdx !== 0 && 
        <button type="buttonLeft"
                onClick={() => props.onClick(props.task.id,columnTitles[props.columnIdx - 1])}
                className="btn btn-primary">
                  Move Back 
        </button>
      }
      { props.columnIdx !== 3 && 
        <button type="buttonRight"
                onClick={() => props.onClick(props.task.id,columnTitles[props.columnIdx + 1])}
                className="btn btn-primary">
                  Move Forward 
        </button>
      }
    </li>
  )
};

export default TaskItem;