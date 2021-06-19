import React from "react";
import "../style.css";
import Select from "./Select";
import Button from "./Button";
import Input from "./Input";
class LowerSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rates: {
        NULL: "0",
        EUR: 0,
        USD: 0,
        CHF: 0,
      },
      currency: "NULL",
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

  ConverterFn = () => {
    if (this.state.currency !== "NULL") {
      this.setState({
        amountExchange:
          this.state.rates[this.state.currency] * this.state.amount,
      });
    } else {
      this.setState({ amountExchange: 0 });
    }
  };

  render() {
    return (
      <>
        <div className="lowerSection">
          <Input getAmount={this.getAmount} />
          <Select getCurrency={this.getCurrency} />
          <Button
            onBtnClick={this.ConverterFn}
            disabled={this.state.currency === "NULL" ? true : false}
          />
        </div>
        <span id="spanC">
          {this.state.currency === "NULL"
            ? "Wybierz walute"
            : `To ${this.state.amountExchange.toFixed(2)} PLN`}
        </span>
      </>
    );
  }
}
export default LowerSection;
