import styled from 'styled-components'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Title() {

    const [title, setTitle] = useState('')
    const saveTitle = (event) => {
        setTitle(event.target.value);
        console.log(event.target.value);
        //여기서 dispath이용해서 데이터 영구저장. 
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