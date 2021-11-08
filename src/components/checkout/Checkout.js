import React, { useEffect, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './Checkout.css'
import {useSelector, useDispatch} from 'react-redux'
import { sumTotalPrice } from '../../redux/productSilce'

function Checkout() {

    const productsPanier = useSelector(state => state.products.productsPanier)
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch()
    const getTotal = () =>{
        console.log(true);
    }
    useEffect(()=>{
        getTotal()
        console.log(total);
    }, [total])

    return (
        <div className="checkout">
            <div className="checkout_left">
                <h2>Your Shopping Basket</h2>
                <div className="checkout_left_items">
                    { 
                        productsPanier.map(row=>(
                            <ProductItem 
                                id={row.id}
                                title={row.title}
                                price={row.price}
                                photo={row.photo}
                                rating={row.rating}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="checkout_right">
                <p>Subtotal ({productsPanier.length} item): {total}</p>
                <input type="checkbox" /> This order contains a gift
                <button>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Checkout
