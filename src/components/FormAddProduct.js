import React, { Component } from "react";
import './../App.css';

class FormAddProduct extends Component {

    constructor(props) {
        super(props);
        this.onAddProduct = this.onAddProduct.bind(this);
    }

    onAddProduct() {
        console.log(this.refs.name.value);
    }

    render() {
        return (
            <div className="col-xs-12">
                <div className="panel-heading">
                    <h3 className="panel-title">Add Product</h3>
                </div>
                <div className="panel-body">
                    <label>Add product</label>
                    <input type="text" className="form-control" ref="name"></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Save</button>
            </div>
        );
    }
}

export default FormAddProduct;