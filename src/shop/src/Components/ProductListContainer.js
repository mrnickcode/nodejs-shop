import React from 'react';
import ProductList from './ProductList';

class ProductListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/products')
      .then((response) => response.json())
      .then((products) => this.setState({ products }));
  }

  render() {
    return <ProductList products={this.state.products} />;
  }
}

export default ProductListContainer;
