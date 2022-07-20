import DispositionCSS from './disposition.module.css';
const Disposition = () => {
    return (
        <>
            <div className={DispositionCSS.disposition}>
                <div className={DispositionCSS.horizontalArea}>
                    <div className={DispositionCSS.leftArea}>Disposition</div>
                    <div className={DispositionCSS.rightArea}>
                        <a href="#" className={DispositionCSS.optionLink}>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={DispositionCSS.widget}>
                                <g>
                                    <rect x="7" y="7" width="13" height="13" fill="white" strokeWidth="1" stroke="black"></rect>
                                    <rect x="1" y="1" width="13" height="13" fill="#ababab" stroke="black" strokeWidth="1"></rect>
                                </g>
                            </svg>
                            <span>Mise en avant</span>
                        </a>
                        <a href="#" className={DispositionCSS.optionLink}>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={DispositionCSS.widget}>
                                <g>
                                    <rect x="7" y="7" width="13" height="13" fill="white" strokeWidth="1" stroke="black"></rect>
                                    <rect x="1" y="1" width="13" height="13" fill="#ababab" stroke="black" strokeWidth="1"></rect>
                                </g>
                            </svg>
                            <span>En avant-plan</span>
                        </a>
                        <a href="#" className={DispositionCSS.optionLink}>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={DispositionCSS.widget}>
                                <g>
                                    <rect x="7" y="7" width="13" height="13" fill="#ababab" strokeWidth="1" stroke="black"></rect>
                                    <rect x="1" y="1" width="13" height="13" fill="white" stroke="black" strokeWidth="1"></rect>
                                </g>
                            </svg>
                            <span>Mise en arrière</span>
                        </a>
                        <a href="#" className={DispositionCSS.optionLink}>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className={DispositionCSS.widget}>
                                <g>
                                    <rect x="7" y="7" width="13" height="13" fill="#ababab" strokeWidth="1" stroke="black"></rect>
                                    <rect x="1" y="1" width="13" height="13" fill="white" stroke="black" strokeWidth="1"></rect>
                                </g>
                            </svg><span>En arrière-plan</span></a></div>
                </div>
            </div>
        </>
    )
}
export default Disposition;