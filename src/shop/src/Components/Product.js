const Product = ({ label, image }) => (
  <div className='product'>
    <img src={image} alt={label} />
    <h3>{label}</h3>
  </div>
);

export default Product;
