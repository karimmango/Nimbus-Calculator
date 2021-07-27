import React from "react";
import pricesService from "../Services/PricesService";

class TableK extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            Bprice: '',
            price: '',
            GBprice: '',
            Gprice: '',
            value:0

        };
        this.handleChange = this.handleChange.bind(this);

        pricesService.getNBSC().then(data => {
            this.setState({Bprice: data['price']});
        });
        pricesService.getGBSC().then(data => {
            this.setState({GBprice: data['price']});
        });
        pricesService.getNETH().then(data => {
            this.setState({price: data[0]['price'], Gprice: data[1]['price']});
        });


    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }



    render() {
        return (
                <div>
                <label>Amount in USD: </label>
                <input type="textarea"
                       name="textValue"
                       onChange={this.handleChange}
                />

                <table>
                    <tr><th>Profit from arbitrage</th><th>Total profit</th></tr>
                    <tr><td>From ETH to BSC: ${(parseFloat(this.state.Bprice)-parseFloat(this.state.price)).toFixed(8)} per NBU</td><td>${(this.state.value *(parseFloat(this.state.Bprice)-parseFloat(this.state.price)).toFixed(8)).toFixed(4) }</td></tr>
                    <tr><td>From BSC to ETH: ${(parseFloat(this.state.price)-parseFloat(this.state.Bprice)).toFixed(8)} per NBU</td><td>${(this.state.value *(parseFloat(this.state.price)-parseFloat(this.state.Bprice)).toFixed(8)).toFixed(4) }</td></tr>
                    <tr><td>From ETH to BSC: ${(parseFloat(this.state.GBprice)-parseFloat(this.state.Gprice)).toFixed(8)} per GNBU</td><td>${(this.state.value *(parseFloat(this.state.GBprice)-parseFloat(this.state.Gprice)).toFixed(8)).toFixed(4) }</td></tr>
                    <tr><td>From BSC to ETH: ${(parseFloat(this.state.Gprice)-parseFloat(this.state.GBprice)).toFixed(8)} per GNBU</td><td>${(this.state.value *(parseFloat(this.state.Gprice)-parseFloat(this.state.GBprice)).toFixed(8)).toFixed(4) }</td></tr>
                </table>
                </div>

        );
    }
}

export default TableK