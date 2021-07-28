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
                <label>Amount in USD to swap: </label>
                <input type="number"
                       name="textValue"
                       onChange={this.handleChange}
                />

                <table>
                    <tr><th>Token Market Value Difference </th><th>Total Token Market Value After Wrap/Unwrap</th></tr>
                    <tr><td>Wrap from ETH to BSC: ${(parseFloat(this.state.Bprice)-parseFloat(this.state.price)).toFixed(4)} per NBU</td><td align="center">${((parseFloat(this.state.value) + parseFloat(this.state.value *(parseFloat(this.state.Bprice)-parseFloat(this.state.price))  ))).toFixed(4) }</td></tr>
                    <tr><td>Unwrap from BSC to ETH: ${(parseFloat(this.state.price)-parseFloat(this.state.Bprice)).toFixed(4)} per NBU</td><td align="center">${((parseFloat(this.state.value) +parseFloat(this.state.value *(parseFloat(this.state.price)-parseFloat(this.state.Bprice))  ))).toFixed(4) }</td></tr>
                    <tr><td>Wrap from ETH to BSC: ${(parseFloat(this.state.GBprice)-parseFloat(this.state.Gprice)).toFixed(4)} per GNBU</td><td align="center">${((parseFloat(this.state.value) +parseFloat(this.state.value *(parseFloat(this.state.GBprice)-parseFloat(this.state.Gprice)) ))).toFixed(4) }</td></tr>
                    <tr><td>Unwrap from BSC to ETH: ${(parseFloat(this.state.Gprice)-parseFloat(this.state.GBprice)).toFixed(4)} per GNBU</td><td align="center">${ ((parseFloat(this.state.value) +parseFloat(this.state.value *(parseFloat(this.state.Gprice)-parseFloat(this.state.GBprice))  ))).toFixed(4) }</td></tr>
                </table>
                </div>

        );
    }
}

export default TableK