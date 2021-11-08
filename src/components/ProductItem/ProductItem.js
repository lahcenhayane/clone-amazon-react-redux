import React from 'react'
import "./ProductItem.css"
// import logo from '../../images/products/Book1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { removeProductFromPanier } from '../../redux/productSilce'

function ProductItem({id, title, price, photo, rating}) {

    const dispatch = useDispatch()
    const remove = () => {
        dispatch(removeProductFromPanier({
            id:id
        }))
    }

    return (
        <div className="productItem">
            <img src={photo} />
            <div className="productItem_info">
                <h3>{title}</h3>
                <strong><small>$</small>{price}</strong>
                <div className="productItem_info_starts">
                    {
                        Array(rating).fill().map((_, id)=>
                            (<FontAwesomeIcon icon={faStar} />)
                        )
                    }
                </div>
                <button onClick={remove}>Remove from bascket</button>
            </div>
        </div>
    )
}

export default ProductItem
