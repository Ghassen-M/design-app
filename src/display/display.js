import DisplayCSS from './display.module.css';
import { Box,TextField,InputAdornment,Typography,Grid,Tooltip } from '@mui/material';
import { MdFullscreen,MdFullscreenExit,MdZoomIn,MdZoomOut } from "react-icons/md";

const Display = () => {
  return (
    <Box className={DisplayCSS.box} >
      <div className={DisplayCSS.display}>
        <Grid container>
          <Grid item xs={4}>        
            <Typography>Affichage</Typography>
          </Grid>
          <Grid item xs={8} className={DisplayCSS.elementCentering}>    
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
              }} 
              className={DisplayCSS.field}
            />              
        </Grid>
        </Grid>
        <div className={DisplayCSS.options}>
          <Grid container >
            <Grid item xs={3}>
                <div title="Zoom avant" className={DisplayCSS.elementCentering}>
                <Tooltip title="Zoom avant">
                  <a  href="#" className={DisplayCSS.buttonLink}>
                      <MdZoomIn className={DisplayCSS.symbol}/>
                  </a>
                  </Tooltip>

                </div>
            </Grid>
              <Grid item xs={3}>
                <div title="Zoom arrière" className={DisplayCSS.elementCentering}>
                  <Tooltip title="Zoom arrière">
                    <a  href="#" className={DisplayCSS.buttonLink} >
                      <MdZoomOut className={DisplayCSS.symbol}/>
                    </a>
                  </Tooltip>
                </div>
              </Grid>
              <Grid item xs={3}>
                  <div title="Plein page" className={DisplayCSS.elementCentering}>
                    <Tooltip title="Plein page">
                      <a  href="#" className={DisplayCSS.buttonLink}>
                        <MdFullscreen className={DisplayCSS.symbol}/>
                      </a>
                    </Tooltip>
                  </div>
              </Grid>
              <Grid item xs={3}>
                  <div title='Taille réelle' className={DisplayCSS.elementCentering}>
                    <Tooltip title="Taille réelle">
                      <a  href="#" className={DisplayCSS.buttonLink} >
                        <MdFullscreenExit className={DisplayCSS.symbol}/>
                      </a>
                    </Tooltip>
                  </div>
              </Grid>
            </Grid>
        </div>  
      </div>
  </Box>
    
  )
}
export default Display;