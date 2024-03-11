import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react';

function Category() {

    let [cate, setCate] = useState('');
    const saveCate = (event) => {
        setCate(event.target.value);
        console.log(event.target.value);

    };

    return (
        <div>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">카테고리</Form.Label>
                <Col >

                    <FormControl sx={{ borderColor: "#DEE2E6", width: 300 }}>
                        <InputLabel htmlFor="grouped-select">카테고리 선택</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="카테고리 선택" onChange={saveCate}>
                            <ListSubheader>[아우터]</ListSubheader>
                            <MenuItem value={1}>패딩</MenuItem>
                            <MenuItem value={2}>조끼</MenuItem>
                            <MenuItem value={3}>후리스</MenuItem>
                            <MenuItem value={4}>집업 가디건</MenuItem>
                            <MenuItem value={5}>경량패딩</MenuItem>
                            <MenuItem value={6}>가디건</MenuItem>
                            <MenuItem value={7}>니트조끼</MenuItem>
                            <MenuItem value={8}>니트집업</MenuItem>
                            <MenuItem value={9}>데님자켓</MenuItem>
                            <MenuItem value={10}>블레이져</MenuItem>
                            <MenuItem value={11}>트렌치 코트</MenuItem>
                            <MenuItem value={12}>겨울 코트</MenuItem>
                            <MenuItem value={13}>야상</MenuItem>
                            <MenuItem value={14}>블루종/항공</MenuItem>
                            <MenuItem value={15}>후드집업</MenuItem>
                            <MenuItem value={16}>남자패딩</MenuItem>
                            <MenuItem value={17}>바람막이</MenuItem>
                            <MenuItem value={18}>남자 트랙탑 져지</MenuItem>

                            <ListSubheader>[상의]</ListSubheader>
                            <MenuItem value={19}>반팔셔츠/블라우스</MenuItem>
                            <MenuItem value={20}>셔츠</MenuItem>
                            <MenuItem value={21}>원피스</MenuItem>
                            <MenuItem value={22}>반팔 티셔츠</MenuItem>
                            <MenuItem value={23}>민소매</MenuItem>
                            <MenuItem value={24}>긴팔</MenuItem>
                            <MenuItem value={25}>반팔</MenuItem>
                            <MenuItem value={26}>니트</MenuItem>
                            <MenuItem value={27}>브이넥 니트</MenuItem>
                            <MenuItem value={28}>라운드넥 니트</MenuItem>
                            <MenuItem value={29}>체크 셔츠</MenuItem>
                            <MenuItem value={30}>스트라이프 셔츠</MenuItem>
                            <MenuItem value={31}>솔리드 셔츠</MenuItem>
                            <MenuItem value={32}>롱슬리브</MenuItem>
                            <MenuItem value={33}>맨투맨</MenuItem>
                            <MenuItem value={34}>남자 후드티</MenuItem>
                            <MenuItem value={35}>여자 후드티</MenuItem>

                            <ListSubheader>[하의]</ListSubheader>
                            <MenuItem value={36}>반바지</MenuItem>
                            <MenuItem value={37}>면바지</MenuItem>
                            <MenuItem value={38}>청바지</MenuItem>
                            <MenuItem value={39}>치마</MenuItem>
                            <MenuItem value={40}>면바지 치노팬츠</MenuItem>
                            <MenuItem value={41}>슬랙스</MenuItem>
                            <MenuItem value={42}>일자핏 스트레이트핏 청바지</MenuItem>
                            <MenuItem value={43}>스키니 슬림 청바지</MenuItem>

                            <ListSubheader>[신발]</ListSubheader>

                            <ListSubheader>[키즈]</ListSubheader>
                            <MenuItem value={44}>키즈세트</MenuItem>
                            <MenuItem value={45}>키즈원피스</MenuItem>
                            <MenuItem value={46}>키즈자켓</MenuItem>
                            <MenuItem value={47}>키즈바지</MenuItem>
                            <MenuItem value={48}>키즈티셔츠</MenuItem>
                            <MenuItem value={49}>키즈니트</MenuItem>
                            <MenuItem value={50}>키즈가디건</MenuItem>
                            <MenuItem value={51}>키즈셔츠</MenuItem>
                            <MenuItem value={52}>키즈패딩</MenuItem>

                        </Select>
                    </FormControl>
                </Col>
            </Form.Group>
        </div>
    )
}

export default Category;