import React, { Component } from 'react';

class Control extends Component {

  constructor(props) {
    super(props);

    this.state = {
      txtName: '',
      txtPass: ''
    };

    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name] : value
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
        <div className = "container">
            <div className="col-xs-6">
                <div className="input-group">
                    <input
                        name="keyword"
                        type="text"
                        className="form-control"
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">
                            <span className="fa fa-search mr-5"></span>Search
                        </button>
                    </span>  
                </div>
            </div>
        </div>
    );
  }
}

export default Control;
