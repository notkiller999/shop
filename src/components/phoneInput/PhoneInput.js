import { useState } from "react";
import { Field } from "formik";


const PhoneInput = () => {
    const [mask, setMask] = useState('+38(___)___-__-__');

    const [range, setRange] = useState(4);    

    const changeCursor = (e) => {
        e.preventDefault()
        e.target.setSelectionRange(range, range);        
    }

    const strReplacer = (str, index, char) => {
        const newMask = str.substring(0, index) + char + str.substring(index + 1, str.length);
        setMask(newMask);
    }

    const phoneMask = (e) => {
        e.preventDefault();

        const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

        if(e.key === 'Backspace') {
            
            if (mask[range - 1] === '-' || mask[range - 1] === ')') {
                setRange(range - 2);
                strReplacer(mask, range -2, '_');
            } else if (numArr.includes(mask[range - 1])) {
                setRange(range - 1);
                strReplacer(mask, range - 1, '_');
            }
            
        }
        
        if(numArr.includes(e.key) && range < mask.length) {
            
            setRange(range + 1)
            changeCursor(e);

            if (mask[range] === '_') {
                strReplacer(mask, range, e.key);
            } else if (mask[range] === ')' || mask[range] === '-') {
                setRange(range + 2);
                strReplacer(mask, range + 1, e.key);
            }
        }
        changeCursor(e);
    }

    return (
        <Field className="form-input" 
            type="tel" 
            name="phone" 
            value={mask}
            onClick={(e) => changeCursor(e)}
            onKeyUp={(e) => phoneMask(e)}
        />
    )
}
export default PhoneInput;