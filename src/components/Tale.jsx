import React from 'react'
import Table from 'react-bootstrap/Table';
import './tale.css'
function Tale() {
  return (
    <>
    <Table   hover responsive >
      <thead >
        <tr >
          <th></th>
          <th >Country</th>
          <th>Current price</th>
          <th>Rate (last day)</th>
          <th>Rate (24h)</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td>1</td>
          <td>Canada </td>
          <td>1.34 CAD</td>
          <td style={{color:'red',fontWeight:'bold'}}>-0.10%</td>
          <td style={{color:'#66FF00',fontWeight:'bold'}}>+0.01%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Austria</td>
          <td>0.92 EUR</td>
          <td style={{color:'#66FF00',fontWeight:'bold'}}>+1%</td>
          <td style={{color:'red',fontWeight:'bold'}}>-0.11%</td>
        </tr>
        <tr>
          <td>3</td>
          <td>India </td>
          <td>83.04 INR</td>
          <td style={{color:'#66FF00',fontWeight:'bold'}}>+0.02%</td>
          <td style={{color:'#66FF00',fontWeight:'bold'}}>+0.05%</td>
        </tr>
        <tr>
          <td>4</td>
          <td>South Korea </td>
          <td>1335.00 KRW</td>
          <td style={{color:'red',fontWeight:'bold'}}>-0.01%</td>
          <td style={{color:'#66FF00',fontWeight:'bold'}}>+0.2%</td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default Tale;