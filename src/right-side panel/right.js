import RightCSS from './right.module.css';
import Display from '../display/display';
import Data from '../data/data';
import Transform from '../Transform/transform';
import Text from '../text/text';
import Colour from '../colour/colour';
import Disposition from '../disposition/disposition';
import Elements from '../elements/elements';
const Right = () => {
    return (
        <>
            <div className={RightCSS.right}>
                <div className={RightCSS.rightPanel}>
                    <Display />           
                    <Data />          
                    <Transform />          
                    <Text />         
                    <Colour />   
                    <Disposition />     
                    <Elements />
                </div>
            </div>
        </>
    )
}
export default Right;