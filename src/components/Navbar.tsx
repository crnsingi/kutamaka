import React from "react";
import { Link} from 'react-router-dom';   

const Navbar: React.FC = () => {
    return (
        <nav>
            <h1>Marketplace</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-product">Add Product</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;