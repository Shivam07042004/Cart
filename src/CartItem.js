import React from 'react';

const CartItem = (props) => {
    const {name , quantity , price} = props.product;
    const {product} = props;
    return (
        <div className='cart-item'>
            <div className='left-block' style={styles.images}  >
                <img alt='' style={styles.images} src={product.img} />
            </div>
            <div className='right-block'>
                <div> {name} </div>
                <div> {quantity} </div>
                <div> {price} Rs </div>
                <div className='cart-item-actions'>

                        <img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/748/748113.png' onClick={ () => props.OnIncreaseQuantity(product)} />
                        <img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/43/43625.png'   onClick={ () => props.OnDecreaseQuantity(product)} />
                        <img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png' onClick={ () => props.OnDeleteProduct(product.id)} />
                    

                </div>
            </div>
        </div> 
    )
}

const styles={
    images:{
        padding:'10',
        height:120,
        width:120,
        borderRadius:9,
        backgroundColor:'#777'
    }
}

export default CartItem;