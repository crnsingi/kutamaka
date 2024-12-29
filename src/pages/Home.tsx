import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import { Product } from '../types';

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([
        {id: '1', name: 'Product 1', description: 'Description of Product 1', price: 100},
        {id: '2', name: 'Product 2', description: 'Description of Product 1', price: 200},
    ]);

    return (
        <div>
            <h1>Product List</h1>

        </div>

    )
}

export default Home;