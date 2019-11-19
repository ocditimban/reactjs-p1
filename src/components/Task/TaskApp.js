import React, { Component } from 'react';
import Control from './Control';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import * as actions from './../../actions/index';
import { connect } from 'react-redux';

var randomstring = require("randomstring");

class TaskApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: true,
      isEditForm: false,
      taskEditing: []
    };

    this.onToggleForm = this.onToggleForm.bind(this);
    this.onGenerateTask = this.onGenerateTask.bind(this);
  }

  onGenerateTask() {
    this.props.onGenerateTask();
  }

  onToggleForm () {
    this.setState({
      isDisplayForm : true
    });
  }

  render() {
    var showAdminForm = (this.state.isDisplayForm === true) 
      ? <TaskForm onCloseForm={this.onCloseForm} taskEditing={this.state.taskEditing}/> 
      : '';

    return (
      <div className = "container">
      <div className="text-center">
          <h1>Manager Task</h1>
      </div>
      <div className="row">
              <div className={(this.state.isDisplayForm === true) ? 'col-xs-4' : ''}>
                  { showAdminForm }
              </div>
              <div className={(this.state.isDisplayForm === true) ? 'col-xs-8' : 'col-xs-12'}>
                  <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                      <span className="fa fa-plus"></span>Add Task
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={this.onGenerateTask}>
                      <span className="fa fa-plus"></span>Generate Data
                  </button>
                  <Control />
                  <TaskList tasks={this.state.tasks} isEditForm={this.setState.isEditForm} />
              </div>
          </div>
      </div>
    );
  }
}

const myStateToProps = (state) => {
  return {
      tasks : state.tasks
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGenerateTask : () => {
      dispatch(actions.generateTask());
    }
  }
}

export default connect(myStateToProps, mapDispatchToProps) (TaskApp);

