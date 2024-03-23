import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Col, Form, Row } from 'react-bootstrap';
import { CATEGORIES } from './CATEGORYLIST';
import { HiOutlineChevronRight } from 'react-icons/hi';

const animation = {
    mount: keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  `,
    unmount: keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  `,
};

const Category = () => {
    const [currentCity, setCurrentCity] = useState(1);
    const [categoryAnimation, setCategoryAnimation] = useState(true);
    const [showCategory, setShowCategory] = useState(false);

    const closeCategory = () => {
        setCategoryAnimation(false);
    };

    const toggleCategorySelection = () => {
        setShowCategory(!showCategory);
    };

    const moveToCategory = id => {
        setCurrentCity(id);
        setShowCategory(false);
    };

    const S = {
        CategoryBox: styled.div`
      ${flex()}
      position: absolute;
      top: calc(100% + 10px); /* 카테고리 선택 버튼 바로 아래 */
      left: px;
      width: 470px;
      height: 555px;
      background-color: white;
      border-radius: 5px;
      border: none;
      box-shadow: 0 1px 8px 1px rgba(0, 0, 0, 0.3);
      color: black;
      animation: ${({ categoryAnimation }) =>
                categoryAnimation ? animation.mount : animation.unmount} 0.1s;
      z-index: 5;
    `,
        Cities: styled.ul`
      width: 168px;
      height: 100%;
      padding: 23px 10px 0 36px;
      border-right: 0.5px solid ${({ theme }) => theme.lightGrey};
    `,
        SubCategories: styled.ul`
      width: 302px;
      height: 100%;
      padding: 23px 0 0 36px;
    `,
        Category: styled.li`
      ${flex('space-between', 'center', 'row')};
      width: 100%;
      height: 27px;
      margin-bottom: 5px;
      color: ${({ isSelected, theme }) =>
                isSelected ? theme.brandColor : 'black'};
      font-size: 13px;
      font-weight: 100;
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.brandColor};
      }
    `,
    };

    return (
        <div style={{ position: 'relative' }}> {/* 부모 요소에 position: relative; 추가 */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    카테고리
                </Form.Label>
                <Col>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CategoryButton onClick={toggleCategorySelection}>
                            <CategoryButtonText>카테고리 선택</CategoryButtonText>
                            <CategoryButtonIcon>▼</CategoryButtonIcon>
                        </CategoryButton>
                    </div>
                    {showCategory && (
                        <S.CategoryBox
                            onMouseLeave={closeCategory}
                            categoryAnimation={categoryAnimation}
                        >
                            <S.Cities>
                                {CATEGORIES.map(city => (
                                    <S.Category
                                        key={city.id}
                                        onMouseEnter={() => setCurrentCity(city.id)}
                                        isSelected={currentCity === city.id}
                                    >
                                        <span>{city.name}</span>
                                        {currentCity === city.id && (
                                            <span>
                                                <HiOutlineChevronRight />
                                            </span>
                                        )}
                                    </S.Category>
                                ))}
                            </S.Cities>
                            <S.SubCategories>
                                {CATEGORIES.find(category => category.id === currentCity)
                                    .subcategories.map(subCategory => (
                                        <S.Category
                                            key={subCategory.subCategoryId}
                                            isSelected={parseInt(subCategory.subCategoryId) === subCategory.subCategoryId}
                                            onClick={() => moveToCategory(subCategory.subCategoryId)}
                                        >
                                            {subCategory.name}
                                        </S.Category>
                                    ))}
                            </S.SubCategories>
                        </S.CategoryBox>
                    )}
                </Col>
            </Form.Group>
        </div>
    );
};

const flex = (justify = 'center', align = 'center', direction = 'row') => `
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`;

const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #DEE2E6;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
`;

const CategoryButtonText = styled.span`
  margin-right: 5px;
`;

const CategoryButtonIcon = styled.span`
  font-size: 1.2em;
`;


export default Category;
