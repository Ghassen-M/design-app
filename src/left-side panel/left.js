import './left.css'
import { MdAdd,MdCircle,MdRadioButtonChecked,MdCheckBox, MdEuroSymbol, MdOutlineTextFormat, MdImage } from "react-icons/md";
import { IoMdSquare } from "react-icons/io";
import { BsHexagonFill } from "react-icons/bs";
const Left=() =>{
    return(
    <div className='left'>
        <div className='symbolBox'>
        <MdAdd className='symbol'/>
        </div>
        <ul>
            <li>
                <MdOutlineTextFormat className='symbol'/>
            </li>
            <li>
            <MdEuroSymbol className='symbol'/>
            </li>
            <li>
            <IoMdSquare className='symbol'/>
            </li>
            <li>
            <MdCircle className='symbol'/>
            </li>
            <li>
            <BsHexagonFill className='symbol'/>
            </li>
            <li>
            <MdImage className='symbol'/>
            </li>
            <li>
            <MdCheckBox className='symbol'/>
            </li>
            <li>
            <MdRadioButtonChecked className='symbol'/>
            </li>
        </ul>    
    </div>
    )

}
export default Left;