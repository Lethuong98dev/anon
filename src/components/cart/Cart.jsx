import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../../redux/cartSlice';




const Cart = (props) => {
  const dispatch = useDispatch();
  const handleRemoveToCart = () =>{
      dispatch(cartSlice.actions.deleteProduct(props.idProduct));
  }
  const handleIncreaseQuality = () =>{
      dispatch(cartSlice.actions.increase(props.idProduct));
  }
  const handleUnIncreaseQuality = () =>{
      dispatch(cartSlice.actions.unincrease(props.idProduct));
  }
  return (
    <>
      <div className="cart-item">
        <div className="cart-item-banner">
          <img src={props.link} alt="" />
        </div>
        <div className="cart-item-content">
          <p className="cart-item-title">{props.productName}</p>
          <p className="cart-item-quality">
            <p>Quality: </p>
            <button className='unincrease' onClick={handleUnIncreaseQuality}><ion-icon name="remove-outline"></ion-icon></button>
            <p className="value">{props.quality}</p>
            <button className='increase' onClick={handleIncreaseQuality}><ion-icon name="add-outline"></ion-icon></button>
          </p>
          <p className="cart-item-price">Price : ${props.price}</p>
          <p className="subtotal">Sub Total: ${props.quality * props.price}</p>
          <button className="btn-remove" onClick={handleRemoveToCart}><ion-icon name="trash-outline"></ion-icon></button>
        </div>
      </div>
    </>
  )
}

export default Cart