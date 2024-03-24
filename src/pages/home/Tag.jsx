import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { changeTagList } from '../../states/store';


//TODO:x버튼을 누르지 않고 백스페이스로는 지워지지않는 문제 해결
function Tag() {

    const [tagItem, setTagItem] = useState('')
    const [tagList, setTagList] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(changeTagList(tagList))
    }, [tagList])

    const onKeyPress = e => {
        if (e.target.value.length !== 0 && e.key === 'Enter') {
            if (e.nativeEvent.isComposing) return
            submitTagItem()
        } else if (e.key === 'Backspace' && !e.target.value && tagList.length > 0) {
            setTagList(tagList.slice(0, tagList.length - 1))
        }
    }

    const submitTagItem = () => {
        let updatedTagList = [...tagList]
        updatedTagList.push(tagItem)
        setTagList(updatedTagList)
        setTagItem('')
    }

    const deleteTagItem = e => {
        const deleteTagItem = e.target.parentElement.firstChild.innerText
        const filteredTagList = tagList.filter(tagItem => tagItem !== deleteTagItem)
        setTagList(filteredTagList)
    }

    return (
        //컴포넌트
        <div >
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    태그
                </Form.Label>
                <Col >
                    <TagBox>
                        {tagList.map((tagItem, index) => {
                            return (
                                <TagItem key={index}>
                                    <Text>{tagItem}</Text>
                                    <Delbtn onClick={deleteTagItem}>x</Delbtn>
                                </TagItem>
                            )
                        })}
                        <TagInput
                            type='text'
                            placeholder='엔터를 눌러 태그를 추가하세요. ⓧ을 눌러 태그를 삭제할 수 있습니다'
                            tabIndex={2}
                            onChange={e => setTagItem(e.target.value)}
                            value={tagItem}
                            onKeyDown={onKeyPress}
                        />
                    </TagBox>

                </Col>
            </Form.Group>
        </div>
    )

}


const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 50px;
  /* margin: 10px; */
  padding: 0 10px;
  border: 1px solid #DEE2E6;
  border-radius: 10px;

  &:focus-within {
    border-color: 3px solid #C7DBFF; /* 포커스되었을 때의 테두리 색상 */
    box-shadow: 0 0 5px #C7DBFF; /* 포커스되었을 때의 그림자 효과 */
    
  }
`

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: #F2994A;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  font-weight: bold;
`

const Text = styled.span``

const Delbtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1px solid white;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  background-color:#F2994A ;
  color: white;
  font-size: 10px;
`

const TagInput = styled.input`
  display: inline-flex;
  min-width: 600px;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
`

export default Tag;