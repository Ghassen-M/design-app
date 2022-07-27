import DisplayCSS from './display.module.css';
import { Box,TextField,InputAdornment,Typography } from '@mui/material';
import {Grid, Item} from '@mui/material'
import { textAlign } from '@mui/system';
const Display = () => {
  return (
    <Box sx={{borderBottom:3, borderColor:"#EEEFF5", boxShadow: 2, mb : 2 }} >
      <div className={DisplayCSS.display}>
      <Grid container sx={{pt:"10px"}}>

        {/*<div className={DisplayCSS.horizontalBar}>*/}
        <Grid item xs={4}>        
        {/*<div className={DisplayCSS.affichage}></div>*/}    
        <Typography>Affichage</Typography>
        </Grid>
        <Grid item xs={8} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>    
        <TextField
          id="outlined-helperText"
          inputProps={{
            style: {
              padding: 5
            }
          }}
          size='small'
          InputProps={{
            height: "1em",
            endAdornment: <InputAdornment position="start" style={{margin:0}}>%</InputAdornment>,
          }} style={{width: 80,padding: "0px"}}
        />              
        {/*<TextField id="standard-basic"  InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }} style={{width: 60,padding: "3px 5px"}} variant="standard" /> */}    
        {/*<input className={DisplayCSS.displayInput} value="100" />
        <div className={DisplayCSS.unit}>%</div>*/}
        </Grid>
        {/*</div>*/}
        </Grid>
        <div className={DisplayCSS.options}>
        <Grid container style={{display:"flex", justifyContent:"center"}} >
          {/*<div className={DisplayCSS.space}></div>*/}
          <Grid item xs={3}>
          <div  className={DisplayCSS.button}>
            <div title="Zoom avant" style={{display:"flex", justifyContent:"center"}}>
              <a href="#" className={DisplayCSS.buttonLink}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ fontSize: "1.4em" }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
          </Grid>
          <Grid item xs={3}>
          <div className={DisplayCSS.button}>
            <div title="Zoom arrière" style={{display:"flex", justifyContent:"center"}}>
              <a href="#" className={DisplayCSS.buttonLink} >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ fontSize: "1.4em",alignSelf:"center" }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z">
                  </path>
                </svg></a>
            </div>
          </div>
          </Grid>
          <Grid item xs={3}>
          <div className={DisplayCSS.button}>
            <div title="Plein page" style={{display:"flex", justifyContent:"center"}}>
              <a href="#" className={DisplayCSS.buttonLink}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ fontSize: "1.4em" }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path>
                </svg>
              </a>
            </div>

          </div>
          </Grid>
          <Grid item xs={3}>
          <div className={DisplayCSS.button}>
            <div title='Taille réelle' style={{display:"flex",justifyContent:"center"}}>
              <a href="#" className={DisplayCSS.buttonLink} >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ color: "rgb(34, 34, 34)", fontSize: "1.4em", strokeWidth: "1px" }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path>
                </svg>
              </a>
            </div>
          </div>
          </Grid>
          </Grid>
        </div>
       
      </div>
    </Box>
    
  )
}
export default Display;