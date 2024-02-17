import styled from 'styled-components'
import Instagram from './Instagram';
import Junggo from './Junggo';
import { useState } from 'react';
import './Home.css'
import { useSelector } from "react-redux"
import axios from 'axios'






function Home() {

    let [isChecked1, setIsChecked1] = useState(false)
    let [isChecked2, setIsChecked2] = useState(false)
    let [isChecked3, setIsChecked3] = useState(false)
    let [isChecked4, setIsChecked4] = useState(false)

    const handleCheckboxChange1 = () => {
        setIsChecked1(!isChecked1);
    };

    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2);
    };

    const handleCheckboxChange3 = () => {
        setIsChecked3(!isChecked3);
    };

    const handleCheckboxChange4 = () => {
        setIsChecked4(!isChecked4);
    };

    let data = useSelector((state) => { return state.data })

    return (
        <div >
            <div className='site'>
                <button className={`custom-checkbox ${isChecked1 ? 'checked' : ''}`} onClick={handleCheckboxChange1}>
                    중고나라
                </button>
                <button className={`custom-checkbox ${isChecked2 ? 'checked' : ''}`} onClick={handleCheckboxChange2}>
                    인스타그램
                </button>
                <button className={`custom-checkbox ${isChecked3 ? 'checked' : ''}`} onClick={handleCheckboxChange3}>
                    번개장터
                </button>
                <button className={`custom-checkbox ${isChecked4 ? 'checked' : ''}`} onClick={handleCheckboxChange4}>
                    카페24
                </button>
            </div>
            <div className='body'>
                {isChecked1 && <Junggo />}
                {isChecked2 && <Instagram />}
            </div>

            <div>
                <button onClick={() => {
                    console.log(data);
                    axios.post('localhost:5000/write', data);
                }}> 게시물 등록 </button>
            </div>



        </div>
    )
}

export default Home;