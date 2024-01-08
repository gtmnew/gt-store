import React, { useContext } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { cartItem, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button type="button" 
      className="cart__button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <GiShoppingCart />
      { cartItem.length > 0 && <span className="cart-status">{cartItem.length}</span> }
    </button>
  );
}

export default CartButton;
