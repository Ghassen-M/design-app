import DispositionCSS from './disposition.module.css';
import {Box,Grid,Typography} from '@mui/material'
import {RiBringForward,RiBringToFront,RiSendBackward,RiSendToBack} from 'react-icons/ri'
const Disposition = () => {
    return (
        <Box className={DispositionCSS.box}>
            <div className={DispositionCSS.disposition}>
                <Grid container>
                    <Grid item xs={5}>
                        <Typography>Disposition</Typography>
                    </Grid>
                    <Grid item xs={7} className={DispositionCSS.elementCentering}>
                        <a href="#" className={DispositionCSS.optionLink}>
                            <RiBringForward className={DispositionCSS.iconSize}/>
                            <span>Mise en avant</span>
                        </a>
                    </Grid>
                    <Grid item xs={5}/>    
                    <Grid item xs={7} className={DispositionCSS.elementCentering}>  
                        <a href="#" className={DispositionCSS.optionLink}>
                            <RiBringToFront className={DispositionCSS.iconSize}/>
                            <span>En avant-plan</span>
                        </a>
                    </Grid>
                    <Grid item xs={5}/>
                    <Grid item xs={7} className={DispositionCSS.elementCentering}>
                        <a href="#" className={DispositionCSS.optionLink}>
                        <RiSendBackward className={DispositionCSS.iconSize}/>
                            <span>Mise en arrière</span>
                        </a>
                    </Grid>
                    <Grid item xs={5}/>
                    <Grid item xs={7} className={DispositionCSS.elementCentering}>
                        <a href="#" className={DispositionCSS.optionLink}>
                        <RiSendToBack className={DispositionCSS.iconSize}/>
                            <span>En arrière-plan</span>
                        </a>
                    </Grid>
                </Grid>
            </div>
        </Box>
    )
}
export default Disposition;