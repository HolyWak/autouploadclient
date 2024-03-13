import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeContent } from '../../states/store';


function BodyTextEdit() {
    const dispatch = useDispatch()
    const [body, setBody] = useState('')

    const saveBody = (content, delta, source, editor) => {
        setBody(content);
        dispatch(changeContent(content))
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
                        value={body}
                        modules={modules}
                        onChange={saveBody}
                        formats={formats}></ReactQuill>
                </Col>
            </Form.Group>
        </div>
    )

}

export default BodyTextEdit;