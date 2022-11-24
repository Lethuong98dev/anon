import React from 'react';
import { useDispatch } from 'react-redux';
import cartSlice from '../../redux/cartSlice';

const Product = (props) => {
    const dispatch = useDispatch();
    const handleAddToCart = () =>{
        dispatch(cartSlice.actions.addProduct({
            idProduct:props.idProduct,
            category:props.category,
            productName : props.productName,
            price : props.price,
            quality: 1,
            link : props.link
        }));
    }
    return (
        <>
            <div className="showcase">
                <div className="showcase-banner">
                    <img src={props.link} alt="Mens Winter Leathers Jackets" width="300" className="product-img" />
                </div>

                <div className="showcase-content">
                    <h4 href="#" className="showcase-category">{props.category}</h4>
                    <p className="showcase-title">{props.productName}</p>
                    <p className="price">${props.price}</p>
                    <button className="btn-add" onClick={handleAddToCart}>
                        <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Product