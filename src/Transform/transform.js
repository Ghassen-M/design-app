import TransformCSS from './transform.module.css';
import { Box,TextField,FormHelperText,Grid,Typography  } from '@mui/material';

const Transform = () => {
    return (
      <Box className={TransformCSS.box} >
        <div className={TransformCSS.transform}>
          <Grid container className={TransformCSS.spacing}>
            <Grid container className={TransformCSS.distance}>
              <Grid item xs={4} className={TransformCSS.elementStart}>
                <Typography>Taille</Typography>
              </Grid>
              <Grid item xs={4} className={TransformCSS.elementCentering}>
                <div className={TransformCSS.boxArea}>
                  <TextField
                        inputProps={{
                          style: {
                            padding: 5
                          }
                        }}
          id="outlined-helperText"
          defaultValue="200"
          size='small'
          style={{width: 50, padding: "3px 5px", float:"left"}}
                  />
                  <FormHelperText className={TransformCSS.sublabel}>largeur</FormHelperText>  
                </div>
              </Grid>
              <Grid item xs={4} className={TransformCSS.elementCentering}>
                <div className={TransformCSS.boxArea}>
                  <TextField
                    inputProps={{
                      style: {
                      padding: 5
                      }
                    }}
                    id="outlined-helperText"
                    defaultValue="50"
                    size='small'
                    style={{width: 50, padding: "3px 5px", float:"left"}}
                  />
                  <FormHelperText className={TransformCSS.sublabel}>hauteur</FormHelperText>  
                </div>
              </Grid>
            </Grid>
            <Grid container className={TransformCSS.distance}>
              <Grid item xs={4} className={TransformCSS.elementStart}>
                <Typography>Position</Typography>
              </Grid>
              <Grid item xs={4} className={TransformCSS.elementCentering}>
                <div className={TransformCSS.boxArea}>
                  <TextField
                    inputProps={{
                      style: {
                      padding: 5
                      }
                    }}
                    id="outlined-helperText"
                      defaultValue="203"
                      size='small'
                      style={{width: 50, padding: "3px 5px", float:"left"}}
                  />
                  <FormHelperText className={TransformCSS.sublabel}>x</FormHelperText>  
                </div>
              </Grid>
            <Grid item xs={4} className={TransformCSS.elementCentering}>
                <div className={TransformCSS.boxArea}>
                  <TextField
                    inputProps={{
                      style: {
                      padding: 5
                      }
                    }}
                    id="outlined-helperText"
                    defaultValue="157"
                    size='small'
                    style={{width: 50, padding: "3px 5px", float:"left"}}
                  />
                  <FormHelperText className={TransformCSS.sublabel}>y</FormHelperText> 
                </div>
          </Grid>
        </Grid>
          <Grid container className={TransformCSS.distance}>
            <Grid item xs={4} className={TransformCSS.elementStart}>
              <Typography>Rotation</Typography>
            </Grid>
            <Grid item xs={4}/>
            <Grid item xs={4} className={TransformCSS.elementCentering}>
              <div className={TransformCSS.boxArea}>
                <TextField
                inputProps={{
                  style: {
                  padding: 5
                  }
                  }}
                  id="outlined-helperText"
                  defaultValue="0"
                  size='small'
                  style={{width: 50, padding: "3px 5px", float:"left"}}
                />
                <FormHelperText className={TransformCSS.sublabel}>angle</FormHelperText> 
              </div>
            </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
    )
}
export default Transform;