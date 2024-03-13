import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeImgList } from '../../states/store';

function Images() {

    const dispatch = useDispatch()
    const [previewImages, setPreviewImages] = useState([]);

    // 파일 선택 시 이미지 미리보기 및 Redux에 저장
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setPreviewImages(imageUrls); // 이미지 미리보기 업데이트
        dispatch(changeImgList(imageUrls)); // 이미지 배열을 Redux 상태에 저장
    };


    return (
        //컴포넌트
        <div >
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    이미지
                </Form.Label>
                <Col >
                    {/* 파일 입력란 */}
                    <input type="file" multiple onChange={handleFileChange} />

                    {/* 선택된 파일들의 미리보기 */}
                    <div>
                        {previewImages.map((imageUrl, index) => (
                            <img key={index} src={imageUrl}
                                // alt부분을 이미지 파일이 아닙니다. 이런형식으로 알려주는 역할을 할수있을듯
                                alt={`Preview ${index}`}
                                style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                        ))}
                    </div>

                </Col>
            </Form.Group>
        </div>
    )

}

export default Images;