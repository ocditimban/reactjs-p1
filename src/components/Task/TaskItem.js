
import React, { Component } from 'react';

// import TaskForm from './components/TaskForm';
// import Control from './components/Control';
// import TaskList from './components/TaskList';


class TaskItem extends Component {

  constructor(props) {
    super(props);
    this.onUpdateStatus = this.onUpdateStatus.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
    this.onUpdateTask = this.onUpdateTask.bind(this);
  }

  onUpdateStatus() {
    this.props.callUpdateStatus(this.props.index);
  }

  onDeleteTask() {
    this.props.callDeleteTask(this.props.index);
  }

  onUpdateTask() {
    this.props.callUpdateTask(this.props.index);
  }

  render() {
    let {index, task} = this.props;
    return (
        <tr>
            <td>{index}</td>
            <td>{task.name}</td>
            <td className="text-center">
                <span className="label label-danger" onMouseEnter={this.onUpdateStatus}>{task.status === true ? 'Active' : 'Hide'}</span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning" onClick={this.onUpdateTask}>
                    <span className="fa fa-pencil mr-5"></span>Edit
                </button>
                <br/>
                <button type="button" className="btn btn-danger" onClick={this.onDeleteTask}>
                    <span className="fa fa-trash mr-5"></span>Remove
                </button>
            </td>
        </tr>
    );
  }
}

export default TaskItem;
