import React from "react";
import AddProductForm from "../components/AddProductForm";
import { Product } from '../types';

const AddProduct: React.FC = () => {
    const handleAddProduct = (product: Product) => { 
        // add product to backend
        console.log('Product added', product)
        
    }

}

export default AddProduct;