import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux"
import { changePrice } from '../../states/store';

function Price() {
    const dispatch = useDispatch()
    const [price, setPrice] = useState(0)

    useEffect(() => {
        dispatch(changePrice(price))
    }, [price])

    const savePrice = (event) => {
        //혹시 문자열이 있다면 제거
        const inputValue = event.target.value;
        const filteredValue=inputValue.replace(/[^0-9]/g, "");
        setPrice(filteredValue);
        
    }

    return (
        <div >
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    가격
                </Form.Label>
                <Col >
                    <Form.Control type="input" placeholder="2000원 이상 입력해주세요" onChange={savePrice} />
                </Col>
            </Form.Group>
        </div>
    )
}

export default Price;