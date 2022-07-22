import RightCSS from './right.module.css';
import Display from '../display/display';
import Data from '../data/data';
import Transform from '../Transform/transform';
import Text from '../text/text';
import Color from '../color/color';
import Disposition from '../disposition/disposition';
import Elements from '../elements/elements';
import { Box,FormControl,Input,InputAdornment,InputLabel,FormHelperText } from '@mui/material';
const Right = () => {
    return (
        <>
            <div className={RightCSS.right}>
                <div className={RightCSS.rightPanel}>
                    <Display />
                
                    <Data />

                   
                    <Transform />

                   
                    <Text />

                   
                    <Color />

                   
                    <Disposition />

                   
                    <Elements />


                </div>
            </div>
        </>
    )
}
export default Right;