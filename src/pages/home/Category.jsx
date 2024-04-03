import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Col, Form, Row } from 'react-bootstrap';
import { CATEGORIES } from './CATEGORYLIST';
import { HiOutlineChevronRight, HiOutlineChevronDown } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { changeCategory, changeChestSize, changeRecommendedAge, changeShoesSize, changeTotalLength, changeWaistSize } from '../../states/store';

const animation = {
    mount: keyframes`
    0% { opacity: 1;}
    100% {opacity: 1;}
  `,
    unmount: keyframes`
    0% {opacity: 1;}
    100% {opacity: 1;}
  `,
};

const Category = () => {
    const dispatch = useDispatch();

    //sub카테고리 보여주는 용도의 메인 카테고리 저장 state
    const [mainCategory, setMainCategory] = useState(1);
    const [categoryAnimation, setCategoryAnimation] = useState(true);
    const [showCategory, setShowCategory] = useState(false);

    //추가 데이터 입력받을 용도의 메인 카테고리 저장 state
    const [selectedMainCateId, setSelectedMainCateId] = useState(null);
    const [selectedSubCateName, setSelectedSubCateName] = useState(null);
    const categoryRef = useRef(null);
    const categoryButtonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                categoryRef.current &&
                !categoryRef.current.contains(event.target) &&
                categoryButtonRef.current &&
                !categoryButtonRef.current.contains(event.target)
            ) {
                setShowCategory(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const closeCategory = () => {
        setCategoryAnimation(false);
    };

    const toggleCategorySelection = () => {
        setShowCategory(!showCategory);
    };

    const selectSubCategory = (subId, name) => {
        dispatch(changeCategory(subId));
        setSelectedSubCateName(name);
        setShowCategory(false);
    };

    const selectMainCategory = (subId) => {
        //ParentCategory 전체를 찾아냄
        const parentCategory = CATEGORIES.find(category =>
            category.subcategories.some(subCategory => subCategory.subCategoryId === subId)
        )
        //그 중에서 id만 뽑아서 state에 저장
        setSelectedMainCateId(parentCategory.id)
    }

    return (
        <div style={{ position: 'relative' }}>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    카테고리
                </Form.Label>
                <Col>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CategoryButton ref={categoryButtonRef} onClick={toggleCategorySelection}>
                            {selectedSubCateName || '카테고리 선택'}
                            <span>&nbsp;</span>
                            <HiOutlineChevronDown />
                        </CategoryButton>

                    </div>
                    {showCategory && (
                        <S.CategoryBox
                            onMouseLeave={closeCategory}
                            categoryAnimation={categoryAnimation}
                            ref={categoryRef}
                        >
                            <S.MainCategories>
                                {CATEGORIES.map((first_cate) => (
                                    <S.Category
                                        key={first_cate.id}
                                        onMouseEnter={() => setMainCategory(first_cate.id)}
                                        isSelected={mainCategory === first_cate.id}
                                    >
                                        <span>{first_cate.name}</span>
                                        {mainCategory === first_cate.id && (
                                            <span>
                                                <HiOutlineChevronRight />
                                            </span>
                                        )}
                                    </S.Category>
                                ))}
                            </S.MainCategories>
                            <S.SubCategories>
                                {(CATEGORIES.find((category) => category.id === mainCategory) || { subcategories: [] })
                                    .subcategories.map((sub_cate) => (
                                        <S.SubCategory
                                            key={sub_cate.subCategoryId}
                                            isSelected={selectedSubCateName === sub_cate.name}
                                            onClick={() => {
                                                selectSubCategory(sub_cate.subCategoryId, sub_cate.name)
                                                selectMainCategory(sub_cate.subCategoryId)
                                            }}
                                        >
                                            {sub_cate.name}
                                        </S.SubCategory>
                                    ))}
                            </S.SubCategories>
                        </S.CategoryBox>
                    )}
                </Col>
            </Form.Group>
            {selectedMainCateId === 1 && (<OuterTopInput />)}
            {selectedMainCateId === 2 && (<OuterTopInput />)}
            {selectedMainCateId === 3 && (<BottomInput />)}
            {selectedMainCateId === 4 && (<ShoesInput />)}
            {selectedMainCateId === 5 && (<KidsInput />)}
        </div>
    );
};

// 아우터/상의 추가 입력 컴포넌트
function OuterTopInput() {
    const dispatch = useDispatch();
    const saveChestSize = (event) => {
        dispatch(changeChestSize(event.target.value));
    };
    const saveTotalLength = (event) => {
        dispatch(changeTotalLength(event.target.value));
    };
    return (
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
                추가 정보
            </Form.Label>
            <Col>
                <SubLabel>가슴 반품</SubLabel>
                <InputBox onChange={saveChestSize}></InputBox>
                <TailLabel>cm</TailLabel>
                <SubLabel>총장</SubLabel>
                <InputBox onChange={saveTotalLength}></InputBox>
                <TailLabel>cm</TailLabel>
            </Col>
        </Form.Group>
    )
}

// 하의 추가 입력 컴포넌트
function BottomInput() {
    const dispatch = useDispatch();
    const saveWaistSize = (event) => {
        dispatch(changeWaistSize(event.target.value));
    };
    const saveTotalLength = (event) => {
        dispatch(changeTotalLength(event.target.value));
    };
    return (
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
                추가 정보
            </Form.Label>
            <Col>
                <SubLabel>허리 단면</SubLabel>
                <InputBox onChange={saveWaistSize}></InputBox>
                <TailLabel>cm</TailLabel>
                <SubLabel>총장</SubLabel>
                <InputBox onChange={saveTotalLength}></InputBox>
                <TailLabel>cm</TailLabel>
            </Col>
        </Form.Group>
    )
}

// 키즈 추가 입력 컴포넌트
function KidsInput() {
    const dispatch = useDispatch();
    const saveRecommendAge = (event) => {
        dispatch(changeRecommendedAge(event.target.value));
    };
    return (
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
                추가 정보
            </Form.Label>
            <Col>
                <SubLabel>추천 나이</SubLabel>
                <InputBox onChange={saveRecommendAge}></InputBox>
                <TailLabel>세</TailLabel>
            </Col>
        </Form.Group>
    )
}

// 신발 추가 입력 컴포넌트
function ShoesInput() {
    const dispatch = useDispatch();
    const saveShoesSize = (event) => {
        dispatch(changeShoesSize(event.target.value));
    };
    return (
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
                추가 정보
            </Form.Label>
            <Col>
                <SubLabel>신발 사이즈</SubLabel>
                <InputBox onChange={saveShoesSize}></InputBox>
                <TailLabel>mm</TailLabel>
            </Col>
        </Form.Group>
    )
}


//스타일
const flex = (justify = 'center', align = 'center', direction = 'row') => `
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`;

const CategoryButton = styled.button`
    display: flex;
    align-items: center;
    min-height: 50px;
    padding: 5px 20px;
    border: 1px solid #dee2e6;
    font-weight: bold;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
     /* 내부 요소들 사이에 마진 추가 */
     span {
        margin-right: 10px; /* 원하는 만큼의 여백 조절 가능 */
    }
`;


const S = {
    CategoryBox: styled.div`
        ${flex()}
        position: absolute;
        top: calc(100% + 10px); /* 카테고리 선택 버튼 바로 아래 */
        width: 650px;
        height: 555px;
        padding: 10px;
        background-color: white;
        border-radius: 5px;
        border: none;
        box-shadow: 0 1px 8px 1px rgba(0, 0, 0, 0.3);
        color: black;
        animation: ${({ categoryAnimation }) =>
            categoryAnimation ? animation.mount : animation.unmount} 0.1s;
        z-index: 5;
    `,
    MainCategories: styled.ul`
        width: 150px;
        height: 100%;
        padding: 20px 10px 0 20px;
        /* border: 1px solid black; */
        /* border-right: 0.5px solid lightgray; */
    `,
    SubCategories: styled.ul`
        width: 500px;
        height: 100%;
        padding: 20px 10px 0 20px;
        display:flex;
        align-content:flex-start;
        flex-direction:column;
        flex-wrap:wrap;
        overflow:auto;

    `,
    Category: styled.li`
        ${flex('space-between', 'center', 'row')};
        width: 100%;
        height: 35px;
        margin-bottom: 5px;
        color: ${({ isSelected }) =>
            isSelected ? 'blue' : 'black'};
        font-size: 15px;
        font-weight: 500;
        cursor: pointer;
        &:hover {
            color: ${({ isSelected }) => (isSelected ? 'blue' : 'black')}; /* 선택된 카테고리는 파란색, 그 외에는 회색 */
        }
    `,
    SubCategory: styled.li`
    ${flex('space-between', 'center', 'row')};
    width: 250px;
    height: 35px;
    margin-bottom: 7px;
    color: ${({ isSelected }) =>
            isSelected ? 'blue' : 'black'};
    font-size: 15px;
    font-weight: 200;
    cursor: pointer;
    &:hover {
        color: blue
    }
`,
};

const SubLabel = styled.label`
    padding-left: 30px;
    font-size: 85%;
`

const InputBox = styled.input`
  display: inline-flex;
  text-align: end;
  font-size: 85%;
  min-height: 30px;
  width: 80px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 0 10px;
  border: 1px solid #DEE2E6;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: 3px solid #C7DBFF; /* 포커스되었을 때의 테두리 색상 */
    box-shadow: 0 0 5px #C7DBFF; /* 포커스되었을 때의 그림자 효과 */
    
  }
`
const TailLabel = styled.label`
    font-size: 85%;
`

export default Category;
