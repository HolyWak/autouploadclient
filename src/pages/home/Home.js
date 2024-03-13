import Junggo from './Junggo';
import { useState } from 'react';
import './Home.css'
import { useDispatch, useSelector } from "react-redux"
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
import Gender from './Gender';





function Home() {

    //서버로 보낼 데이터 불러옴
    let data = useSelector((state) => { return state.data })
    const dispatch = useDispatch()

    //서버로 데이터 보내는 함수
    const postDataToServer = () => {
        // FormData 생성
        const formData = new FormData();
        formData.append('platform', data.platform);
        formData.append('title', data.title);
        formData.append('price', data.price);
        // 나머지 필드들도 추가해야함
    
        // img_list에 있는 이미지들을 formData에 추가
        data.img_list.forEach((imageUrl, index) => {
          // 이미지 파일의 URL을 Blob 객체로 변환
          fetch(imageUrl)
            .then(res => res.blob())
            .then(blob => {
              // Blob 객체를 FormData에 추가
              formData.append(`image${index + 1}`, blob, `image${index + 1}.jpg`);
            })
            .catch(error => console.error('Error fetching image:', error));
        });
    
        // rep_img에 있는 이미지를 formData에 추가
        // fetch(data.rep_img)
        //   .then(res => res.blob())
        //   .then(blob => {
        //     // Blob 객체를 FormData에 추가
        //     formData.append('rep_img', blob, 'rep_image.jpg');
        //   })
        //   .catch(error => console.error('Error fetching rep image:', error));
    
        // axios를 사용하여 서버에 데이터 전송
        axios.post('http://localhost:5000/write', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // FormData를 사용하는 경우 반드시 Content-Type을 설정해야 합니다.
          },
        })
        .then(response => {
          // 성공 처리
          console.log('Data sent successfully:', response.data);
        })
        .catch(error => {
          // 실패 처리
          console.error('Error sending data:', error);
        });

        //formdata 의 json 값 출력. 파일은 확인 불가. 
        for (let pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
          }
        
      };

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
                {/*수량 삭제*/}
                {/* <div className='component'>
                    <Quantity></Quantity>
                </div> */}
                <div className='component'>
                    <Gender></Gender>
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
                <button className='footer-btn' onClick={postDataToServer}> 게시물 등록 </button>
            </div>



        </div>
    )
}

export default Home;