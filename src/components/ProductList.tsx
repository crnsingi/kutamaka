import React from "react";
import ProductCard  from "./ProductCard";
import { Product } from '../types';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => { 
    return (
        <div>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;