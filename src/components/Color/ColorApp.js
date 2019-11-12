import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import Result from './Result';
import SizeSetting from './SizeSetting';
import Reset from './Reset';

class ColorApp extends Component {

  constructor(props) {
    super(props);
    this.onSetColor = this.onSetColor.bind(this);
    this.onSetSize = this.onSetSize.bind(this);
    this.onSetDefault = this.onSetDefault.bind(this);

    this.state = {
      color: 'red',
      fontSize: 15
    };
  }

  onSetColor(params) {
    this.setState({
      color: params
    })
  }

  onSetSize(params) {
    this.setState({
      fontSize: params
    })
  }

  onSetDefault() {
    this.setState({
      color: 'red',
      fontSize: 15
    })
  }

  render() {
    return (
        <div className="container mt-50">
            <div className="row">
                <ColorPicker onReceiveColor={this.onSetColor}/>
                <div className="col-xs-6">
                    <SizeSetting size={this.state.fontSize} receiveSize={this.onSetSize}/>
                    <Reset receiveDefault={this.onSetDefault}/>
                </div>
                <Result color={this.state.color} size={this.state.fontSize}/>
            </div>
        </div>
    );
  }
}

export default ColorApp;
