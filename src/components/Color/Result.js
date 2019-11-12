import React, { Component } from "react";

class Result extends Component {

    setColor(color, size) {
        return {
            color: color,
            borderColor: color,
            fontSize: size
        }
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-12">
                <p> Color: red - Fontsize: 12</p>
                <div id="content" style={this.setColor(this.props.color, this.props.size)}>
                    Content
                </div>
            </div>
        );
    }
}

export default Result;