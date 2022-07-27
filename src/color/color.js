import ColorCSS from './color.module.css';
import { Select,MenuItem,Box  } from '@mui/material';

const Color = () => {
    return (
        <Box sx={{ borderBottom:3, borderColor:"#EEEFF5", boxShadow: 2, mb : 2 }} >
            <div className={ColorCSS.color}>
                <div className={ColorCSS.horizontalBar}>
                    <div className={ColorCSS.label}>Couleur</div>
                    <div className={ColorCSS.rightSpace}>
                        <div>
                            <a href="#" className={ColorCSS.colorLink}>
                                <span className={ColorCSS.colorArea}></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ display: "none" }}></div>
                <div className={ColorCSS.horizontalBar}>
                    <div className={ColorCSS.label}>Filtre</div>
                    <div className={ColorCSS.rightSpace}>
                        <Select value={"normal"} sx={{mt:"5px",mb:"5px", padding:"3px 3px 3px 5px",height:30,width:120}} /*className={ColorCSS.filterSelection}*/>
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
                    </div>
                </div>
            </div>
        </Box>
    )
}
export default Color;