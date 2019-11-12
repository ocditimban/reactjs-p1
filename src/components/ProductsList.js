import React, { Component } from "react";

class ProductsList extends Component {

    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
      this.state = {
          isActive: true
      }
    }

    onClick() {
        if (this.state.isActive === true) {
            this.setState({isActive: false});
        }
        else {
            this.setState({isActive: true});
        }
    }

    showProducts() {
        let elements = this.props.products.map((product, index) => {
            let result = '';
            if (product.status) {
                result = <tr key={index}>
                    <td>{index}</td>
                    <td>{product.name}</td>
                    <td>{product.price} USD</td>
                </tr>
            }

            return result;
        });

        let result = '';
        if (this.state.isActive) {
            result = <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>ProductName</th>
                        <th>Price</th>  
                    </tr>
                </thead>
                <tbody>
                    { elements }
                </tbody>
            </table>
        }

        return result;
    }


    render() {
        return (
            <div>
                {this.showProducts()}
                <button type="button" className="btn btn-warning" onClick={this.onClick}>Active {this.state.isActive === true ? 'true' : 'false'}</button>
            </div>
        );
    }
}

export default ProductsList;