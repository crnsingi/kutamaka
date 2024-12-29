import React, { useState } from 'react';
import { Product } from '../types';

interface AddProductFormProps { 
    onAddProduct: (product: Product) => void;
}

const AddProductFrom: React.FC<AddProductFormProps> = ({ onAddProduct}) =>
    const [name, setName] = useState('');