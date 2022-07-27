import DispositionCSS from './disposition.module.css';
import {Box,Grid,Typography} from '@mui/material'
const Disposition = () => {
    return (
        <Box sx={{ borderBottom:3, borderColor:"#EEEFF5", boxShadow: 3, mb : 2,padding:"10px" }} >
            <div className={DispositionCSS.disposition}>
                <Grid container>
                {/*<div className={DispositionCSS.horizontalArea}>*/}
                    <Grid item xs={5}>
                    <Typography>Disposition</Typography>
                    </Grid>
                    {/*<div className={DispositionCSS.leftArea}>Disposition</div>*/}
                    {/*<div className={DispositionCSS.rightArea}>*/}
                        <Grid item xs={7}>
                        <a href="#" className={DispositionCSS.optionLink}>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={DispositionCSS.widget}>
                                <g>
                                    <rect x="7" y="7" width="13" height="13" fill="white" strokeWidth="1" stroke="black"></rect>
                                    <rect x="1" y="1" width="13" height="13" fill="#ababab" stroke="black" strokeWidth="1"></rect>
                                </g>
                            </svg>
                            <span>Mise en avant</span>
                        </a>
                        </Grid>
                        <Grid item xs={5}/>    
                        <Grid item xs={7}>  
                        <a href="#" className={DispositionCSS.optionLink}>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={DispositionCSS.widget}>
                                <g>
                                    <rect x="7" y="7" width="13" height="13" fill="white" strokeWidth="1" stroke="black"></rect>
                                    <rect x="1" y="1" width="13" height="13" fill="#ababab" stroke="black" strokeWidth="1"></rect>
                                </g>
                            </svg>
                            <span>En avant-plan</span>
                        </a>
                        </Grid>
                        <Grid item xs={5}/>
                        <Grid item xs={7}>
                        <a href="#" className={DispositionCSS.optionLink}>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={DispositionCSS.widget}>
                                <g>
                                    <rect x="7" y="7" width="13" height="13" fill="#ababab" strokeWidth="1" stroke="black"></rect>
                                    <rect x="1" y="1" width="13" height="13" fill="white" stroke="black" strokeWidth="1"></rect>
                                </g>
                            </svg>
                            <span>Mise en arrière</span>
                        </a>
                        </Grid>
                        <Grid item xs={5}/>
                        <Grid item xs={7}>
                        <a href="#" className={DispositionCSS.optionLink}>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={DispositionCSS.widget}>
                                <g>
                                    <rect x="7" y="7" width="13" height="13" fill="#ababab" strokeWidth="1" stroke="black"></rect>
                                    <rect x="1" y="1" width="13" height="13" fill="white" stroke="black" strokeWidth="1"></rect>
                                </g>
                            </svg><span>En arrière-plan</span>
                        </a>
                        </Grid>
                    {/*</div>*/}
                {/*</div>*/}
                </Grid>
            </div>
        </Box>
    )
}
export default Disposition;