import React from "react";
import pricesService from "../Services/PricesService";
class Prices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Bprice: '',
            price: '',
            GBprice: '',
            Gprice: '',

        };
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

    render() {
        return (
            <table>
                <th>Market Value of Nimbus Tokens on Chains</th>
                <tr><td>ETH Chain NBU: ${parseFloat(this.state.price).toFixed(8)} per NBU</td></tr>
                <tr><td>BSC Chain NBU: ${parseFloat(this.state.Bprice).toFixed(8)} per NBU</td></tr>
                <tr><td>ETH Chain GNBU: ${parseFloat(this.state.Gprice).toFixed(8)} per GNBU</td></tr>
                <tr><td>BSC Chain GNBU: ${parseFloat(this.state.GBprice).toFixed(8)} per GNBU</td></tr>
            </table>

        );
    }
}

export default Prices