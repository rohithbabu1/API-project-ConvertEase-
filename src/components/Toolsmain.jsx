import React from 'react'
import Toolmap from './Toolmap';
import { Row } from 'react-bootstrap';
const tools=[
  { 
    pictuer:"plane-01.svg",
    heading:"Money Transfer",
    detail:"Seamless Global Transactions with Money Transfer Services "
  },
  { 
    pictuer:"graph-01.svg",
    heading:"Currency Chart",
    detail:"Connect and Learn with Currency Chat. Your Financial Conversations "
  },
  { 
    pictuer:"bell-01.svg",
    heading:"Rate Alerts",
    detail:"Stay Informed with Rate AlertsNever Miss a Currency Opportunity"
  },
  { 
    pictuer:"time-01.svg",
    heading:"Historical Rates",
    detail:"Explore the Past, Understand the Present: Historical Rates at Your "
  },
]
function Toolsmain() {
  return (
    <Row>
      {tools.map((p)=><Toolmap details={p}/>)}
    </Row>
  )
}

export default Toolsmain;