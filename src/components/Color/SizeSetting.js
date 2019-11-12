import React, { Component } from "react";

class SizeSetting extends Component {

    constructor(props) {
        super(props);
    }

    onSize(size) {
        this.props.receiveSize(size);
    }

    render() {
        return (
            <div className="container mt-50">
                <div className="row">
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">Size: {this.props.size} px</h3>
                            </div>
                            <div className="panel-body">
                                <button type="button" className="btn btn-susscess" onMouseEnter={() => this.onSize(this.props.size - 1)}>-</button>
                                <button type="button" className="btn btn-susscess" onMouseEnter={() => this.onSize(this.props.size + 1)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SizeSetting;