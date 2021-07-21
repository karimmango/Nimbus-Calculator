import React, {useState, useEffect, Component} from 'react';
import {useTable} from 'react-table';
import {AdvancedChart, FundamentalData, MiniChart, SingleTicker, SymbolInfo, Ticker} from "react-tradingview-embed";
import SimpleTextArea from './components/SimpleTextArea'
import TableK from './components/table'

const App = () => <AdvancedChart widgetProps={{"theme": "light  ", "symbol": "GNBUWETH", "interval": "1"}}/>;
const App2 = () => <SingleTicker widgetProps={{"theme": "light", "symbol": "WETHNBU", "interval": "1"}}/>;


class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    Header: 'Investment Strategy',
                    accessor: 'col1', // accessor is the "key" in the data
                },
                {
                    Header: 'APY',
                    accessor: 'col2',
                },
                {Header: 'Profit'}

            ], rows: [
                {
                    col1: 'NBU Soft Staking',
                    col2: '10%',

                },
                {
                    col1: 'NBU Hard Staking - 60 Days',
                    col2: '60%',

                },
                {
                    col1: 'NBU Hard Staking - 180 Days',
                    col2: '80',

                }]
        }
    }


    render() {
        return (
            <div>
                <h1>Nimbus Profit/Loss Calculator</h1>
                <App2></App2>

                <div>
                    <label>Enter value : </label>
                    <input type="textarea"
                           name="textValue"
                           onChange={this.handleChange}
                    />
                </div>
                <TableK></TableK>
                <div>
                    <table {...this.state.columns} style={{border: 'solid 1px black'}}>
                        <thead>
                        {this.state.columns.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        style={{
                                            borderBottom: 'solid 3px red',
                                            color: 'black',
                                        }}
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>

                        ))}

                        </thead>
                        <tbody {...this.state.rows()}>
                        {this.state.rows.map(row => {
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                style={{
                                                    padding: '10px',
                                                    border: 'solid 1px gray',
                                                }}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <App></App>

                </div>
            </div>
        );
    }
}

export default Example;
