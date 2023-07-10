import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';
import Footer from './Footer';
import CameraImagge from './camera.jpg';
import GamingImage from './gaming.webp';
import WatchImage from './watch.jpg';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      products:[{
        name:'Watch',
        quantity:1,
        img:WatchImage,
        price:999,
        id:1
      },
      {

        name:'Gaming',
        quantity:2,
        img:GamingImage,
        price:999,
        id:2
      },
      {
        name:'Camera',
        quantity:3,
        img:CameraImagge,
        price:999,
        id:3
      }]
    }
  }

  increaseQuantity = (product) => {
    const {products} = this.state;
    const k = products.indexOf(product);
    products[k].quantity = products[k].quantity+1;

    this.setState({
      products
    })

  }
  
  decreaseQuantity = (product) => {
    const {products} = this.state;
    const k = products.indexOf(product);
    if(products[k].quantity !== 0)
       products[k].quantity = products[k].quantity-1;

    this.setState({
      products
    })

  }

  deleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter( (items) => items.id !== id );

    this.setState({
      products : items
    })

  }

  getTotal = () => {
    const {products} = this.state;
    let k=0;
    products.forEach( (it) => {
      k=k+ it.quantity;
    });

    return k;
  }

  getPrice = () => {
    const {products} = this.state;
    let price =0 ;
    products.forEach( (it) => {
      price = price + (it.quantity * it.price);
    })

    return price;
  }

  render() {
    const {products} = this.state;
    return (
      <div className='App'>
        <NavBar 
         totalQuantity={this.getTotal()}
        /> 
        <Cart 
          products={products}
          OnIncreaseQuantity={this.increaseQuantity}
          OnDecreaseQuantity={this.decreaseQuantity}
  
          OnDeleteProduct={this.deleteProduct}
          />

        <Footer 
         totalPrice={this.getPrice()}
        />
      </div>
    );
  }
}

export default App;
