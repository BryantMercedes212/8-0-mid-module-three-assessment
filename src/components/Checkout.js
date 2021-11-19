import { Component } from "react";

class CheckOut extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      creditCard: "",
      zipCode: "",
    };
  }

  handleSubmit = () => {
    alert("");
  };

  render() {
    return (
      <form id="checkout">
        <p>Checkout</p>
        <label>
          First Name
          <input type="text" name="firstName" value={this.state.firstName} />
        </label>
        <label>
          Last Name
          <input type="text" name="lastName " value={this.state.lastName} />
        </label>
        <label>
          Email <input type="text" name="email " value={this.state.email} />
        </label>
        <label>
          Credit Card
          <input type="text" name="creditCard" value={this.state.creditCard} />
        </label>
        <label>
          Zip Code
          <input type="text" name="zipCode " value={this.state.zipCode} />
        </label>
        <button type="submit">Buy Now</button>
      </form>
    );
  }
}

export default CheckOut;
