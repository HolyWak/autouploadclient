import { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from "react-redux"
import { changeGender, changeKidsAge } from '../../states/store';
import { Col, Row, Form } from 'react-bootstrap';


//FA: 여자어른, MA:남자어른, FK: 여자키즈,  MK: 남자키즈
function Gender() {
    const dispatch = useDispatch();
    const [gender, setGender] = useState()

    useEffect(() => {
        dispatch(changeGender(gender))
    }, [gender])

    const saveGender = (event) => {
        setGender(event.target.value)
    }

    return (
        <div >
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    성별
                </Form.Label>
                <Col  >
                    <FormControl>
                        <RadioGroup
                            row
                            name="radio-buttons-gender-group"
                            onChange={saveGender}>
                            <FormControlLabel value="FA" control={<Radio />} label="성인 여자" />
                            <FormControlLabel value="MA" control={<Radio />} label="성인 남자" />
                            <FormControlLabel value="FK" control={<Radio />} label="키즈 여자" />
                            <FormControlLabel value="MK" control={<Radio />} label="키즈 남자" />
                        </RadioGroup>
                    </FormControl>
                </Col>
            </Form.Group>
            {gender === 'FK' && (<AgeCheck />)}
            {gender === 'MK' && (<AgeCheck />)}
        </div>
    )
}


function AgeCheck() {
    const dispatch = useDispatch();
    let [kidAge, setKidAge] = useState();

    useEffect(() => {
        dispatch(changeKidsAge(kidAge))
    }, [kidAge])

    const saveKidAge = (event) => {
        setKidAge(event.target.value);
    };

    return (
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
                키즈 연령
            </Form.Label>
            <Col>
                <FormControl>
                    <RadioGroup
                        row
                        name="radio-buttons-kidage-group"
                        onChange={saveKidAge}>
                        <FormControlLabel value="0" control={<Radio />} label="베이비(0~2세)" />
                        <FormControlLabel value="1" control={<Radio />} label="아동(3~6세)" />
                        <FormControlLabel value="2" control={<Radio />} label="쥬니어(7세 이상)" />
                    </RadioGroup>
                </FormControl></Col>
        </Form.Group>
    )
}



export default Gender;