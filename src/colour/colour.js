import ColourCSS from './colour.module.css';
import { Select,MenuItem,Box,Grid,Typography,FormControl} from '@mui/material';

const Colour=()=>{
    return (
        <>
        <Box className={ColourCSS.box}>
            <div className={ColourCSS.colour}>
                <Grid container>
                    <Grid item xs={4}  className={ColourCSS.labelPositioning}>
                            <Typography>Couleur</Typography>
                        </Grid>
                        <Grid item xs={8}  className={ColourCSS.elementCentering}>
                            <a href="#" className={ColourCSS.colorLink}>
                                <span className={ColourCSS.colorArea}></span>
                            </a>
                        </Grid>
                </Grid>
                <Grid container>
                        <Grid item xs={4}  className={ColourCSS.labelPositioning}>
                            <Typography>Filtre</Typography>
                        </Grid>
                        <Grid item xs={8}  className={ColourCSS.elementCentering}>
                            <FormControl size="small">
                                <Select value={"normal"} >
                                    <MenuItem value={"normal"}>normal</MenuItem>
                                    <MenuItem value={"multiply"}>multiply</MenuItem>
                                    <MenuItem value={"screen"}>screen</MenuItem>
                                    <MenuItem value={"overlay"}>overlay</MenuItem>
                                    <MenuItem value={"darken"}>darken</MenuItem>
                                    <MenuItem value={"lighten"}>lighten</MenuItem>
                                    <MenuItem value={"color-dodge"}>color-dodge</MenuItem>
                                    <MenuItem value={"color-burn"}>color-burn</MenuItem>
                                    <MenuItem value={"hard-light"}>hard-light</MenuItem>
                                    <MenuItem value={"soft-light"}>soft-light</MenuItem>
                                    <MenuItem value={"difference"}>difference</MenuItem>
                                    <MenuItem value={"exclusion"}>exclusion</MenuItem>
                                    <MenuItem value={"hue"}>hue</MenuItem>
                                    <MenuItem value={"saturation"}>saturation</MenuItem>
                                    <MenuItem value={"color"}>color</MenuItem>
                                    <MenuItem value={"luminosity"}>luminosity</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                </Grid>
            </div>
        </Box>
        </>
    )
}
export default Colour;