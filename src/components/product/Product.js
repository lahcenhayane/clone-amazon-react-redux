import React from 'react'
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { addProductToPanier } from '../../redux/productSilce';

function Product({id, title, price, photo, rating}) {

    const dispatch = useDispatch();

    const addProduct = () => {
        dispatch(addProductToPanier(
            {
                id:id,
                title:title,
                price:price,
                photo:photo,
                rating:rating
            }
        ))
        console.log(true);
    }

    return (
        <div className="product">
            <div className="product_header">
                <h4>{title}</h4>
                <strong>${price}</strong>
                <div className="product_starts">
                    {Array(rating)
                        .fill()
                        .map((_, i)=>(
                            <FontAwesomeIcon icon={faStar} />
                        ))
                    }
                </div>
            </div>
            <img className="product_image" src={photo} alt="imageproduct" />
            <button onClick={addProduct} className="product_button">Add to Basket</button>
        </div>
    )
}

export default Product
