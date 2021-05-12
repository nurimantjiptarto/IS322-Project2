import React from 'react';

import TaskItem from './TaskItem';


class TaskList extends React.Component {

  
  markDone = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let taskList = this.props.tasks;
    taskList.splice(taskIndex, 1);
    this.props.onUpdateTaskList(taskList);
  }

  /*
  sendBack = (task) => {
    let taskItem = this.setState(task);
    const taskColumn = this.props.tasks.column;
    if (taskColumn == "in-progress"){
      on
      console.log(taskItem.column)
    }
    
  }
  */



  render() {
    const todoItems = this.props.tasks.filter(task => task.column === 'todo')
      .map(task => {
        return <TaskItem task={task} key={task.id} markDone={this.markDone}  />
      });

    const inprogressItems = this.props.tasks.filter(task => task.column === 'in-progress')
      .map(task => {
        return <TaskItem task={task} key={task.id} markDone={this.markDone}  />
      });

    const reviewItems = this.props.tasks.filter(task => task.column === 'review')
      .map(task => {
        return <TaskItem task={task} key={task.id}markDone={this.markDone}  />
      });

    const doneItems = this.props.tasks.filter(task => task.column === 'done')
      .map(task => {
        return <TaskItem task={task} key={task.id} markDone={this.markDone} />
      });

    return (
      
      <ul className="task-list list-group">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-xs-12" id="toDo">
            <h2>Todo</h2>
            { todoItems }
          </div>
          <div class="col-lg-3 col-xs-12" id="inProgress">
            <h2>In Progress</h2>
            { inprogressItems }
          </div>
          <div class="col-lg-3 col-xs-12" id="review">
            <h2>Review</h2>
            { reviewItems }
          </div>
          <div class="col-lg-3 col-xs-12" id="done">
            <h2>Done</h2>
            { doneItems }
          </div>
        </div>
      </div>
      </ul>
      

    )
  }
}

export default TaskList;

    