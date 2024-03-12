import styled from 'styled-components'
import { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button, Container, Col, Row, Form } from 'react-bootstrap';
import { stepButtonClasses } from '@mui/material';

//TODO:중고상품을 선택했을때 개월수 입력할수있도록 추가
function Quality() {

    //여기의 첫 값을 default 버튼의 value와 똑같이 설정해두면 될 듯. 
    let [quality, setQuality] = useState('used_default');



    useEffect(() => {
        //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
    });

    const saveQuality = (event) => {
        setQuality(event.target.value);
        console.log(event.target.value);

    };

    return (
        <div >
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    상품상태
                </Form.Label>
                <Col  >
                    <FormControl>
                        <RadioGroup
                            defaultValue="used_default"
                            name="radio-buttons-group"
                            onChange={saveQuality}>
                            <FormControlLabel value="new" control={<Radio />} label="새 상품(미개봉)" />
                            <FormControlLabel value="used_default" control={<Radio />} label="중고 상품(사용감 없음.거의 새 것)" />
                            {quality === 'used_default' && (<MonthInput /> )}
                            <FormControlLabel value="used_1" control={<Radio />} label="중고 상품(사용감 적음)" />
                            {quality === 'used_1' && (<MonthInput /> )}
                            <FormControlLabel value="used_2" control={<Radio />} label="중고 상품(사용감 많음)" />
                            {quality === 'used_2' && (<MonthInput /> )}
                            <FormControlLabel value="used_3" control={<Radio />} label="중고 상품(고장/파손 상품)" />
                            {quality === 'used_3' && (<MonthInput /> )}
                        </RadioGroup>
                    </FormControl>

                </Col>
            </Form.Group>
        </div>
    )

}

function MonthInput() {

    let [usedMonth, setUsedMonth] = useState("빈티지");

    const saveUsedMonth = (event) => {
         setUsedMonth(event.target.value);
        console.log(usedMonth);

    };
    return (
        <div>
            <SubLabel>사용 개월 수</SubLabel>
             <InputBox  onChange={saveUsedMonth} defaultValue={usedMonth}>
             </InputBox>
        </div>
       


    )
}

const SubLabel = styled.label`
    padding-left: 30px;
    font-size: 85%;
`

const InputBox = styled.input`
  display: inline-flex;
  text-align: end;
  font-size: 85%;
  min-height: 30px;
  width: 80px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0 10px;
  border: 1px solid #DEE2E6;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: 3px solid #C7DBFF; /* 포커스되었을 때의 테두리 색상 */
    box-shadow: 0 0 5px #C7DBFF; /* 포커스되었을 때의 그림자 효과 */
    
  }
`

export default Quality;