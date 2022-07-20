import ColorCSS from './color.module.css';
const Color = () => {
    return (
        <>
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
                        <select className={ColorCSS.filterSelection}>
                            <option value="normal">normal</option>
                            <option value="multiply">multiply</option>
                            <option value="screen">screen</option>
                            <option value="overlay">overlay</option>
                            <option value="darken">darken</option>
                            <option value="lighten">lighten</option>
                            <option value="color-dodge">color-dodge</option>
                            <option value="color-burn">color-burn</option>
                            <option value="hard-light">hard-light</option>
                            <option value="soft-light">soft-light</option>
                            <option value="difference">difference</option>
                            <option value="exclusion">exclusion</option>
                            <option value="hue">hue</option>
                            <option value="saturation">saturation</option>
                            <option value="color">color</option>
                            <option value="luminosity">luminosity</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Color;