import React, { useEffect } from 'react'
import './Header.css'
import AmazonLogo from '../../images/AmazonLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faMapMarkerAlt, faSortDown, faGlobe, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Header() {

    const count = useSelector(state => state.products.productsPanier.length)

    useEffect(() => {
        console.log(count);
    }, [])

    return (
        <div className="header">
            <div className="header_top">
                <Link to="/">
                    <img className="header_top_logo" src={AmazonLogo} alt="Logo Amazon" />
                </Link>
                <div className="header_top_local">
                    <FontAwesomeIcon className="Map" icon={faMapMarkerAlt} />
                    <div className="header_top_local_info">
                        <small>Deliver to</small>
                        <strong>Morocco</strong>
                    </div>
                </div>
            </div>
            <div className="header_search">
                <button className="header_search_all">All <FontAwesomeIcon icon={faSortDown} /></button>
                <div className="line_search"></div>
                <input className="header_search_input" type="text" />
                <buttom className="header_search_search"><FontAwesomeIcon icon={faSearch} /></buttom>
            </div>
            <div className="header_right">
                <div className="header_right_language">
                    <FontAwesomeIcon className="header_right_language_one" icon={faGlobe} />
                    <FontAwesomeIcon className="header_right_language_two" icon={faSortDown} />
                </div>
                <div className="header_right_item">
                    <small>Hello, Sign in</small>
                    <strong>
                        Account & Lists
                        <FontAwesomeIcon className="header_right_item_icon" icon={faSortDown} />
                    </strong>
                </div>
                <div className="header_right_item">
                    <small>Returns</small>
                    <strong>
                        & Orders
                    </strong>
                </div>
                
                <Link className="header_right_shop" to="/checkout">
                    <small>{count}</small>
                    <FontAwesomeIcon className="header_right_shop_icon" icon={faShoppingCart} />
                    <strong>Cart</strong>
                </Link>
            </div>
        </div>
    )
}

export default Header
