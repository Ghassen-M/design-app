import DataCSS from './data.module.css';
import {Box} from '@mui/material'
const Data = () => {
    return (
        <Box borderBottom={3} borderColor={"#007EFD"} sx={{ boxShadow: 3, mb : 2 }} >
            <div className="metadat-loader">
                <div className={DataCSS.data}>
                    <div className={DataCSS.horizentalBar}>
                        <div className={DataCSS.leftSpace}>Données</div>
                        <div className={DataCSS.options}>
                            <select className={DataCSS.selection}>
                                <option value="">Aucune</option>
                                <option value="">Autre ...</option>
                            </select>
                        </div>
                    </div>
                    <div className={DataCSS.horizentalBar}>
                        <div className={DataCSS.leftspace}></div>
                        <div className={DataCSS.options}>
                            <a href="#" className={DataCSS.optionLink}>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size="18" className={DataCSS.optionLogo} height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z">
                                    </path>
                                </svg> <span>Charger une seule info produit</span></a></div>
                        <div className={DataCSS.options}>
                            <a href="#" className={DataCSS.optionLink}>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size="18" className={DataCSS.optionLogo} height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z">
                                    </path>
                                </svg> <span>Charger toutes les infos produit</span></a></div>
                    </div>
                </div>
            </div>
        </Box>
    )
}
export default Data;