import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => (
  <div className='product-list'>
    {products.map((product, index) => (
      <Product key={`product-${index}`} label={product.label} image={product.image} />
    ))}
  </div>
);

export default ProductList;
