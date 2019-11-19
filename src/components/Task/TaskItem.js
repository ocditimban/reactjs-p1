
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

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
    this.props.onUpdateStatus(this.props.index);
  }

  onDeleteTask() {
    this.props.onDeleteTask(this.props.index);
  }

  onUpdateTask() {
    this.props.onUpdateTask(this.props.index, this.props.task);
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

const myStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus : (index) => {
      dispatch(actions.updateStatus(index));
    },
    onDeleteTask : (index) => {
      dispatch(actions.deleteTask(index));
    },
    onUpdateTask : (index, task) => {
      dispatch(actions.updateTask(index, task));
    }
  }
}

export default connect(myStateToProps, mapDispatchToProps) (TaskItem);
