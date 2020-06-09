import React from 'react';
import './cart.sass';
import cart from '../../img/cart.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Cart = ({itemsInCart}) => {
    console.log(itemsInCart.length);
    const renderedItem = (itemsInCart.length == 0) ? (
        <>
            <img src={cart} alt="cart"/>
            <span>Корзина пуста</span>
        </>
    ) : (
        <>
            {itemsInCart.map(item => {
                return (
                    <div key={item.id} className="cart__item">
                            <div className="cart__item__name">{item.name}</div>
                            <div className="cart__item__quantity">{item.quantity}</div>
                    </div>
                )
            })}
        </>
    );

    return (
        <div className="cart">
            {renderedItem}
        </div>
    )
}




const mapStateToProps = ({itemsInCart}) => {
      return {
          itemsInCart
      }
}

Cart.propTypes = {
    itemsInCart: PropTypes.array
}


export default connect(mapStateToProps)(Cart);




