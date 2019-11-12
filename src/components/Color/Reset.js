import React, { Component } from "react";

class Reset extends Component {

    constructor(props) {
        super(props);
    }

    onResetDefault = () => {
        this.props.receiveDefault();
    }

    render() {
        return (
            <button type="button" className="btn btn-primary" onMouseEnter={this.onResetDefault}>Reset</button>
        );
    }
}

export default Reset;