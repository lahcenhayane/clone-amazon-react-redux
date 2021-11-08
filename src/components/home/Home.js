import React from 'react'
import "./Home.css"
import cover1 from "./../../images/cover1.jpg"
import Product from '../product/Product'
// import photo1 from './../../images/products/photo 1.jpg'
import { useSelector } from 'react-redux'


function Home() {

    const products = useSelector(state => state.products.products)


    return (
        <div className="home">
            <div className="home_container">
                <img className="home_container_cover" src={cover1} alt="cover" />
            </div>
            
            <div className="home_row">
            {
                products.map(row=>(
                    <Product 
                        id={row.id}
                        title={row.title}
                        price={row.price}
                        photo={row.photo}
                        rating={row.rating}
                    />
                ))
            }
            </div>
            <div className="home_row">
            
            </div>
            <div className="home_row">
            
            </div>
        </div>
    )
}

export default Home
