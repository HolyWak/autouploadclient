import styled from 'styled-components'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTitle } from '../../states/store';

function Title() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    useEffect(()=>{
        dispatch(changeTitle(title))
    },[title])

    const saveTitle = (event) => {
        setTitle(event.target.value);
        console.log(event.target.value);
    }

    return (
        //컴포넌트
        <div >
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    상품명
                </Form.Label>
                <Col >
                    <Form.Control type="input" placeholder="상품명을 입력해주세요" onChange={saveTitle}/>
                </Col>
            </Form.Group>
        </div>
    )

}

export default Title;