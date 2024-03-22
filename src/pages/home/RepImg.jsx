import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeRepImg } from '../../states/store';
import { FaCamera } from 'react-icons/fa';
import styled from 'styled-components'

function RepImg() {

  const dispatch = useDispatch()
  const [previewImage, setPreviewImage] = useState();

  // 파일 선택 시 이미지 미리보기 및 Redux에 저장
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl); // 이미지 미리보기 업데이트
      dispatch(changeRepImg([imageUrl])); // 이미지 배열을 Redux 상태에 저장 (단일 이미지)
    }
  };

  // 이미지 클릭 시 새 탭에서 원본 이미지 열기
  const handlePreviewClick = () => {
    if (previewImage) {
      window.open(previewImage, '_blank');
    }
  };



  return (
    <div >
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          대표 이미지
        </Form.Label>
        <Col >
          <Container>
            {/* 파일 선택 */}
            <FileInputLabel htmlFor="fileInput">
              <FileInputIcon /> {/* 이미지 아이콘 */}
              이미지 선택
              <FileInput id="fileInput" type="file" onChange={handleFileChange} />
            </FileInputLabel>
            {/* 이미지 미리보기 */}
            {previewImage && <ImagePreviewContainer onClick={handlePreviewClick}><ImagePreview src={previewImage} alt="이미지 파일이 아닙니다" /></ImagePreviewContainer>}
          </Container>
          <TextLabel>* 미리보기 이미지 클릭시 원본 이미지 확인가능</TextLabel>

        </Col>
      </Form.Group>
    </div>
  )

}

const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 500px;
`;

const ImagePreviewContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImagePreview = styled.img`
    max-width: 100%;
    max-height: 100%;
    /* width: 100%;
  height: 100%;
  object-fit: cover; */
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
    position: relative;
    cursor: pointer;
    padding: 10px 15px;
    margin-right: 10px;
    width: 200px;
    height: 200px;
    background-color: #F6F5F5;
    border: 1px solid #ccc;
    color: grey;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FileInputIcon = styled(FaCamera)`
    font-size: 30px;
    margin-bottom: 10px;
`;

const TextLabel = styled.label`
    font-size: 12px;
    color: grey;
`;


export default RepImg;