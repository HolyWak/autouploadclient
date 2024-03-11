import { useState } from 'react';
import './Platform.css';

function Platform() {

    let [isChecked1, setIsChecked1] = useState(false)
    let [isChecked2, setIsChecked2] = useState(false)
    let [isChecked3, setIsChecked3] = useState(false)

    //TODO: 여기서 어떤 플랫폼에 등록할지 정하면 state에 저장해야함. 아마도?
    const handleCheckboxChange1 = () => {
        setIsChecked1(!isChecked1);
    };
    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2);
    };
    const handleCheckboxChange3 = () => {
        setIsChecked3(!isChecked3);
    };

    return (
        <div>
            <button className={`custom-checkbox ${isChecked1 ? 'checked' : ''}`} onClick={handleCheckboxChange1}>
                중고나라
            </button>
            <button className={`custom-checkbox ${isChecked2 ? 'checked' : ''}`} onClick={handleCheckboxChange2}>
                번개장터
            </button>
            <button className={`custom-checkbox ${isChecked3 ? 'checked' : ''}`} onClick={handleCheckboxChange3}>
                카페24
            </button>
        </div>

    )
}

export default Platform;