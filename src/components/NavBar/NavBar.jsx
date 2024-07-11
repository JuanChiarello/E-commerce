import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Celulares</button>
                <button>Audio</button>
                <button>Gaming</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar