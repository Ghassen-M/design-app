import DisplayCSS from './display.module.css';
const Display = () => {
  return (
    <>
      <div className={DisplayCSS.display}>
        <div className={DisplayCSS.affichage}>Affichage</div>
        <input className={DisplayCSS.displayInput} value="100" />
        <div className={DisplayCSS.unit}>%</div>
        <div className={DisplayCSS.options}>
          <div className={DisplayCSS.space}></div>
          <div className={DisplayCSS.button}>
            <div title="Zoom avant">
              <a href="#" className={DisplayCSS.buttonLink}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ fontSize: "1.4em" }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
          <div className={DisplayCSS.button}>
            <div title="Zoom arrière">
              <a href="#" className={DisplayCSS.buttonLink}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ fontSize: "1.4em" }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z">
                  </path>
                </svg></a>
            </div>
          </div>
          <div className={DisplayCSS.button}>
            <div title="Plein page">
              <a href="#" className={DisplayCSS.buttonLink}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ fontSize: "1.4em" }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path>
                </svg>
              </a>
            </div>

          </div>
          <div className={DisplayCSS.button}>
            <div title='Taille réelle'>
              <a href="#" className={DisplayCSS.buttonLink}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ color: "rgb(34, 34, 34)", fontSize: "1.4em", strokeWidth: "1px" }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Display;