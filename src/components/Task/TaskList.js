import React, { Component } from 'react';

import TaskForm from './TaskForm';
import Control from './Control';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TaskList extends Component {

  constructor(props) {
    super(props);
  }

  showTaskList(tasks) {
    let result = tasks.map((task, index) => {
        return <TaskItem 
            key={task.id} 
            index={index} 
            task={task}
        />
    });
    return result;
  }

  render() {
    var {tasks} = this.props;

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
                { this.showTaskList(tasks) }
                
            </tbody>
        </table>
    );
  }
}

const myStateToProps = (state) => {
    return {
        tasks : state.tasks
    }
};

export default connect(myStateToProps, null) (TaskList);
