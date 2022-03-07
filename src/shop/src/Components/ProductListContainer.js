import React from 'react';
import ProductList from './ProductList';

class ProductListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          label: 'nicolas',
          image: 'https://api.lorem.space/image?w=400&h=400&hash=8B7BCDC2',
        },
      ],
    };
  }

  componentDidMount() {
    // fetch('https://localhost:4000/products')
    //   .then(response => response.json())
    //   .then(productData => this.setState({ products: productData.products }))
  }

  render() {
    return <ProductList products={this.state.products} />;
  }
}

export default ProductListContainer;
