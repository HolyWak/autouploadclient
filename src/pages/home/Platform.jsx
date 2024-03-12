import { useState ,useEffect } from 'react';
import './Platform.css';
import { useDispatch } from "react-redux"
import { changePlatform } from '../../states/store';

function Platform() {

    const dispatch = useDispatch(); 

    let [isChecked1, setIsChecked1] = useState(false)
    let [isChecked2, setIsChecked2] = useState(false)
    let [isChecked3, setIsChecked3] = useState(false)

    let [platforms, setPlatforms] =useState([])

    //state가 바뀔때마다 실행. true면 배열에 담고 그 배열을 그대로 redux에 저장. (0 : 중고나라, 1 : 번개장터, 2 : 카페24)
    useEffect(()=>{ 
        let updatedPlatform = []
        if(isChecked1){
           updatedPlatform.push(0)
        }
        if(isChecked2){
            updatedPlatform.push(1)
        }
        if(isChecked3){
            updatedPlatform.push(2)
        }

        dispatch(changePlatform(updatedPlatform))

     }, [isChecked1, isChecked2, isChecked3])

    const handleCheckboxChange1 = () => {
        setIsChecked1(!isChecked1)
    
    };
    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2);
        // dispatch(changePlatform(1));
    };
    const handleCheckboxChange3 = () => {
        setIsChecked3(!isChecked3);
        // dispatch(changePlatform(2));
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