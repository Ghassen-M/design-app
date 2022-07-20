import TransformCSS from './transform.module.css';
const Transform = () => {
    return (
        <>
            <div className={TransformCSS.transform}>
                <div className={TransformCSS.horizontalBar}>
                    <div className={TransformCSS.label}>Taille</div>
                    <div className={TransformCSS.boxArea}>
                        <input className={TransformCSS.inputBox} value="200" />
                        <div className={TransformCSS.boxTag}>largeur</div>
                    </div>
                    <div className={TransformCSS.boxArea}>
                        <input className={TransformCSS.inputBox} value="50" />
                        <div className={TransformCSS.boxTag}>hauteur</div>
                    </div>
                </div>
                <div className={TransformCSS.horizontalBar}>
                    <div className={TransformCSS.label}>Position</div>
                    <div className={TransformCSS.boxArea}>
                        <input className={TransformCSS.inputBox} value="203" />
                        <div className={TransformCSS.boxTag}>x</div>
                    </div>
                    <div className={TransformCSS.boxArea}>
                        <input className={TransformCSS.inputBox} value="157" />
                        <div className={TransformCSS.boxTag}>y</div>
                    </div>
                </div>
                <div className={TransformCSS.horizontalBar}>
                    <div className={TransformCSS.label}>Rotation</div>
                    <div className={TransformCSS.boxArea}>
                        <input className={TransformCSS.inputBox} value="0" />
                        <div className={TransformCSS.boxTag}>angle</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Transform;