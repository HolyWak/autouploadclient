import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux"
import {changeAccountInfo } from '../../states/store';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

function AccountInfo() {

    const dispatch = useDispatch();

    const [account, setAccount] = useState(""); // 선택된 플랫폼 상태

    // 선택된 플랫폼이 변경될 때마다 Redux에 저장
    useEffect(() => {
            dispatch(changeAccountInfo(account));
    }, [account]);

    // 버튼 클릭 핸들러
    const handlePlatformSelect = (selectedAccount) => {
        setAccount(selectedAccount === account ? account : selectedAccount); // 선택된 계정이 이미 선택된 계정과 같으면 선택 해제, 아니면 선택
    };

    return (
        <div>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    계정선택
                </Form.Label>
                <Col >
                    <CustomCheckbox 
                        onClick={() => handlePlatformSelect("에코빈티지")} 
                        isSelected={account === "에코빈티지"} >
                        에코빈티지
                    </CustomCheckbox>

                    <CustomCheckbox 
                        onClick={() => handlePlatformSelect("해빗티지")} 
                        isSelected={account === "해빗티지"} >
                        해빗티지
                    </CustomCheckbox>

                    <CustomCheckbox 
                        onClick={() => handlePlatformSelect("슈티지")} 
                        isSelected={account === "슈티지"} >
                        슈티지
                    </CustomCheckbox>
                </Col>
            </Form.Group>
        </div>
    )
}

// 선택된 상태에 따라 스타일 변경
const CustomCheckbox = styled.button`
    display: inline-block;
    width: 100px;
    height: 40px;
    background-color: ${props => props.isSelected ? '#845ef7' : '#E0E0E0'};
    color: ${props => props.isSelected ? 'white' : '#333333'};
    border-radius: 20px;
    cursor: pointer;
    border: none;
    margin-right: 20px;
    font-weight: ${props => props.isSelected ? 'bolder' : 'normal'};
`;

export default AccountInfo;
