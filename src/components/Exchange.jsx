
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Selctcountry from '../components/SelctCounty'
import SwitchCurrency from '../components/SwitchCurrency'
import '../components/exchange.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Amountin from './Amountin'

function Exchange() {
  const [result,setresult]=useState();  
  const [data,setData]=useState([]);
  const [fromCountry,setfromCountry]=useState("");
  const [toCountry,settoCountry]=useState("");
  const from=fromCountry.split(' ')[1];
  const to=toCountry.split(' ')[1];
  const [amount,setAmount]=useState();
  useEffect(()=>{
    const fetchdoc=async ()=>{
      try{
        const responce= await axios('https://restcountries.com/v3.1/all');
        setData(responce.data);
      }
      catch(error){
        console.log(error);
      }
    }
    fetchdoc()
  },[]);
  useEffect(()=>{
    if (amount){
      const fetchdata= async ()=>{
        try{
          const response= await axios ('https://api.freecurrencyapi.com/v1/latest',{
            params:{
              apikey:'fca_live_mZjRbveyJCcOYvqp4eux3T6GrhMAZjgEF1bXV1RN',
              base_currency:from,
              currencies:to
            }
          })
          setresult(response.data.data[to]);
        }
        catch(error){
          console.error
        }
      }
      fetchdata();
    }
     },[from,to,amount]);
  return (
    <div className='coverter'>
          <Row className='align-items-center '>
      <Col xs={12} sm={12} md={12} lg={9} xl={9}>
        <div className=' exec space'>
          <div className='country_select mb-5' >
            <Selctcountry  country={data} frc={fromCountry} setfrc={setfromCountry}/>
          </div>
          <div className='country_select'>
            <SwitchCurrency  country={data} toc={toCountry} settoc={settoCountry}/>
          </div>
        </div>
        <div className='exec'>
          <div className='country_select hidden'>
              <div className='result d-flex justify-content-start align-items-center'>
                  <span className=' ms-3 '>Rates upto=+<span className='pacha'>{result ?(result/9).toFixed(2):"-"}</span>%</span>
              </div>
          </div>
          <div className='country_select space'>
            <Amountin amount={amount} setAmount={setAmount}/>
          </div>
        </div>
      </Col>
      <Col xs={12} sm={12} md={12} lg={3} xl={3} className='d-flex justify-content-center'>
        <div className='result_main  result my-3 '>
          <div className="text-center " >
          <span>Result</span>
            <h2>{result ?(result*amount).toFixed(2) : "-"} {to}</h2>
          </div>
        </div>
      </Col>
    </Row>
    </div>
  );
};

export default Exchange;