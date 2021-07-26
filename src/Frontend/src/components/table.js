import React from "react";
class TableK extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Bname: '',
            Bprice: '',
            Bsymbol: '',
            name: '',
            price: '',
            symbol: '',
            GBname: '',
            GBprice: '',
            GBsymbol: '',
            Gname: '',
            Gprice: '',
            Gsymbol: ''
        };
        fetch('http://localhost:8080/NBSC')
            .then(response => response.json())
            .then((response) => {
                this.setState({Bname: response.name, Bprice: response.price, Bsymbol: response.symbol});
            });
        fetch('http://localhost:8080/NETH')
            .then(response => response.json())
            .then((response) => {
                this.setState({name: response.name, price: response.price, symbol: response.symbol});
            });
        fetch('http://localhost:8080/GBSC')
            .then(response => response.json())
            .then((response) => {
                this.setState({GBname: response.name, GBprice: response.price, GBsymbol: response.symbol});
            });
        fetch('http://localhost:8080/GETH')
            .then(response => response.json())
            .then((response) => {
                this.setState({Gname: response.name, Gprice: response.price, Gsymbol: response.symbol});
            });
    }

    render() {
        return (
                <table>
                    <th>Profit from arbitrage</th>
                    <tr><td>From ETH to BSC: ${(parseFloat(this.state.Bprice)-parseFloat(this.state.price)).toFixed(8)} per NBU</td></tr>
                    <tr><td>From BSC to ETH: ${(parseFloat(this.state.price)-parseFloat(this.state.Bprice)).toFixed(8)} per NBU</td></tr>
                    <tr><td>From ETH to BSC: ${(parseFloat(this.state.GBprice)-parseFloat(this.state.Gprice)).toFixed(8)} per GNBU</td></tr>
                    <tr><td>From BSC to ETH: ${(parseFloat(this.state.Gprice)-parseFloat(this.state.GBprice)).toFixed(8)} per GNBU</td></tr>
                </table>

        );
    }
}

export default TableK