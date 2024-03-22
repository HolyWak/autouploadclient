import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux"
import { changePlatform } from '../../states/store';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

function Platform() {

    const dispatch = useDispatch();

    let [isChecked1, setIsChecked1] = useState(false)
    let [isChecked2, setIsChecked2] = useState(false)
    let [isChecked3, setIsChecked3] = useState(false)

    //state가 바뀔때마다 실행. true면 배열에 담고 그 배열을 그대로 redux에 저장. (0:중고나라, 1:번개장터, 2:카페24)
    useEffect(() => {
        let updatedPlatform = []
        if (isChecked1) {
            updatedPlatform.push(0)
        }
        if (isChecked2) {
            updatedPlatform.push(1)
        }
        if (isChecked3) {
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
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">
                    플랫폼
                </Form.Label>
                <Col >
                <CustomCheckbox className={isChecked1 ? 'checked' : ''} onClick={handleCheckboxChange1}>
                    중고나라
                </CustomCheckbox>

                <CustomCheckbox className={isChecked2 ? 'checked' : ''} onClick={handleCheckboxChange2}>
                    번개장터
                </CustomCheckbox>

                <CustomCheckbox className={isChecked3 ? 'checked' : ''} onClick={handleCheckboxChange3}>
                    카페24
                </CustomCheckbox>
                </Col>
            </Form.Group>
        </div>

    )
}

const CustomCheckbox = styled.button`
    display: inline-block;
    width: 100px;
    height: 40px;
    background-color: #E0E0E0;
    color: #333333;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    margin-right: 20px;
    &.checked {
        background-color: #4c6ef5;
        color: white;
        font-weight: bolder;
    }
`;


export default Platform;