import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeImgList } from '../../states/store';
import styled from 'styled-components'
import { FaCamera } from 'react-icons/fa';

function Images() {

    const dispatch = useDispatch()
    const [previewImages, setPreviewImages] = useState([]);

    // 파일 선택 시 이미지 미리보기 및 Redux에 저장
    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files) {
            const totalImages = files.length + previewImages.length;
            if (totalImages > 9) {
                alert("이미지는 최대 9개까지 업로드할 수 있습니다.");
            }
            const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
            const newPreviewImages = [...previewImages, ...imageUrls].slice(0, 9); // 최대 9개까지만 추가
            setPreviewImages(newPreviewImages);
            dispatch(changeImgList(newPreviewImages)); // Redux에 최대 9개까지 저장
        }
    };

    // 이미지 클릭 시 새 탭에서 원본 이미지 열기
    const handlePreviewClick = (imageUrl) => {
        if (imageUrl) {
            window.open(imageUrl, '_blank');
        }
    };


    return (
        //컴포넌트
        <div >
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    추가 이미지
                </Form.Label>
                <Col >
                    <Container>
                        <ImageGrid>
                            {/* 파일 선택 */}
                            <FileInputLabel htmlFor="multiFileInput">
                                <FileInputIcon /> {/* 이미지 아이콘 */}
                                이미지 선택
                                <FileInput id="multiFileInput" type="file" multiple onChange={handleFileChange} />
                            </FileInputLabel>
                            {/* 선택된 파일들의 미리보기 */}
                            {previewImages.map((imageUrl, index) => (
                                <ImagePreviewContainer key={index}>
                                    <ImagePreview src={imageUrl} alt="이미지 파일이 아닙니다" onClick={() => handlePreviewClick(imageUrl)} />
                                </ImagePreviewContainer>
                            ))}
                        </ImageGrid>
                    </Container>
                    <TextLabel>* 미리보기 이미지 클릭시 원본 이미지 확인가능</TextLabel>

                </Col>

            </Form.Group>
        </div>
    )

}

const Container = styled.div`
  display: flex;
    align-items: flex-start; /* 이미지 선택 버튼과 이미지 그리드를 위쪽으로 정렬 */
`;

const ImageGrid = styled.div`
     display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10px;
    width: 100%;
`;

const ImagePreviewContainer = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* 이미지가 컨테이너를 벗어날 경우를 대비하여 오버플로우를 숨김 */
`;

const ImagePreview = styled.img`
   width: 100%; /* 이미지가 컨테이너에 꽉 차도록 설정 */
    height: 100%; /* 이미지가 컨테이너에 꽉 차도록 설정 */
    object-fit: cover; /* 이미지가 확대되거나 축소되어 컨테이너에 맞도록 설정 */
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
    position: relative;
    cursor: pointer;
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

export default Images;