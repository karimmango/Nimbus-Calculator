import React from "react";
class Prices extends React.Component {
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
                <th>Prices of Nimbus Tokens on Chains</th>
                <tr><td>ETH Chain NBU: ${parseFloat(this.state.price).toFixed(8)} per NBU</td></tr>
                <tr><td>BSC Chain NBU: ${parseFloat(this.state.Bprice).toFixed(8)} per NBU</td></tr>
                <tr><td>ETH Chain GNBU: ${parseFloat(this.state.Gprice).toFixed(8)} per GNBU</td></tr>
                <tr><td>BSC Chain GNBU: ${parseFloat(this.state.GBprice).toFixed(8)} per GNBU</td></tr>
            </table>

        );
    }
}

export default Prices