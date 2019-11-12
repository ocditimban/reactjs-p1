import React, { Component } from 'react';

import TaskForm from './TaskForm';
import Control from './Control';
import TaskItem from './TaskItem';

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.callUpdateStatus = this.callUpdateStatus.bind(this);
    this.calDeleteTask = this.calDeleteTask.bind(this);
    this.callUpdateTask = this.callUpdateTask.bind(this);
  }

  callUpdateStatus(index) {
    this.props.tasks[index].status = !this.props.tasks[index].status;
    this.setState({
        tasks: this.props.tasks
    });

    localStorage.setItem('tasks', JSON.stringify(this.props.tasks));
  }

  calDeleteTask(index) {
    this.props.tasks.splice(index, 1);
    this.setState({
        tasks: this.props.tasks
    });

    localStorage.setItem('tasks', JSON.stringify(this.props.tasks));
  }

  callUpdateTask(index) {
      this.props.callUpdateTask(index);
  }


  showTaskList(tasks) {
    let result = tasks.map((task, index) => {
        return <TaskItem 
            key={task.id} 
            index={index} 
            task={task}
            callUpdateStatus={this.callUpdateStatus}
            callDeleteTask={this.calDeleteTask}
            callUpdateTask={this.callUpdateTask}
        />
    });
    return result;
  }

  render() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="text-center">Number</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">State</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            name="filterName"
                        />
                    </td>
                    <td>
                        <select
                            className="form-control"
                            name="filterStatus"
                        >
                            <option value={-1}>All</option>
                            <option value={0}>Hide</option>
                            <option value={1}>Active</option>
                        </select>    
                    </td>
                </tr>
                { this.showTaskList(this.props.tasks) }
                
            </tbody>
        </table>
    );
  }
}

export default TaskList;
