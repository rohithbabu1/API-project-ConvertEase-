import {  Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
function SelctCounty({country,setfrc,frc}) {
  const dataFilter=country.filter((iteam)=> (iteam.currencies));
   const dataCountries= dataFilter.map((itm)=>{
    return `${itm.flag} ${Object.keys(itm.currencies)} -${itm.name.common} `;
   } );
  return (
    <>
         <Grid item  xs={12} md> 
         <Autocomplete
          disableClearable
          sx={{backgroundColor:'white',borderRadius:'5px'}}
          value={frc}
                onChange={(e,newfrc)=>{
                  if(frc===""){
                    frc={frc}
                  }
                  setfrc(newfrc);
              } }
                id="combo-box-demo"
                options={dataCountries}
                renderInput={(params) => <TextField {...params} label="FROM" />}
                />
         </Grid>
    </>
  );
};

export default SelctCounty;