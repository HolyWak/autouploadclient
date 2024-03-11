import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';


function BodyTextEdit() {
    const [value, setValue] = useState('');

    const handleChange = (content, delta, source, editor) => {
        setValue(content);
        console.log(content);
    };

    const modules = {
        toolbar: [
            ['bold'],
            [{ 'align': [] }],
        ]
    };

    const formats = ['bold', 'align',];

    return (
        <div>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    상품설명
                </Form.Label>
                <Col >
                    <ReactQuill
                        value={value}
                        modules={modules}
                        onChange={handleChange}
                        formats={formats}></ReactQuill>
                </Col>
            </Form.Group>
        </div>
    )

}

export default BodyTextEdit;