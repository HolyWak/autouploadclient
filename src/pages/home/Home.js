import Junggo from './Junggo';
import { useState } from 'react';
import './Home.css'
import { useSelector } from "react-redux"
import axios from 'axios'
import Title from './Title';
import Platform from './Platform';
import Price from './Price';
import Quantity from './Quantity';
import Category from './Category';
import Quality from './Quality';
import BodyTextEdit from './BodyTextEdit';
import Images from './Images';
import Tag from './Tag';





function Home() {

    //서버로 보낼 데이터 불러옴
    let data = useSelector((state) => { return state.data })

    return (
        <div >
            <div className='body'>
                {/*Platform의 경우 자체 css 파일이 있기 때문에 여기서 div로 감싸주지 않음 */}
                <Platform></Platform>
                <div className='component'>
                    <Title></Title>
                </div>
                <div className='component'>
                    <Price></Price>
                </div>
                <div className='component'>
                    <Quantity></Quantity>
                </div>
                <div className='component'>
                    <Category></Category>
                </div>
                <div className='component'>
                    <Quality></Quality>
                </div>
                <div className='component'>
                    <BodyTextEdit></BodyTextEdit>
                </div>
                <div className='component'>
                    <Images></Images>
                </div>
                <div className='component'>
                    <Tag></Tag>
                </div>

            </div>
            <div className='footer'>
                <button className='footer-btn' onClick={() => {
                    console.log(data);
                    // axios.post('http://localhost:5000/write', data);
                    let timer = setTimeout(()=>{ 
                        alert('완료되었습니다');
                    window.location.reload(); 
                     }, 2000);
                    
                }}> 게시물 등록 </button>
            </div>



        </div>
    )
}

export default Home;