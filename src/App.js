import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import FormAddProduct from './components/FormAddProduct';
import ProductsList from './components/ProductsList';
import ColorApp from './components/Color/ColorApp';
import TaskApp from './components/Task/TaskApp';
// import './training/Demo.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products : [
        {
          id: 1,
          name: "Apple Iphone6 Plus 16GB",
          price: "2000",
          image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          status: true
        },
        {
          id: 2,
          name: "Apple Iphone",
          price: "1000",
          image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          status: true
        }
      ],
      isActive: true
    }
  }



  render() {
    return (
      <div>
        {/* <ColorApp /> */}
        <TaskApp />
      </div>
    );
  }

  // render() {
  //   let elements = this.state.products.map((product, index) => {
  //     let result = '';
  //     if (product.status) {
  //       result = <Product 
  //         key = {product.id}
  //         price = {product.price}
  //         image = {product.image}
  //       >
  //         {product.name} {product.price}
  //       </Product>
  //     }
  //     return result;
  //   });

    
    // return (
    //   <div>
    //     <Header />
    //       <div className="row">
    //         <div className="col-xs-12">
    //           <FormAddProduct />
    //         </div>
    //         <div className="col-xs-12">
    //           <ProductsList products = {this.state.products} />
    //         </div>
    //         <div className="col-xs-12">
    //           {elements}
    //         </div>
    //         <div className="col-xs-12">
    //           <button type="button" className="btn btn-warning" onMouseEnter={this.onClick}>Click me</button>
    //         </div>
    //       </div>
    //   </div>
    // );
  // }
}

export default App;
