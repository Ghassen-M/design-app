import ElementsCSS from './elements.module.css';
import {Box} from '@mui/material'
const Elements = () => {
    return (
        <Box borderBottom={3} borderColor={"#007EFD"} sx={{ boxShadow: 3, mb : 2 }} >
            <div className={ElementsCSS.elements}>
                <div className={ElementsCSS.elementsArea}>
                    <br />
                    <span className={ElementsCSS.label}>Éléments:</span>
                    <nav className={`${ElementsCSS.MuiListRoot} ${ElementsCSS.elementsList}`}>
                        <li className={ElementsCSS.MuiListItemContainer}>
                            <div className={`${ElementsCSS.MuiListItemRoot} ElementsCSS.WithStyles(ForwardRef(ListItem))Root-1 ${ElementsCSS.MuiListItemGutters} ${ElementsCSS.MuiListItemSecondaryAction}`} style={{ "backgroundColor": "rgba(0, 0, 0, 0.08" }}>
                                <div className={`${ElementsCSS.MuiListItemTextRoot} ${ElementsCSS.first}`}>
                                    <span className={`${ElementsCSS.MuiTypographyRoot} ${ElementsCSS.MuiListItemTextPrimary} ${ElementsCSS.MuiTypographyBody1} ${ElementsCSS.MuiTypographyDisplayBlock}`}>1.
                                        Rectangle</span>
                                </div>
                            </div>
                            <div className={ElementsCSS.MuiListItemSecondaryActionRoot}>
                                <button className={`${ElementsCSS.MuiButtonBaseRoot} ${ElementsCSS.MuiIconButtonRoot} ${ElementsCSS.MuiIconButtonSizeSmall}`} tabIndex="0" type="button">
                                    <span className={ElementsCSS.MuiIconButtonLabel}>
                                        <svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className={ElementsCSS.MuiTouchRippleRoot}>

                                    </span>
                                </button>
                                <button className={`${ElementsCSS.MuiButtonBaseRoot} ${ElementsCSS.MuiIconButtonRoot} ${ElementsCSS.MuiIconButtonSizeSmall}`} tabIndex="0" type="button" title="Sélectionner">
                                    <span className={ElementsCSS.MuiIconButtonLabel}><svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z">
                                        </path>
                                    </svg>
                                    </span>
                                    <span className={ElementsCSS.MuiTouchRippleRoot}></span>
                                </button>
                                <button className={`${ElementsCSS.MuiButtonBaseRoot} ${ElementsCSS.MuiIconButtonRoot} ${ElementsCSS.MuiIconButtonSizeSmall} ${ElementsCSS.MuiIconButtonEdgeEnd}`} tabIndex="0" type="button" title="Supprimer"><span className={ElementsCSS.MuiIconButtonLabel}><svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
                                    </path>
                                </svg>
                                </span>
                                    <span className={ElementsCSS.MuiTouchRippleRoot}></span>
                                </button>
                            </div>
                        </li>
                        <li className={ElementsCSS.MuiListItemContainer}>
                            <div className={`${ElementsCSS.MuiListItemRoot} ElementsCSS.WithStyles(ForwardRef(ListItem))Root-1 ${ElementsCSS.MuiListItemGutters} ${ElementsCSS.MuiListItemSecondaryAction}`}>
                                <div className={ElementsCSS.MuiListItemTextRoot}>
                                    <span className={`${ElementsCSS.MuiTypographyRoot} ${ElementsCSS.MuiListItemTextPrimary} ${ElementsCSS.MuiTypographyBody1} ${ElementsCSS.MuiTypographyDisplayBlock}`}>2.
                                        Ellipse</span>
                                </div>
                            </div>
                            <div className={ElementsCSS.MuiListItemSecondaryActionRoot}><button className={`${ElementsCSS.MuiButtonBaseRoot} ${ElementsCSS.MuiIconButtonRoot} ${ElementsCSS.MuiIconButtonSizeSmall}`} tabIndex="0" type="button" title="Re-centrer"><span className={ElementsCSS.MuiIconButtonLabel}><svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
                                </path>
                            </svg>
                            </span>
                                <span className={ElementsCSS.MuiTouchRippleRoot}>
                                </span>
                            </button>
                                <button className={`${ElementsCSS.MuiButtonBaseRoot} ${ElementsCSS.MuiIconButtonRoot} ${ElementsCSS.MuiIconButtonSizeSmall}`} tabIndex="0" type="button" title="Sélectionner"><span className={ElementsCSS.MuiIconButtonLabel}><svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z">
                                    </path>
                                </svg>
                                </span>
                                    <span className={ElementsCSS.MuiTouchRippleRoot}></span>
                                </button>
                                <button className={`${ElementsCSS.MuiButtonBaseRoot} ${ElementsCSS.MuiIconButtonRoot} ${ElementsCSS.MuiIconButtonSizeSmall} ${ElementsCSS.MuiIconButtonEdgeEnd}`} tabIndex="0" type="button"><span className={ElementsCSS.MuiIconButtonLabel}><svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
                                    </path>
                                </svg>
                                </span>
                                    <span className={ElementsCSS.MuiTouchRippleRoot}></span>
                                </button>
                            </div>
                        </li>
                        <li className={ElementsCSS.MuiListItemContainer}>
                            <div className={`${ElementsCSS.MuiListItemRoot} ElementsCSS.WithStyles(ForwardRef(ListItem))Root-1 ${ElementsCSS.MuiListItemGutters} ${ElementsCSS.MuiListItemSecondaryAction}`}>
                                <div className={ElementsCSS.MuiListItemTextRoot}>
                                    <span className={`${ElementsCSS.MuiTypographyRoot} ${ElementsCSS.MuiListItemTextPrimary} ${ElementsCSS.MuiTypographyBody1} ${ElementsCSS.MuiTypographyDisplayBlock}`}>3.
                                        Polygone</span>
                                </div>
                            </div>
                            <div className={ElementsCSS.MuiListItemSecondaryActionRoot}>
                                <button className={`${ElementsCSS.MuiButtonBaseRoot} ${ElementsCSS.MuiIconButtonRoot} ${ElementsCSS.MuiIconButtonSizeSmall}`} tabIndex="0" type="button"><span className={ElementsCSS.MuiIconButtonLabel}><svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
                                    </path>
                                </svg>
                                </span>
                                    <span className={ElementsCSS.MuiTouchRippleRoot}>
                                    </span>
                                </button>
                                <button className={`${ElementsCSS.MuiButtonBaseRoot} ${ElementsCSS.MuiIconButtonRoot} ${ElementsCSS.MuiIconButtonSizeSmall}`} tabIndex="0" type="button" title="Sélectionner"><span className={ElementsCSS.MuiIconButtonLabel}><svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z">
                                    </path>
                                </svg>
                                </span>
                                    <span className={ElementsCSS.MuiTouchRippleRoot}>

                                    </span>
                                </button>
                                <button className={`${ElementsCSS.MuiButtonBaseRoot} ${ElementsCSS.MuiIconButtonRoot} ${ElementsCSS.MuiIconButtonSizeSmall} ${ElementsCSS.MuiIconButtonEdgeEnd}`} tabIndex="0" type="button" title="Supprimer"><span className={ElementsCSS.MuiIconButtonLabel}><svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
                                    </path>
                                </svg>
                                </span>
                                    <span className={ElementsCSS.MuiTouchRippleRoot}>
                                    </span>
                                </button>
                            </div>
                        </li>
                        <li className={ElementsCSS.MuiListItemContainer}>
                            <div className={`${ElementsCSS.MuiListItemRoot} WithStyles(ForwardRef(ListItem))Root-1 ${ElementsCSS.MuiListItemGutters} ${ElementsCSS.MuiListItemSecondaryAction} ${ElementsCSS.MuiSelected}`}>
                                <div className={ElementsCSS.MuiListItemTextRoot}>
                                    <span className={`${ElementsCSS.MuiTypographyRoot} ${ElementsCSS.MuiListItemTextPrimary} ${ElementsCSS.MuiTypographyBody1} ${ElementsCSS.MuiTypographyDisplayBlock}`}>4.
                                        Texte</span>
                                </div>
                            </div>
                            <div className={ElementsCSS.MuiListItemSecondaryActionRoot}>
                                <button className={`${ElementsCSS.MuiButtonBaseRoot} ${ElementsCSS.MuiIconButtonRoot} ${ElementsCSS.MuiIconButtonSizeSmall}`} tabIndex="0" type="button" title="Re-centrer"><span className={ElementsCSS.MuiIconButtonLabel}><svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
                                    </path>
                                </svg>
                                </span>
                                    <span className={ElementsCSS.MuiTouchRippleRoot}>

                                    </span>
                                </button>
                                <button className={`${ElementsCSS.MuiButtonBaseRoot} ${ElementsCSS.MuiIconButtonRoot} ${ElementsCSS.MuiIconButtonSizeSmall}`} tabIndex="0" type="button" title="Sélectionner"><span className={ElementsCSS.MuiIconButtonLabel}><svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z">
                                    </path>
                                </svg>
                                </span>
                                    <span className={ElementsCSS.MuiTouchRippleRoot}>
                                    </span>
                                </button>
                                <button className={`${ElementsCSS.MuiButtonBaseRoot} ${ElementsCSS.MuiIconButtonRoot} ${ElementsCSS.MuiIconButtonSizeSmall} ${ElementsCSS.MuiIconButtonEdgeEnd}`} tabIndex="0" type="button" title="Supprimer"><span className={ElementsCSS.MuiIconButtonLabel}><svg stroke="currentColor" className={ElementsCSS.buttonArea} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
                                    </path>
                                </svg>
                                </span>
                                    <span className={ElementsCSS.MuiTouchRippleRoot}>
                                    </span>
                                </button>
                            </div>
                        </li>
                    </nav >
                </div >
            </div >
        </Box>
    )
}
export default Elements;