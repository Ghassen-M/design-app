import TransformCSS from './transform.module.css';
import { Box,TextField,InputAdornment,FormControl,FilledInput,FormHelperText,Input  } from '@mui/material';

const Transform = () => {
    return (
      <Box borderBottom={3} borderColor={"#007EFD"} sx={{ boxShadow: 3, mb : 2 }} >
            <div className={TransformCSS.transform}>
                <div className={TransformCSS.horizontalBar}>
                    <div className={TransformCSS.label}>Taille</div>
                    <div className={TransformCSS.boxArea}>
          <Input 
          style={{width: 50,padding: "3px 5px", marginRight:"5px", float:"left"}}
            value="200"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
                  <FormHelperText>largeur</FormHelperText>

                        {/*<input className={TransformCSS.inputBox} value="200" />
                        <div className={TransformCSS.boxTag}>largeur</div>*/}
                    </div>
                    <div className={TransformCSS.boxArea}>
                    <Input 
          style={{width: 50,padding: "3px 5px", marginRight:"5px", float:"left"}}
            value="50"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
                  <FormHelperText>hauteur</FormHelperText>
                  {/*}
                        <input className={TransformCSS.inputBox} value="50" />
        <div className={TransformCSS.boxTag}>hauteur</div> */}
                    </div>
                </div>
                <div className={TransformCSS.horizontalBar}>
                    <div className={TransformCSS.label}>Position</div>
                    <div className={TransformCSS.boxArea}>
                    <Input 
          style={{width: 50,padding: "3px 5px", marginRight:"5px", float:"left"}}
            value="203"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
                  <FormHelperText>x</FormHelperText>
                  {/*
                        <input className={TransformCSS.inputBox} value="203" />
        <div className={TransformCSS.boxTag}>x</div> */}
                    </div>
                    <div className={TransformCSS.boxArea}>
                    <Input 
          style={{width: 50,padding: "3px 5px", marginRight:"5px", float:"left"}}
            value="157"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
                  <FormHelperText>y</FormHelperText>
                        {/*<input className={TransformCSS.inputBox} value="157" />
                        <div className={TransformCSS.boxTag}>y</div>*/}
                    </div>
                </div>
                <div className={TransformCSS.horizontalBar}>
                    <div className={TransformCSS.label}>Rotation</div>
                    <div className={TransformCSS.boxArea}>
                    <Input 
          style={{width: 50,padding: "3px 5px", marginRight:"5px", float:"left"}}
            value="0"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
                  <FormHelperText>angle</FormHelperText>
                  {/*
                        <input className={TransformCSS.inputBox} value="0" />
                        <div className={TransformCSS.boxTag}>angle</div>
        */}
                    </div>
                </div>
            </div>
        </Box>
    )
}
export default Transform;