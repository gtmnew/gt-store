import React, { useContext } from 'react';
import { BsFillCartDashFill } from 'react-icons/bs';
import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import  propTypes  from 'prop-types';
import AppContext from '../../context/AppContext';

function CartItem({ data }) {

  const { id, thumbnail, title, price } = data;
  
  const { cartItem, setCartItem } = useContext(AppContext);

  const handleRemoveItem = () => {
    const updatedItems = cartItem.filter((item) => item.id != id); 
    setCartItem(updatedItems);
  };

  return (
    <section className="cart-item">
      <img src={thumbnail} 
        alt="product-image" 
        className="cart-item-image"
      />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>
        <button type="button" 
          className="button__remove-item"
          onClick={ handleRemoveItem }
        >
          <BsFillCartDashFill />
        </button>
      </div>
    
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
