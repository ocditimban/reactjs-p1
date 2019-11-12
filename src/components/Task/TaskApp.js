import React, { Component } from 'react';
import Control from './Control';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
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
    this.onSubmit = this.onSubmit.bind(this);
    this.onGenerateData = this.onGenerateData.bind(this);
    this.callUpdateTask = this.callUpdateTask.bind(this);
  }

  componentWillMount() {;
    if (localStorage && localStorage.getItem('tasks')) {
      this.setState({tasks: JSON.parse(localStorage.getItem('tasks'))});
    }
  }

  onGenerateData() {
    var tasks = [
      {
        id: randomstring.generate(),
        name: 'learn dev',
        state: true
      },
      {
        id: randomstring.generate(),
        name: 'swimming',
        state: true
      },
      {
        id: randomstring.generate(),
        name: 'sleep',
        state: true
      }
    ];

    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.setState({tasks: tasks});
  }

  onToggleForm () {
    this.setState({
      isDisplayForm : true,
      taskEditing: {
        index: 0,
        id: '',
        name: '',
        status: false
      }
    })
  }

  onSubmit(data) {
    if (!data.id) {
      data.id = randomstring.generate();
      this.state.tasks.push(data);
    }
    else {
      this.state.tasks[data.index] = {
        id: data.id,
        name: data.name,
        status: data.status
      }
      this.setState({
        taskEditing: {
          index: data.index,
          id: this.state.tasks[data.index].id,
          name: this.state.tasks[data.index].name,
          status: this.state.tasks[data.index].status
        }
      });
    }

    this.setState({
      tasks: this.state.tasks
    });

    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  callUpdateTask(index) {
    this.state.taskEditing = {
      index: index,
      id: this.state.tasks[index].id,
      name: this.state.tasks[index].name,
      status: this.state.tasks[index].status
    }

    this.setState({
      isDisplayForm: true,
      isEditForm: true,
      taskEditing: {
        index: index,
        id: this.state.tasks[index].id,
        name: this.state.tasks[index].name,
        status: this.state.tasks[index].status
      }
    });
  }

  render() {
    var showAdminForm = (this.state.isDisplayForm === true) 
      ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} task={this.state.taskEditing}/> 
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
                    onClick={this.onGenerateData}>
                      <span className="fa fa-plus"></span>Generate Data
                  </button>
                  <Control />
                  <TaskList tasks={this.state.tasks} isEditForm={this.setState.isEditForm} callUpdateTask={this.callUpdateTask} />
              </div>
          </div>
      </div>
    );
  }
}

export default TaskApp;
