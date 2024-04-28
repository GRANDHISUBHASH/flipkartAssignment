import React from 'react';
import { FaSearch,FaMoon  } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './index.css';

const NavBar = () => {
    return (
        <nav>
            <img src="https://tse1.mm.bing.net/th?id=OIP.PPnQ9g_sYJabktg5KAveAwHaEy&pid=Api&P=0&h=180" alt="flipkart logo" className="flipkart-logo" />
            <div>
                    <div  className='serach-box'>
                    <FaSearch/>
                    <input type="text" placeholder="Search for Item"/>
                    </div>
            </div>
            <div className='nav-right'>
                <FaMoon />
                <div>
                    <TiShoppingCart/>
                    <p>Cart</p>
                </div>

            </div>

        </nav>
    );
};

export default NavBar;
