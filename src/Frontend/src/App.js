import React, { useState, useEffect, Component } from 'react';
import { useTable } from 'react-table';
import {AdvancedChart, FundamentalData, MiniChart, SingleTicker, SymbolInfo, Ticker} from "react-tradingview-embed";
import SimpleTextArea from './components/SimpleTextArea'
import TableK from './components/table'

function Example() {
  const App = () => <AdvancedChart widgetProps={{"theme": "light  ", "symbol": "GNBUWETH", "interval":"1"}} />;
  const App2 = () => <SingleTicker widgetProps={{"theme": "light", "symbol": "WETHNBU", "interval":"1"}} />;
  const TextBoxK = () => <SimpleTextArea></SimpleTextArea>;
  const data = React.useMemo(
      () => [
        {
          col1: 'NBU Soft Staking',
          col2: '10%',
          col3: '$1000',
        },
        {
          col1: 'NBU Hard Staking - 60 Days',
          col2: '60%',
          col3: '$2000',
        },
        {
          col1: 'NBU Hard Staking - 180 Days',
          col2: '80',
          col3: '$2500',
        },
      ],
      []
  )

  const columns = React.useMemo(
      () => [
        {
          Header: 'Investment Strategy',
          accessor: 'col1', // accessor is the "key" in the data
        },
        {
          Header: 'APY',
          accessor: 'col2',
        },

      ],
      []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
      <div>
        <h1>Nimbus Profit/Loss Calculator</h1>
        <App2></App2>

        <TextBoxK></TextBoxK>
        <TableK></TableK>
        <div>

          <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
            <thead>
            {headerGroups.map(headerGroup => (
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
                  <tr>Profits<th

                      style={{
                        borderBottom: 'solid 3px red',
                        color: 'black',
                      }}
                  >

                  </th></tr>
                </tr>

            ))}

            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
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

export default Example;
