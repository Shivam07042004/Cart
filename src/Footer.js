import React from 'react';

const Footer = (props) => {
    return (
        <div style={styles.prices} > Total Price -: {props.totalPrice} Rs </div>
    );
}

const styles={
    prices:{
        fontSize:20,
        fontWeight:'bold',
        padding:10
    }
}

export default Footer;