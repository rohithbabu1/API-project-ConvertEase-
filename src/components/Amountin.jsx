import React from 'react'
import {  Grid, TextField } from '@mui/material';
function Amountin({amount,setAmount}) {
  return (
    

    <TextField 
    sx={{backgroundColor:'white',borderRadius:'5px'}}
    value={amount}
    onChange={(e)=>setAmount(e.target.value) }
    fullWidth label="Amount" InputProps={{type:"number"}}/> 


  )
}

export default Amountin