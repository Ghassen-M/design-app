import DataCSS from './data.module.css';
import {Box,Grid,Typography,Select,MenuItem,FormControl} from '@mui/material'
const Data = () => {
    return (
        <Box className={DataCSS.box} >
                <div className={DataCSS.data}>
                    <Grid container>
                        <Grid item xs={5} className={DataCSS.labelPosition} >       
                            <Typography>Données</Typography>
                        </Grid>
                        <Grid item xs={7} className={DataCSS.elementCentering}>
                                <FormControl size="small">
                                    <Select value={"Aucune"}>
                                        <MenuItem value={"Aucune"}>Aucune</MenuItem>
                                        <MenuItem value={"Autre"}>Autre ...</MenuItem>
                                    </Select>
                                </FormControl>
                        </Grid>
                        <div className={DataCSS.horizontalBar}>
                            <Grid item xs={12}>
                                <a className={DataCSS.optionLink}>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size="18" className={DataCSS.optionLogo} height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z">
                                        </path>
                                    </svg> 
                                    <span>Charger une seule info produit</span>
                                </a>
                            </Grid>
                            <Grid item xs={12}>
                                <a className={DataCSS.optionLink}>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size="18" className={DataCSS.optionLogo} height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z">
                                            </path>
                                        </svg>
                                        <span>Charger toutes les infos produit</span>
                                </a>
                            </Grid>
                        </div>
                    </Grid>
                </div>
        </Box>
    )
}
export default Data;