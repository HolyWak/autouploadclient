import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Price() {

    const [price, setPrice] = useState(0)
    const savePrice = (event) => {
        setPrice(event.target.value);
        console.log(event.target.value);
        //여기서 dispath이용해서 데이터 영구저장. 
    }

    //TODO: 숫자만 쓸 수 있게 유효성검사 추가해야함
    //TODO: 가격과 수량을 한 줄에 올 수 있게할지 고민
    return (
        <div >
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    가격
                </Form.Label>
                <Col >
                    <Form.Control type="input" placeholder="2000원 이상, 숫자만 입력해주세요  ex.25000" onChange={savePrice} />
                </Col>
            </Form.Group>
        </div>
    )
}

export default Price;