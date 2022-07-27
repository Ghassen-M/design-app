import DataCSS from './data.module.css';
import {Box,Grid,Typography,Select,MenuItem} from '@mui/material'
const Data = () => {
    return (
        <Box sx={{ borderBottom:3, borderColor:"#EEEFF5", boxShadow: 2, mb : 2 }} >
            <div className="metadat-loader">
                <div className={DataCSS.data}>
                    <Grid container sx={{mt:"10px"}}>
                    {/*<div className={DataCSS.horizentalBar}>*/}
                        <Grid item xs={4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                            
                        <Typography>Données</Typography>
                        </Grid>
                        <Grid item xs={8} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <div className={DataCSS.options}>
                            <Select value={"Aucune"} className={DataCSS.selection} sx={{mt:"5px",mb:"5px", padding:"3px 3px 3px 5px",height:30,width:110}}>
                                <MenuItem value={"Aucune"}>Aucune</MenuItem>
                                <MenuItem value={"Autre"}>Autre ...</MenuItem>
                            </Select>
                        </div>
                        </Grid>
                    {/*</div>*/}
                    <div className={DataCSS.horizentalBar}>
                        <div className={DataCSS.leftspace}></div>
                        <div className={DataCSS.options}>
                            <Grid item xs={12}>
                            <a href="#" className={DataCSS.optionLink}>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size="18" className={DataCSS.optionLogo} height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z">
                                    </path>
                                </svg> 
                                <span>Charger une seule info produit</span>
                                </a>
                            </Grid>
                                </div>
                        <div className={DataCSS.options}>
                            <Grid item xs={12}>
                            <a href="#" className={DataCSS.optionLink}>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size="18" className={DataCSS.optionLogo} height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z">
                                    </path>
                                </svg>
                                <span>Charger toutes les infos produit</span>
                                </a>
                            </Grid>
                                </div>
                    </div>
                    </Grid>
                </div>
            </div>
        </Box>
    )
}
export default Data;