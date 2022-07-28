import ElementsCSS from './elements.module.css';
import {Box,Grid,Typography,Tooltip} from '@mui/material'
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
                                <svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                        </Tooltip>
                        <Tooltip title="Sélectionner">
                        <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>
                                <svg className={ElementsCSS.buttonArea} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                        </Tooltip>
                        <Tooltip title="Supprimer">
                        <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>
                                <svg className={ElementsCSS.buttonArea} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
                                    </path>
                                </svg>
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
                                <svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                        </Tooltip>
                        <Tooltip title="Sélectionner">
                        <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>
                                <svg className={ElementsCSS.buttonArea} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                        </Tooltip>
                        <Tooltip title="Supprimer">
                            <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                                <span>
                                    <svg className={ElementsCSS.buttonArea} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
                                        </path>
                                    </svg>
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
                                    <svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Sélectionner">
                        <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>
                                <svg className={ElementsCSS.buttonArea} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                        </Tooltip>
                        <Tooltip title="Supprimer">
                            <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                                <span>
                                    <svg className={ElementsCSS.buttonArea} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
                                        </path>
                                    </svg>
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
                                <svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                    </Tooltip>
                    <Tooltip title="Sélectionner">
                        <button type="button"  className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>
                                <svg className={ElementsCSS.buttonArea} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                    </Tooltip>
                    <Tooltip title="Supprimer">
                        <button type="button" className={ElementsCSS.MuiButtonBaseRoot}>
                            <span>
                                <svg className={ElementsCSS.buttonArea} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
                                    </path>
                                </svg>
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