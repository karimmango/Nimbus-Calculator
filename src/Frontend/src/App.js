import React, {Component} from 'react';
import {AdvancedChart, SingleTicker, Ticker, TickerTape} from "react-tradingview-embed";
import TableK from './components/table'
import './App.css'
import Prices from "./components/Prices";
import pricesService from "./Services/PricesService";

class AdvancedChartComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            symbol:"WETHNBU"
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            symbol: event.target.value
        });}

    render() {
        return (<div><div><label>Display GNBU <input type="checkbox" onClick={this.handleChange} value="GNBUWETH" /></label>
            <label>Display NBU</label> <input type="checkbox" onClick={this.handleChange} value="WETHNBU" /></div>
            <AdvancedChart widgetProps={{"theme": "dark  ", "symbol": this.state.symbol, "interval": "1"}}/></div>);
    }
}
class SingleTickerNETHComponent extends React.PureComponent {
    render() {
        return <SingleTicker widgetProps={{"theme": "light  ", "symbol": "WETHNBU", "interval": "1"}}/>;
    }
}

class SingleTickerGETHComponent extends React.PureComponent {
    render() {
        return <SingleTicker widgetProps={{"theme": "light  ", "symbol": "GNBUWETH", "interval": "1"}}/>;
    }
}
class SingleTickerGNComponent extends React.PureComponent {
    render() {
        return <SingleTicker widgetProps={{"theme": "light  ", "symbol": "GNBUNBU", "interval": "1"}}/>;
    }
}

class TickerTapeComponent extends React.PureComponent {
    render() {
        return <TickerTape widgetProps={{"theme": "light  ", "symbol": "GNBUWETH", "interval": "1"}}/>;
    }
}
//const App = () => <AdvancedChart widgetProps={{"theme": "light  ", "symbol": "WETHNBU", "interval": "1"}}/>;
//const App2 = () => <SingleTicker widgetProps={{"theme": "light", "symbol": "WETHNBU", "interval": "1"}}/>;
//const App3 = () => <SingleTicker widgetProps={{"theme": "light", "symbol": "GNBUWETH", "interval": "1"}}/>;
//const App4 = () => <TickerTape widgetProps={{"theme": "light", "symbol": "GNBUWETH", "interval": "1"}}/>;


class Example extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            rate: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        pricesService.getGN().then(data => {
            this.setState({rate: data['price']});
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
                    <TickerTapeComponent></TickerTapeComponent>
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
                                    <th>Profit in NBU</th>
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
                                    <td>{((0.1 * (this.state.value))*this.state.rate).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>GNBU Hard Staking - 90 Days</td>
                                    <td>28%</td>
                                    <td>{((0.28 * (this.state.value))*this.state.rate).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>GNBU Hard Staking - 180 Days</td>
                                    <td>36%</td>
                                    <td>{((0.36 * (this.state.value))*this.state.rate).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>Liquidity Providing- NBU</td>
                                    <td>100%</td>
                                    <td>{(1 * (this.state.value)).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>Liquidity Providing- GNBU</td>
                                    <td>100%</td>
                                    <td>{((1 * (this.state.value))*this.state.rate).toFixed(1)}</td>
                                </tr>
                                </tbody>
                            </table><div className="item3"> <SingleTickerNETHComponent ></SingleTickerNETHComponent></div>
                            <div className="item3"> <SingleTickerGETHComponent ></SingleTickerGETHComponent></div>
                            <div className="item3"> <SingleTickerGNComponent ></SingleTickerGNComponent></div>
                        </div>
                        <div className="container2">
                            <div className="item1"><AdvancedChartComponent ></AdvancedChartComponent></div>
                            <div className="container">

                                <div className="item5"><TableK></TableK></div>
                                <div className="item5"><Prices></Prices></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default Example;