import React, { Component } from "react";

class Product extends Component {

    constructor(props) {
      super(props);
      this.onAddToCard = this.onAddToCard.bind(this);
    }

    onAddToCard(text) {
      console.log(text);
    }

    showInfoProduct(product) {
        return <div className="thumbnal">
          <img alt={product.children} src={product.image}></img>
          <div className="caption">
            <h3>{product.children}</h3>
            <p>
              {product.price} VND
            </p>
            <p>
              <a className="btn btn-primary" onMouseEnter={ this.onAddToCard('go') }>Buy now</a>
            </p>
          </div>
        </div>
    }

    render() {
        return (
          <div className="col-xs6">
            <div className="ml-30">
              {this.showInfoProduct(this.props)}
            </div>
          </div>
        );
    }
}

export default Product;