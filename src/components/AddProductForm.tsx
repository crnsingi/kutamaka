import React, { useState } from 'react';
import { Product } from '../types';

interface AddProductFormProps { 
    onAddProduct: (product: Product) => void;
}

const AddProductFrom: React.FC<AddProductFormProps> = ({ onAddProduct}) =>
 const [name, setName] = useState('');
 const [description, setDescription] = useState('');
 const [price, setPrice] = useState('');

 const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault();
    const newProduct: Product = { 
        id: Date.now().toString(),
        name,
        description,
        price: Number(price),
    };
    onAddProduct(newProduct);
 };

 return (
    <form onSubmit={handleSubmit}>

    </form>
 )