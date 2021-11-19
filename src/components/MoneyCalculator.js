import formatPrice from "../helpers/formatPrice";
const MoneyCalculator = (props) => {
  const { cart } = props;

  let subtotal = 0;

  for (let item of cart) {
    subtotal += item.price;
  }

  let tax = subtotal * 0.05;

  let total = tax + subtotal;
  const items = cart.map((item) => {
    return <li>{`${item.name}: ${formatPrice(item.price)}`}</li>;
  });

  return (
    <div className="cart">
      <p>{items}</p>
      <p>Subtotal: {formatPrice(subtotal)}</p>
      <p>Tax: {formatPrice(tax)}</p>
      <p>Total: {formatPrice(total)}</p>
    </div>
  );
};

export default MoneyCalculator;
