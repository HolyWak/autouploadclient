import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Quantity() {

    const [quantity, setQuantity] = useState(0)
    const saveQuantity = (event) => {
        setQuantity(event.target.value);
        console.log(event.target.value);
        //여기서 dispath이용해서 데이터 영구저장. 
    }

    //TODO: 숫자만 쓸 수 있게 유효성검사 추가해야함
    return (
        <div >
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    수량
                </Form.Label>
                <Col >
                    <Form.Control type="input" placeholder="" onChange={saveQuantity} />
                </Col>
            </Form.Group>
        </div>
    )
}

export default Quantity;