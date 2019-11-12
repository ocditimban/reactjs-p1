import React, { Component } from 'react';

class Control extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      index: '',
      id: '',
      name: '',
      status: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.task.index || nextProps.task.index === 0) {
      this.setState({
        index: nextProps.task.index,
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status,
      });
    }
  }

  onChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    if (name === 'status') {
      value = (value === 'true') ? true : false;
    }

    this.setState({
      [name] : value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  onDelete() {
    this.setState({
      name: '',
      status: false
    });
  }

  render() {
    console.log(this.props.task);
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-6">
                  <div className="panel">
                    <div className="panel-heading">
                      <div className="panel-title">
                         {this.props.task.id ? 'Update Task' : 'Add Task'}
                      </div>
                    </div>
                    <div className="panel-body">
                      <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <label>Name</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                          />
                        </div>
                        <label>Status : </label>
                        <select
                          className="form-control"
                          name="status"
                          value={this.state.status}
                          onChange={this.onChange}
                        >
                          <option value={true}>Active</option>
                          <option value={false}>Hide</option>
                        </select>
                        <button type="submit" className="btn btn-primary">Save</button>
                        <button type="reset" className="btn btn-primary" onClick={this.onDelete}>Delete</button>
                      </form>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Control;
