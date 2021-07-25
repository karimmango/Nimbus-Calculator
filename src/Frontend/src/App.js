import React, {Component} from 'react';
import {AdvancedChart, SingleTicker, Ticker, TickerTape} from "react-tradingview-embed";
import TableK from './components/table'
import './App.css'

const App = () => <AdvancedChart widgetProps={{"theme": "light  ", "symbol": "WETHNBU", "interval": "1"}}/>;
const App2 = () => <SingleTicker widgetProps={{"theme": "light", "symbol": "WETHNBU", "interval": "1"}}/>;
const App3 = () => <SingleTicker widgetProps={{"theme": "light", "symbol": "GNBUWETH", "interval": "1"}}/>;
const App4 = () => <TickerTape widgetProps={{"theme": "light", "symbol": "GNBUWETH", "interval": "1"}}/>;


class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (

            <div>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div>
                    <h1>Nimbus Analysis Zone</h1>
                    <App4></App4>
                    <div className="container">
                        <div className="item">
                            <div>
                                <label>Amount of NBU/GNBU     : </label>
                                <input type="textarea"
                                       name="textValue"
                                       onChange={this.handleChange}
                                />
                            </div>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Investment Strategy</th>
                                    <th>APY</th>
                                    <th>Profit</th>
                                </tr>
                                <tr>
                                    <td>NBU Soft Staking</td>
                                    <td>10%</td>
                                    <td>{(0.1 * this.state.value).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>NBU Hard Staking - 60 Days</td>
                                    <td>60%</td>
                                    <td>{(0.6 * this.state.value).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>NBU Hard Staking - 180 Days</td>
                                    <td>80%</td>
                                    <td>{(0.8 * this.state.value).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>GNBU Soft Staking </td>
                                    <td>10%</td>
                                    <td>{(0.1 * (this.state.value * 8)).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>GNBU Hard Staking - 90 Days</td>
                                    <td>28%</td>
                                    <td>{(0.28 * (this.state.value * 8)).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>GNBU Hard Staking - 180 Days</td>
                                    <td>36%</td>
                                    <td>{(0.36 * (this.state.value * 8)).toFixed(1)}</td>
                                </tr>
                                </tbody>
                            </table><div className="item3"> <App2></App2></div>
                            <div className="item3"> <App3></App3></div>
                        </div>

                        <div className="item1"><App></App></div>
                    </div>
                </div>



                </div>

        );
    }
}

export default Example;