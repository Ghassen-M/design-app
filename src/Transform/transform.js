import TransformCSS from './transform.module.css';
import { Box,TextField,InputAdornment,FormControl,FilledInput,FormHelperText,Input,Grid,Typography  } from '@mui/material';

const Transform = () => {
    return (
      <Box sx={{ borderBottom:3, borderColor:"#EEEFF5", boxShadow: 2, mb : 2,padding:"10px 10px" }} >
            <div className={TransformCSS.transform}>
             <Grid container sx={{flexDirection:"column",alignContent:"space-between"}}>

              <Grid container sx={{margin:"10px 0"}}>

                {/*<div className={TransformCSS.horizontalBar}>*/}
                  <Grid item xs={4} sx={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                  <Typography>Taille</Typography>
                    {/*<div className={TransformCSS.label}>Taille</div>*/}
                    </Grid>
                    <Grid item xs={4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
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
          <FormHelperText sx={{width: "57px",textAlign:"center",position:"absolute",mt:"35px"}}>largeur</FormHelperText>  

        {/*}
          <Input 
          style={{width: 50,padding: "3px 5px", marginRight:"5px", float:"left"}}
            value="200"
            inputProps={{
              'aria-label': 'weight',
            }}
          />  
                  <FormHelperText>largeur</FormHelperText>  /*}
                  

                        {/*<input className={TransformCSS.inputBox} value="200" />
                        <div className={TransformCSS.boxTag}>largeur</div>*/}
                    </div>
                    </Grid>
                    <Grid item xs={4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
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
          <FormHelperText sx={{width: "57px",textAlign:"center",position:"absolute",mt:"35px"}}>hauteur</FormHelperText>  
                   {/* <Input 
          style={{width: 50,padding: "3px 5px", marginRight:"5px", float:"left"}}
            value="50"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText>hauteur</FormHelperText> */}
                  {/*}
                        <input className={TransformCSS.inputBox} value="50" />
        <div className={TransformCSS.boxTag}>hauteur</div> */}
                    </div>
                    </Grid>
                {/*</div>*/}
                </Grid>
                <Grid container sx={{margin:"10px 0"}}>
                {/*<div className={TransformCSS.horizontalBar}>*/}
                    <Grid item xs={4} sx={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                    <Typography>Position</Typography>
                    {/*<div className={TransformCSS.label}>Position</div>*/}
                    </Grid>
                    <Grid item xs={4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
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
          <FormHelperText sx={{width: "57px",textAlign:"center",position:"absolute",mt:"35px"}}>x</FormHelperText>  
{/*
                    <Input 
          style={{width: 50,padding: "3px 5px", marginRight:"5px", float:"left"}}
            value="203"
            inputProps={{
              'aria-label': 'weight',
            }}
          /> 
                  <FormHelperText>x</FormHelperText> /*}
                  {/*
                        <input className={TransformCSS.inputBox} value="203" />
        <div className={TransformCSS.boxTag}>x</div> */}
                    </div>
                    </Grid>
                    <Grid item xs={4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
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
          <FormHelperText sx={{width: "57px",textAlign:"center",position:"absolute",mt:"35px"}}>y</FormHelperText> 
          {/*
                    <Input 
          style={{width: 50,padding: "3px 5px", marginRight:"5px", float:"left"}}
            value="157"
            inputProps={{
              'aria-label': 'weight',
            }} *
          />  
          <FormHelperText>y</FormHelperText>  */}
                        {/*<input className={TransformCSS.inputBox} value="157" />
                        <div className={TransformCSS.boxTag}>y</div>*/}
                    </div>
                    </Grid>

                {/*</div>*/}
                </Grid>
                <Grid container sx={{margin:"10px 0"}}>
                {/*<div className={TransformCSS.horizontalBar}>*/}
                <Grid item xs={4} sx={{display:"flex",justifyContent:"Start",alignItems:"center"}}>
                <Typography>Rotation</Typography>
                    {/*<div className={TransformCSS.label}>Rotation</div>*/}
                  </Grid>
                    <Grid item xs={2}/>
                    <Grid item xs={4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
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
          <FormHelperText sx={{width: "57px",textAlign:"center",position:"absolute",mt:"35px"}}>angle</FormHelperText> 
                      {/*
                    <Input 
          style={{width: 50,padding: "3px 5px", marginRight:"5px", float:"left"}}
            value="0"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText>angle</FormHelperText>  */}
                  {/*
                        <input className={TransformCSS.inputBox} value="0" />
                        <div className={TransformCSS.boxTag}>angle</div>
        */}  
                    </div>
                    </Grid>
                    <Grid item xs={2}/>

                    {/*</div>*/}
                </Grid>
                </Grid>

            </div>
        </Box>
    )
}
export default Transform;