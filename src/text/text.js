import TextCSS from './text.module.css';
const Text = () => {
    return (
        <>
            <div className={TextCSS.text}>
                <div className={TextCSS.horizentalBar}>
                    <div className={TextCSS.label}>Texte</div>
                    <div className={TextCSS.leftInputs}>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={TextCSS.styleWidget}>
                            <g>
                                <path d="M10 4v3h2.21l-3.42 8h-2.79v3h8v-3h-2.21l3.42-8h2.79v-3z"></path>
                            </g>
                        </svg>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={TextCSS.styleWidget}>
                            <g>
                                <path d="M12 17c3.31 0 6-2.69 6-6v-8h-2.5v8c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5v-8h-2.5v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2h-14z">
                                </path>
                            </g>
                        </svg>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={TextCSS.styleWidget}>
                            <svg viewBox="0 -30 650 630">
                                <g>
                                    <path d="M137.901,237.533h212.124c-7.042-4.563-16.084-9.515-27.124-14.845c-19.786-8.754-36.261-15.037-49.396-18.842    c-40.537-11.798-67.089-24.078-79.652-36.829c-12.563-12.753-18.843-26.075-18.843-39.971c0-16.753,6.379-30.649,19.13-41.687    c12.943-11.227,30.264-16.846,51.962-16.846c23.221,0,43.206,8.66,59.958,25.981c10.085,10.656,19.893,30.166,29.406,58.529    l4.004,0.568l23.982,1.712l3.43-0.854c0.951-5.142,1.43-9.419,1.43-12.85c0-11.421-1.334-28.833-4.004-52.246    c-2.101-15.222-4.093-26.457-5.995-33.691c-21.122-6.849-37.973-11.419-50.535-13.701c-22.268-3.617-38.167-5.426-47.674-5.426    c-49.493,0-86.891,12.091-112.209,36.26c-25.505,24.362-38.256,53.774-38.256,88.225c0,17.318,4.568,35.208,13.706,53.672    C127.717,223.26,132.571,230.874,137.901,237.533z">
                                    </path>
                                    <path d="M282.65,310.624c19.605,7.994,32.647,14.756,39.115,20.27c15.42,13.897,23.127,28.838,23.127,44.823    c0,12.946-4.477,25.222-13.422,36.833c-8.562,11.416-20.17,19.612-34.83,24.551c-14.268,5.15-27.501,7.713-39.677,7.713    c-13.893,0-26.455-2.098-37.685-6.283c-11.8-4-21.794-9.418-29.98-16.275c-8.564-7.043-16.18-15.988-22.841-26.84    c-0.953-1.517-2.144-4.09-3.571-7.703c-1.425-3.621-3.571-8.946-6.423-15.985c-2.856-7.046-5.708-13.802-8.564-20.272    l-29.121,0.571v12.562l-0.571,10.571c-0.188,7.228-0.188,13.699,0,19.41c0.378,9.134,0.571,23.982,0.571,44.543v3.713    c0,2.666,0.76,4.754,2.281,6.283c2.855,2.275,9.707,4.945,20.557,7.991l39.969,11.419c15.415,4.381,33.975,6.571,55.673,6.571    c23.414,0,42.723-1.999,57.958-5.999c13.897-3.433,28.444-9.713,43.684-18.843c13.702-8.761,24.078-16.464,31.121-23.134    c9.127-9.322,15.893-19.219,20.27-29.694c7.81-19.222,11.707-39.399,11.707-60.521c0-10.092-0.66-18.843-1.988-26.269H282.65    V310.624z">
                                    </path>
                                    <path d="M509.06,258.374c-1.718-1.711-3.901-2.566-6.57-2.566H9.135c-2.666,0-4.853,0.855-6.567,2.566    C0.859,260.085,0,262.275,0,264.945v18.267c0,2.67,0.855,4.856,2.568,6.571c1.714,1.711,3.905,2.56,6.567,2.56H502.49    c2.669,0,4.853-0.849,6.57-2.56c1.711-1.715,2.566-3.901,2.566-6.571v-18.267C511.626,262.275,510.771,260.085,509.06,258.374z">
                                    </path>
                                </g>
                            </svg>
                        </svg>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={TextCSS.styleWidget}></svg>
                        <input type="number" min="1" className={TextCSS.fontSize} value="20" />
                        <br />
                        <select className={TextCSS.fontSelection}>
                            <option value="Alegreya Sans">Alegreya Sans</option>
                            <option value="Alegreya">Alegreya</option>
                            <option value="AmericanTypewriter, Georgia, serif">American Typewriter</option>
                            <option value="Anonymous Pro">Anonymous Pro</option>
                            <option value="Archivo Narrow">Archivo Narrow</option>
                            <option value="Arvo">Arvo</option>
                            <option value="Bitter">Bitter</option>
                            <option value="Cardo">Cardo</option>
                            <option value="Chivo">Chivo</option>
                            <option value="Crimson Text">Crimson Text</option>
                            <option value="Domine">Domine</option>
                            <option value="Fira Sans">Fira Sans</option>
                            <option value="Georgia, serif">Georgia</option>
                            <option value="&quot;Helvetica Neue&quot;, Arial, sans-serif">Helvetica Neue</option>
                            <option value="Helvetica, Arial, sans-serif">Helvetica</option>
                            <option value="Inconsolata">Inconsolata</option>
                            <option value="Karla">Karla</option>
                            <option value="Lato">Lato</option>
                            <option value="Libre Baskerville">Libre Baskerville</option>
                            <option value="Lora">Lora</option>
                            <option value="Merriweather">Merriweather</option>
                            <option value="Monaco, consolas, monospace">Monaco</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Neuton">Neuton</option>
                            <option value="Old Standard TT">Old Standard TT</option>
                            <option value="Open Sans">Open Sans</option>
                            <option value="PT Serif">PT Serif</option>
                            <option value="Playfair Display">Playfair Display</option>
                            <option value="Poppins">Poppins</option>
                            <option value="Roboto Slab">Roboto Slab</option>
                            <option value="Roboto">Roboto</option>
                            <option value="Source Pro">Source Pro</option>
                            <option value="Source Sans Pro">Source Sans Pro</option>
                            <option value="Varela Round">Varela Round</option>
                            <option value="Work Sans">Work Sans</option>
                        </select>
                        <br />
                        <textarea className={TextCSS.textZone} value={"Ajouter du texte..."}></textarea>
                    </div>
                </div>
                <div className={TextCSS.horizentalBar}>
                    <div className={TextCSS.label}>Ajustement</div>
                    <div className={TextCSS.leftInputs}>
                        <select className={TextCSS.adjustment}>
                            <option value="false">Retour à la ligne auto</option>
                            <option value="true">Ajuster la taile auto</option>
                        </select>
                    </div>
                </div>
                <div className={TextCSS.horizentalBar}>
                    <div className={TextCSS.label}>Note</div>
                    <div className={TextCSS.leftInputs}><input type="checkbox" /></div>
                </div>
                <div style={{ display: "none" }}></div>
                <div className={TextCSS.horizentalBar}>
                    <div className={TextCSS.label}>Arrondi</div>
                    <div className={TextCSS.leftInputs}><input type="checkbox" /></div>
                </div>
                <div style={{ display: "none" }}></div>
                <div className={TextCSS.horizentalBar}>
                    <div className={TextCSS.label}>Alignement</div>
                    <div className={TextCSS.leftInputs}>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={TextCSS.preselectedWidget}>
                            <svg viewBox="0 -10 50 50">
                                <g>
                                    <path d="M19.502,5H0.167V0h19.334L19.502,5L19.502,5z M0.167,8.889v5H31.5v-5H0.167z M19.502,17.777H0.167v5h19.334L19.502,17.777 L19.502,17.777z M0.167,31.668H31.5v-5H0.167V31.668z">
                                    </path>
                                </g>
                            </svg></svg>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={TextCSS.styleWidget}>
                            <svg viewBox="0 -10 50 50">
                                <g>
                                    <path d="M25.501,5H6.167V0h19.334V5z M0.168,8.889v5H31.5v-5H0.168z M6.167,17.777v5h19.334v-5H6.167z M0.168,31.668H31.5v-5H0.168 V31.668z">
                                    </path>
                                </g>
                            </svg></svg><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={TextCSS.styleWidget}><svg viewBox="0 -10 50 50">
                                <g>
                                    <path d="M31.501,0v5H12.167V0H31.501z M0.167,13.889h31.334v-5H0.167V13.889z M12.167,22.777h19.334v-5H12.167V22.777z M0.167,31.668h31.334v-5H0.167V31.668z">
                                    </path>
                                </g>
                            </svg></svg><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={TextCSS.styleWidget}><svg viewBox="0 -65 355 355">
                                <g>
                                    <rect width="230" x="1" y="199" height="33"></rect>
                                    <rect width="230" x="1" y="133" height="33"></rect>
                                    <rect width="230" x="1" y="67" height="33"></rect>
                                    <rect width="230" x="1" height="33"></rect>
                                </g>
                            </svg></svg></div>
                </div>
                <div className={TextCSS.horizentalBar}>
                    <div className={TextCSS.label}>Interligne</div>
                    <div className={TextCSS.leftInputs}>
                        <input type="number" min="0" className={TextCSS.lineSpacing} value="1" /><span>pt</span></div>
                </div>
            </div>

        </>
    )
}
export default Text;