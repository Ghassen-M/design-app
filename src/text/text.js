import TextCSS from './text.module.css';
import { Box,TextField,Select,MenuItem,Checkbox, Typography,Grid,FormControl  } from '@mui/material';
import {FaAlignCenter,FaAlignJustify,FaAlignLeft,FaAlignRight} from 'react-icons/fa';
import {RiTextSpacing,RiTextWrap} from'react-icons/ri';
import {MdStrikethroughS,MdFormatUnderlined,MdFormatItalic} from 'react-icons/md';

const Text = () => {
    return (
        <Box className={TextCSS.box}>
            <div className={TextCSS.text}>
                    <Typography>Texte</Typography>
                    <Grid container className={TextCSS.elementSpacing}>
                        <Grid item xs={5}  className={TextCSS.positioning}>
                            <MdFormatItalic className={TextCSS.styleWidget}/>
                            <MdFormatUnderlined className={TextCSS.styleWidget}/>
                            <MdStrikethroughS className={TextCSS.styleWidget}/>
                        </Grid>
                        <Grid item xs={3}/>
                        <Grid item xs={4} className={TextCSS.elementCentering}>
                        <TextField
                            inputProps={{
                            style: {
                                padding: 5
                            },
                            min:'1'
                            }}
                            type="number"
                            min={1}
                            id="outlined-helperText"
                            defaultValue="20"
                            size='small'
                            className={TextCSS.smallField}
                        /> 
                        </Grid>
                    </Grid>
                    <Grid container className={TextCSS.elementSpacing}>
                        <Grid item xs={12}>
                        <FormControl size="small" className={TextCSS.selectionWidth} >
                            <Select value={"Alegreya Sans"} >
                                <MenuItem value={"Alegreya Sans"}>Alegreya Sans</MenuItem>
                                <MenuItem value={"Alegreya"}>Alegreya</MenuItem>
                                <MenuItem value={"AmericanTypewriter, Georgia, serif"}>American Typewriter</MenuItem>
                                <MenuItem value={"Anonymous Pro"}>Anonymous Pro</MenuItem>
                                <MenuItem value={"Archivo Narrow"}>Archivo Narrow</MenuItem>
                                <MenuItem value={"Arvo"}>Arvo</MenuItem>
                                <MenuItem value={"Bitter"}>Bitter</MenuItem>
                                <MenuItem value={"Cardo"}>Cardo</MenuItem>
                                <MenuItem value={"Chivo"}>Chivo</MenuItem>
                                <MenuItem value={"Crimson Text"}>Crimson Text</MenuItem>
                                <MenuItem value={"Domine"}>Domine</MenuItem>
                                <MenuItem value={"Fira Sans"}>Fira Sans</MenuItem>
                                <MenuItem value={"Georgia, serif"}>Georgia</MenuItem>
                            <MenuItem value={"&quot;Helvetica Neue&quot;, Arial, sans-serif"}>Helvetica Neue</MenuItem>
                                <MenuItem value={"Helvetica, Arial, sans-serif"}>Helvetica</MenuItem>
                            <MenuItem value={"Inconsolata"}>Inconsolata</MenuItem>
                                <MenuItem value={"Karla"}>Karla</MenuItem>
                                <MenuItem value={"Lato"}>Lato</MenuItem>
                                <MenuItem value={"Libre Baskerville"}>Libre Baskerville</MenuItem>
                                <MenuItem value={"Lora"}>Lora</MenuItem>
                                <MenuItem value={"Merriweather"}>Merriweather</MenuItem>
                                <MenuItem value={"Monaco, consolas, monospace"}>Monaco</MenuItem>
                                <MenuItem value={"Montserrat"}>Montserrat</MenuItem>
                                <MenuItem value={"Neuton"}>Neuton</MenuItem>
                                <MenuItem value={"Old Standard TT"}>Old Standard TT</MenuItem>
                                <MenuItem value={"Open Sans"}>Open Sans</MenuItem>
                                <MenuItem value={"PT Serif"}>PT Serif</MenuItem>
                                <MenuItem value={"Playfair Display"}>Playfair Display</MenuItem>
                                <MenuItem value={"Poppins"}>Poppins</MenuItem>
                                <MenuItem value={"Roboto Slab"}>Roboto Slab</MenuItem>
                                <MenuItem value={"Roboto"}>Roboto</MenuItem>
                                <MenuItem value={"Source Pro"}>Source Pro</MenuItem>
                                <MenuItem value={"Source Sans Pro"}>Source Sans Pro</MenuItem>
                                <MenuItem value={"Varela Round"}>Varela Round</MenuItem>
                                <MenuItem value={"Work Sans"}>Work Sans</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                        </Grid>
                    <Grid container className={TextCSS.elementSpacing}>
                        <Grid item xs={12}>
                            <TextField variant="outlined" value={"Ajouter du texte..."} className={TextCSS.field}/>
                        </Grid>
                    </Grid>

                <div className={TextCSS.horizontalBar}>
                    <Grid container className={TextCSS.positioning}>
                    <Grid item xs={5}>
                    <Typography>Ajustement</Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <RiTextSpacing className={TextCSS.styleWidget} />
                        <RiTextWrap className={TextCSS.styleWidget} />
                    </Grid>
                    </Grid>

                </div>
                <div className={TextCSS.horizontalBar}>
                    <Grid container className={TextCSS.positioning}>
                        <Grid item xs={5}>
                            <Typography>Note</Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <Checkbox size="small" />
                        </Grid>
                    </Grid>
                </div>
                <div className={TextCSS.horizontalBar}>
                    <Grid container className={TextCSS.positioning}>
                        <Grid item xs={5}>
                            <Typography>Arrondi</Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <Checkbox size="small" />
                        </Grid>
                    </Grid>
                </div>
                <div className={TextCSS.horizontalBar}>
                    <Grid container className={TextCSS.positioning}>
                        <Grid item xs={5}>
                            <Typography>Alignement</Typography>
                        </Grid>
                        <Grid item xs={6} className={TextCSS.elementAlignment}>
                            <FaAlignLeft className={TextCSS.preselectedWidget}/>
                            <FaAlignCenter className={TextCSS.styleWidget}/>
                            <FaAlignRight className={TextCSS.styleWidget}/>
                            <FaAlignJustify className={TextCSS.styleWidget}/>
                        </Grid>
                    </Grid>
                </div>

                <div className={TextCSS.horizontalBar}>
                    <Grid container >
                        <Grid item xs={5} className={TextCSS.positioning}>
                            <Typography>Interligne</Typography>
                        </Grid>
                            <Grid item xs={6} className={TextCSS.elementAlignment}>
                            <TextField 
                                inputProps={{
                                style: {
                                    padding: 5
                                    },
                                min: 0 }}
                type='number'
                    value='1'
                    className={TextCSS.smallField}
                />
                                <span className={TextCSS.unit}>pt</span>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Box>
    )
}
export default Text;