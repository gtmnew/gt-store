import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart(){

  const { cartItem, isCartVisible } = useContext(AppContext);
  const totalPrice = cartItem.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <h1>Resumo do carrinho:</h1>
      <div className="cart-items">
        {cartItem.map((cartItems) => <CartItem key={cartItems.id} data={cartItems}/>)}
       
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;
