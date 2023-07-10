import React from 'react';

const NavBar = (props) => {
    return (
        <div style={styles.navbar} >
                <img  style={styles.images} alt='' src='https://cdn-icons-png.flaticon.com/128/1170/1170678.png' />
                <span style={styles.quantity}> {props.totalQuantity} </span>
        </div>
    )
}

const styles={
    navbar:{
        height:70,

        backgroundColor:'blue',
        color:'white'
    },
    images:{
        height:50,
        position:'absolute',
        right:'9%',
        top:'10px'
    },
    quantity:{
        position:'absolute',
        right:'8%',
        top:'0',
        backgroundColor:'white',
        color:'black',
        borderRadius:'50%',
        padding:'4px 7px'
    }
}

export default NavBar;