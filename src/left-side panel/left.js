import LeftCSS from './left.module.css'
import { MdAdd, MdCircle, MdRadioButtonChecked, MdCheckBox, MdEuroSymbol, MdOutlineTextFormat, MdImage } from "react-icons/md";
import { IoMdSquare } from "react-icons/io";
import { BsHexagonFill } from "react-icons/bs";
const Left = () => {
    return (
        <div className={LeftCSS.left}>
            <div className={LeftCSS.symbolBox}>
                <MdAdd className={LeftCSS.symbol} />
            </div>
            <ul>
                <li>
                    <MdOutlineTextFormat className={LeftCSS.symbol} />
                </li>
                <li>
                    <MdEuroSymbol className={LeftCSS.symbol} />
                </li>
                <li>
                    <IoMdSquare className={LeftCSS.symbol} />
                </li>
                <li>
                    <MdCircle className={LeftCSS.symbol} />
                </li>
                <li>
                    <BsHexagonFill className={LeftCSS.symbol} />
                </li>
                <li>
                    <MdImage className={LeftCSS.symbol} />
                </li>
                <li>
                    <MdCheckBox className={LeftCSS.symbol} />
                </li>
                <li>
                    <MdRadioButtonChecked className={LeftCSS.symbol} />
                </li>
            </ul>
        </div>
    )

}
export default Left;