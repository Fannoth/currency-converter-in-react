import React from "react";
import Select from "./Select/Select";
import Button from "./Button/Button";
import Input from "./Input/Input";
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rates: {
        EUR: 0,
        USD: 0,
        CHF: 0,
      },
      currency: "EUR",
      amountExchange: 0,
      amount: 0,
    };
  }

  componentDidMount() {
    fetch("https://api.nbp.pl/api/exchangerates/tables/c/")
      .then((data) => data.json())
      .then((data) => {
        this.setState((state) => ({
          rates: {
            USD: data[0].rates[0].ask,
            EUR: data[0].rates[3].ask,
            CHF: data[0].rates[5].ask,
          },
        }));
      })
      .catch((error) => console.log(error));
  }

  getCurrency = (currency) => {
    this.setState({ currency });
  };

  getAmount = (amount) => {
    this.setState({ amount });
  };

  converterFn = () => {
    this.setState({
      amountExchange: this.state.rates[this.state.currency] * this.state.amount,
    });
  };

  render() {
    return (
      <>
        <div className="lowerSection">
          <Input getAmount={this.getAmount} />
          <Select getCurrency={this.getCurrency} />
          <Button onBtnClick={this.converterFn} />
        </div>

        <span id="spanC">To {this.state.amountExchange.toFixed(2)} PLN</span>
      </>
    );
  }
}
export default Form;
