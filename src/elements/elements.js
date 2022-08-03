import ElementsCSS from './elements.module.css';
import {Box,Grid,Typography,Tooltip} from '@mui/material';
import {MdDelete,MdCenterFocusWeak,MdOutlineTabUnselected} from 'react-icons/md';
const Elements = () => {
    return (
        <Box className={ElementsCSS.box}>
            <Typography className={ElementsCSS.boxTitle}>Éléments:</Typography>
            <Grid container>
                <Grid container className={ElementsCSS.selectedElement}>
                    <Grid item xs={7}  className={ElementsCSS.elementStart}>
                        <Typography variant="subtitle1">1. Rectangle</Typography>
                    </Grid>
                    <Grid item xs={4} className={ElementsCSS.buttonPositioning}>
                        <Tooltip title="Centrer">
                        <button type="button" className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>
                                <MdCenterFocusWeak className={ElementsCSS.buttonArea}/>
                            </span>
                        </button>
                        </Tooltip>
                        <Tooltip title="Sélectionner">
                        <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>      
                                <MdOutlineTabUnselected className={ElementsCSS.buttonArea}/>
                            </span>
                        </button>
                        </Tooltip>
                        <Tooltip title="Supprimer">
                        <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>
                                <MdDelete className={ElementsCSS.buttonArea}/>
                            </span>
                        </button>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={1}/>
                </Grid>
                <Grid container>
                    <Grid item xs={7}  className={ElementsCSS.elementStart}>
                        <Typography variant="subtitle1">2. Ellipse</Typography>
                    </Grid>
                    <Grid item xs={4} className={ElementsCSS.buttonPositioning}>
                        <Tooltip title="Centrer">
                        <button type="button" className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>
                                <MdCenterFocusWeak className={ElementsCSS.buttonArea}/>
                            </span>
                        </button>
                        </Tooltip>
                        <Tooltip title="Sélectionner">
                        <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>
                                <MdOutlineTabUnselected className={ElementsCSS.buttonArea}/>
                            </span>
                        </button>
                        </Tooltip>
                        <Tooltip title="Supprimer">
                            <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                                <span>
                                    <MdDelete className={ElementsCSS.buttonArea}/>
                                </span>
                            </button>
                        </Tooltip>
  
                    </Grid>
                    <Grid item xs={1}/>
                </Grid>
                <Grid container>
                    <Grid item xs={7}  className={ElementsCSS.elementStart}>
                        <Typography variant="subtitle1">3. Polygone</Typography>
                    </Grid>
                    <Grid item xs={4} className={ElementsCSS.buttonPositioning}>
                        <Tooltip title="Centrer">
                            <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                                <span>
                                    <MdCenterFocusWeak className={ElementsCSS.buttonArea}/>
                                </span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Sélectionner">
                        <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>
                                <MdOutlineTabUnselected className={ElementsCSS.buttonArea}/>
                            </span>
                        </button>
                        </Tooltip>
                        <Tooltip title="Supprimer">
                            <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                                <span>
                                    <MdDelete className={ElementsCSS.buttonArea}/>
                                </span>
                            </button>
                        </Tooltip>

                    </Grid>
                    <Grid item xs={1}/>
                </Grid>
            <Grid container>
                <Grid item xs={7}  className={ElementsCSS.elementStart}>
                        <Typography variant="subtitle1">4. Texte</Typography>
                </Grid>
                <Grid item xs={4} className={ElementsCSS.buttonPositioning}>
                    <Tooltip title="Centrer">
                        <button type="button" className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>
                                <MdCenterFocusWeak className={ElementsCSS.buttonArea}/>
                            </span>
                        </button>
                    </Tooltip>
                    <Tooltip title="Sélectionner">
                        <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>
                                <MdOutlineTabUnselected className={ElementsCSS.buttonArea}/>
                            </span>
                        </button>
                    </Tooltip>
                    <Tooltip title="Supprimer">
                        <button type="button" className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>
                                <MdDelete className={ElementsCSS.buttonArea}/>
                            </span>
                        </button>
                    </Tooltip>
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        </Grid>
    </Box>
    )
}
export default Elements;