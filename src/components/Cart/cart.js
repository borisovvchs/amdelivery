import React from 'react';
import './cart.sass';
import cart from '../../img/cart.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../img/kfc_logo.jpg';
import {plusQuantinCart, minusQuantinCart, fromCartInOrder} from '../../actions/itemActions.js';

const Cart = ({itemsInCart, plusQuantinCart, minusQuantinCart, fromCartInOrder}) => {
    const renderedItem = (itemsInCart.length === 0) ? (
        <>
            <img className="cart__img__cart" src={cart} alt="cart"/>
            <span className="cart__descr">Корзина пуста</span>
        </>
    ) : (
        <>  
            <div className="cart__wrapper">
                <div className="cart__order__place">
                    <div className="cart__restaurant__info">
                        <div className="cart__restaurant__info__descr">
                            <span>Ваш заказ в ресторане</span>
                            <div className="cart__restaurant__info__descr__name">KFC</div>
                        </div>
                        <img src={logo} alt="kfc-logo"/>
                    </div>
                    {itemsInCart.map(({name, id, price, quantity}) => {
                        const renderItemInCart = (quantity > 0) ? (
                                <div key={id} className="cart__item">
                                    <div className="cart__item__name-counter">
                                          <div className="cart__item__name-counter__name">{name}</div>
                                          <div className="cart__item__name-counter__counter">
                                              <button className="cart__item__name-counter__counter__minus" onClick={(e) => minusQuantinCart(id, e)}>-</button>
                                              <div className="cart__item__name-counter__counter__quantity">{quantity}</div>
                                              <button className="cart__item__name-counter__counter__plus"  onClick={(e) => plusQuantinCart(id, e)}>+</button>
                                          </div>
                                    </div>
                                    <div className="cart__item__price">{price*quantity}</div>
                                </div>  
                              
                        ) : null;
                        return renderItemInCart;
                    })}
                </div>
                
            </div>
            <button className="cart__button" onClick={(e) => fromCartInOrder(itemsInCart, e)}>
                    <span className="cart__button__title">Заказать</span>
                    <div className="cart__button__total-price">Цена</div>
            </button>
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
    itemsInCart: PropTypes.array,
    plusQuantinCart: PropTypes.func,
    minusQuantinCart: PropTypes.func,
    fromCartInOrder: PropTypes.func

}


export default connect(mapStateToProps, {plusQuantinCart, minusQuantinCart, fromCartInOrder})(Cart);




