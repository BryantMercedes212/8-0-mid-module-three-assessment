import formatPrice from "../helpers/formatPrice";
const ProductDisplay = (props) => {
  const { name, img, id, price, description } = props.product;

  return (
    <div className="products">
      <p>{name}</p>
      <p>Price: {formatPrice(price)}</p>
      <img src={img} alt={id}></img>
      <p>{description}</p>
      <button
        type="submit"
        onClick={() => props.handleProductClick(props.product)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductDisplay;
