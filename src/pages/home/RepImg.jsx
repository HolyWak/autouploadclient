import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeRepImg } from '../../states/store';
import styled from 'styled-components'

function RepImg() {

    const dispatch = useDispatch()
    const [previewImage, setPreviewImage] = useState();

    // 파일 선택 시 이미지 미리보기 및 Redux에 저장
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file ,{ quality: 1 });
        setPreviewImage(imageUrl); // 이미지 미리보기 업데이트
        dispatch(changeRepImg([imageUrl])); // 이미지 배열을 Redux 상태에 저장 (단일 이미지)
    };


    return (
        //컴포넌트
        <div >
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    대표 이미지
                </Form.Label>
                <Col >
                    <Container>
                        {/* 이미지 미리보기 */}
                        <ImagePreviewContainer>
                            {previewImage && <ImagePreview src={previewImage} alt="Preview" />}
                        </ImagePreviewContainer>

                        {/* 파일 선택 */}
                        <FileInputLabel htmlFor="fileInput">
                            파일 선택
                            <FileInput id="fileInput" type="file" onChange={handleFileChange} />
                        </FileInputLabel>
                    </Container>

                </Col>
            </Form.Group>
        </div>
    )

}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ImagePreviewContainer = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  cursor: pointer;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  text-align: center;
`;


export default RepImg;