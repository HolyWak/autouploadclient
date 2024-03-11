import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

//TODO:중고상품을 선택했을때 개월수 입력할수있도록 추가
function Quality() {

    let [quality, setQuality] = useState('');

    const saveQuality = (event) => {
        //TODO:아무런 동작을 하지 않았을때도 default값이 잘 저장되는지 확인해야함
        setQuality(event.target.value);
        console.log(event.target.value);

    };

    return (
        <div >
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    상품상태
                </Form.Label>
                <Col >
                    <FormControl>
                        <RadioGroup
                            defaultValue="used_default"
                            name="radio-buttons-group"
                            onChange={saveQuality}>
                            <FormControlLabel value="new" control={<Radio />} label="새 상품(미개봉)" />
                            <FormControlLabel value="used_default" control={<Radio />} label="중고 상품(사용감 없음.거의 새 것)" />
                            <FormControlLabel value="used_1" control={<Radio />} label="중고 상품(사용감 적음)" />
                            <FormControlLabel value="used_2" control={<Radio />} label="중고 상품(사용감 많음)" />
                            <FormControlLabel value="used_3" control={<Radio />} label="중고 상품(고장/파손 상품)" />
                        </RadioGroup>
                    </FormControl>
                </Col>
            </Form.Group>
        </div>
    )

}

export default Quality;