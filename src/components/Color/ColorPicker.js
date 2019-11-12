import React, { Component } from "react";
import './Color.css';

class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.setActiveColor = this.setActiveColor.bind(this);
        this.state = {
            colors :  ['red', 'green', 'blue', '#ccc']
        }
    }

    showColor(color) {
        return {
            backgroundColor: color
        }
    }

    setActiveColor(color) { 
        this.props.onReceiveColor(color);
    }

    render() {
        var colorElements = this.state.colors.map((color, index) => {
            return <span 
                key={index} 
                className="color-box" 
                style={this.showColor(color)}
                onMouseEnter={() => this.setActiveColor(color)}
                ></span>;
        });

        return (
                <div className="col-xs-6">
                <div className="panel-heading">
                    <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body">
                    { colorElements }
                </div>
            </div>
        );
    }
}

export default ColorPicker;