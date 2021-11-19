import "./App.css";
import { Component } from "react";
import productData from "./data/productData";
import ProductDisplay from "./components/ProductDisplay";
import MoneyCalculator from "./components/MoneyCalculator";
import CheckOut from "./components/Checkout";
import formatPrice from "./helpers/formatPrice";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      total: 0,
      subtotal: 0,
      tax: 0,
    };
  }

  handleProductClick = (product) => {
    const { name, price } = product;
    // const formatedPrice = formatPrice(price);

    const item = `${name}: $${price}`;

    this.setState({
      cart: [...this.state.cart, { name: name, price: price }],
    });
  };

  render() {
    const products = productData.map((product) => {
      return (
        <ProductDisplay
          key={product.id}
          product={product}
          handleProductClick={this.handleProductClick}
        />
      );
    });

    return (
      <div>
        <>{products}</>
        <MoneyCalculator cart={this.state.cart} />
        <CheckOut />
      </div>
    );
  }
}

export default App;
