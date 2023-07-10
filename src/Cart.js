import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const {products} = props;
    return (
        <div>
            {products.map((product) => (
        <CartItem
          key={product.id} // Add a unique key prop when rendering lists
          product={product}
          OnIncreaseQuantity= {props.OnIncreaseQuantity}
          OnDecreaseQuantity= {props.OnDecreaseQuantity}
          
          OnDeleteProduct= {props.OnDeleteProduct}
        />
      ))}
        </div>
    )
}

export default Cart;