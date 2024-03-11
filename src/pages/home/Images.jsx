import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Images() {

    const [productImg, setProductImg] = useState([])
    const [previewImg, setPreviewImg] = useState([])



    function uploadFile(e) {
        let fileArr = e.target.files;
        setProductImg(Array.from(fileArr));

        let fileUrl = [];
        for (let i = 0; i < fileArr.length; i++) {
            let fileRead = new FileReader();
            fileRead.onload = function () {
                fileUrl[i] = fileRead.result;
                setPreviewImg([...fileUrl]);
                fileRead.readAsDataURL(fileArr[i]);
            }
        };
    }
    const handleUpload = () => {
        // 여기에서 선택된 파일들을 업로드하는 로직을 추가합니다.
        console.log(previewImg);
        console.log(productImg);
    };

    return (
        //컴포넌트
        <div >
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    이미지
                </Form.Label>
                <Col >
                    <input type="file" multiple onChange={uploadFile} />
                    {/* <button onClick={handleUpload}>업로드버튼인데.. 아마 필요없을듯</button> */}
                    {productImg.length > 0 && (
                        <div>
                            {productImg.map((file, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(file)}
                                    alt={`Preview ${index}`}
                                    style={{ height:'200px', padding: '10px' }}
                                />
                            ))}

                        </div>
                    )}

                </Col>
            </Form.Group>
        </div>
    )

}

export default Images;