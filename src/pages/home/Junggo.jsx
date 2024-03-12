import './Junggo.css'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux"
import ReactQuill from "react-quill";


function Junggo() {
    
    const dispatch = useDispatch(); 

    //게시판 선택
    let [board, setBoard] = useState('');
    const handleChange_board = (event) => {
        setBoard(event.target.value);
        console.log(event.target.value);


    };

    //상품상태
    const [selectedOptionQuality, setSelectedOptionQuality] = useState('')
    const handleOptionChange = (event) => {
        setSelectedOptionQuality(event.target.value);
        console.log(event.target.value);
    }

    //배송 방법
    let [deliveryOption1, setDeliveryOption1] = useState(false)
    let [deliveryOption2, setDeliveryOption2] = useState(false)
    let [deliveryOption3, setDeliveryOption3] = useState(false)

    const handleDeliveryCheckboxChange1 = () => {
        setDeliveryOption1(!deliveryOption1);
    };
    const handleDeliveryCheckboxChange2 = () => {
        setDeliveryOption2(!deliveryOption2);
    };
    const handleDeliveryCheckboxChange3 = () => {
        setDeliveryOption3(!deliveryOption3);
    };

    //전화번호 노출 동의
    let [checkedPhoneNumber, setCheckedPhoneNumber] = useState(false)
    let handlePhoneNumberCheckboxChange = () => {
        setCheckedPhoneNumber(!checkedPhoneNumber);
    };

    //안심번호 사용
    let [checkedSafeNumber, setcheckedSafeNumber] = useState(false)
    let handleSafeNumberCheckboxChange = () => {
        setcheckedSafeNumber(!checkedSafeNumber);
    };


    //사진 워터마크 추가
    let [useWaterMark, setUseWaterMark] = useState(false)
    let handleWaterMarkCheckboxChange = () => {
        setUseWaterMark(!useWaterMark);
    };


    return (
        <div className='Junggo'>
            <h3>중고나라</h3>
            <div className='Board'>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">게시판선택</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={board}
                            label="게시판선택"
                            onChange={handleChange_board}
                        >
                            <MenuItem value={0}>여성패션/잡화</MenuItem>
                            <MenuItem value={1}>남성패션/잡화</MenuItem>
                            <MenuItem value={2}>출산/육아 용품</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>

            <div className="Title">
                <textarea placeholder="상품명(제목)" className="textarea_input" ></textarea>
            </div>
            <div className='WritingCommerce'>
                <input placeholder="가격을 입력하세요" className='input_text'>
                </input>
            </div>
            <div className='Categories'>
                <button className='cate_button' onClick={() => { console.log('상품 카테고리 버튼 누름') }}>상품 카테고리</button>
            </div>
            <div className="Quality">
                <span>상품 상태</span>
                <label className={`radiobox-option ${selectedOptionQuality === 'quality1' ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        value="quality1"
                        checked={selectedOptionQuality === 'quality1'}
                        onChange={handleOptionChange}
                    />
                    미개봉
                </label>

                <label className={`radiobox-option ${selectedOptionQuality === 'quality2' ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        value="quality2"
                        checked={selectedOptionQuality === 'quality2'}
                        onChange={handleOptionChange}
                    />
                    거의 새 것
                </label>
                <label className={`radiobox-option ${selectedOptionQuality === 'quality3' ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        value="quality3"
                        checked={selectedOptionQuality === 'quality3'}
                        onChange={handleOptionChange}
                    />
                    사용감 있음
                </label>
            </div>
            <br />
            <span>배송 방법</span>
            <button className={`delivery-checkbox ${deliveryOption1 ? 'checked' : ''}`} onClick={handleDeliveryCheckboxChange1}>
                직거래
            </button>
            <button className={`delivery-checkbox ${deliveryOption2 ? 'checked' : ''}`} onClick={handleDeliveryCheckboxChange2}>
                택배 거래
            </button>
            <button className={`delivery-checkbox ${deliveryOption3 ? 'checked' : ''}`} onClick={handleDeliveryCheckboxChange3}>
                온라인 전송
            </button>
            <br/><br/>
            <ReactQuill></ReactQuill>
            <br/>
            <label>
                <input
                    type="checkbox"
                    checked={checkedPhoneNumber}
                    onChange={handlePhoneNumberCheckboxChange}
                />
                <span> 휴대전화번호 노출 동의</span>
            </label>
            <label style={{ paddingLeft: '20px' }}>
                <input
                    type="checkbox"
                    checked={checkedSafeNumber}
                    onChange={handleSafeNumberCheckboxChange}
                />
                <span> 안심번호 이용</span>
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={useWaterMark}
                    onChange={handleWaterMarkCheckboxChange}
                />
                <span> 사진 첨부 시 워터마크 추가</span>
            </label>
            <br/>
            
           

        </div>
    )
}

export default Junggo;

