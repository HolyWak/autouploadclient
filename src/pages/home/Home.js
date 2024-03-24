import './Home.css'
import {useSelector } from "react-redux"
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
import RepImg from './RepImg';
import AccountInfo from './Account';





function Home() {

    //서버로 보낼 데이터 불러옴
    let data = useSelector((state) => { return state.data })

    //서버로 데이터 보내는 함수
    const postDataToServer = () => {

        // 필수 입력 필드 체크
        const missingFields = [];
        if (!data.account_info) missingFields.push('계정선택');
        if (!data.platform) missingFields.push('플랫폼');
        if (!data.title) missingFields.push('상품명');
        if (!data.price) missingFields.push('가격');
        if (!data.gender) missingFields.push('성별');
        if (!data.category) missingFields.push('카테고리');
        if (!data.quality) missingFields.push('상품상태');
        if (!data.content) missingFields.push('상품설명');
        if (!data.rep_img) missingFields.push('대표 이미지');
        //추가 이미지는 필수 값이 아님
        // if (!data.img_list) missingFields.push('추가 이미지');
        if (!data.tag_list) missingFields.push('태그');

        // gender가 'FK' 또는 'MK'일 때 kids_age가 비어있는지 확인
        if ((data.gender === 'FK' || data.gender === 'MK') && !data.kids_age) {
            missingFields.push('키즈 연령');
        }

        if (missingFields.length > 0) {
            alert(`${missingFields.join(', ')}을(를) 작성해주세요.`);
            return;
        }


        const formData = new FormData();
        formData.append('account_info', data.account_info);
        formData.append('platform', data.platform);
        formData.append('title', data.title);
        formData.append('price', data.price);
        formData.append('gender', data.gender);
        formData.append('kids_age', data.kids_age);
        formData.append('category', data.category);
        formData.append('quality', data.quality);
        formData.append('content', data.content);
        formData.append('tag_list', data.tag_list);

        // 각 이미지 파일들을 Promise 배열로 저장
        const promises = data.img_list.map((imageUrl, index) => {
            return fetch(imageUrl)
                .then(res => res.blob())
                .then(blob => {
                    formData.append(`image${index + 1}`, blob, `image${index + 1}.jpg`);
                })
                .catch(error => console.error('Error fetching image:', error));
        });

        // rep_img에 있는 이미지를 Promise로 받아와서 FormData에 추가
        const repImgPromise = fetch(data.rep_img)
            .then(res => res.blob())
            .then(blob => {
                // Blob 객체를 FormData에 추가
                formData.append('rep_img', blob, 'rep_image.jpg');
            })
            .catch(error => console.error('Error fetching rep image:', error));

        // 모든 이미지 파일들을 받아온 후에 FormData를 서버로 전송
        Promise.all([...promises, repImgPromise])
            .then(() => {
                axios.post('http://localhost:5000/write', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                    .then(response => {
                        console.log('Data sent successfully:', response.data);
                    })
                    .catch(error => {
                        console.error('Error sending data:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching image:', error);
            });

        //formData확인
        // Promise.all([...promises, repImgPromise]).then(() => {
        //     for (const pair of formData.entries()) {
        //         console.log(pair[0], pair[1]);
        //     }
        // })


    };


    //redux데이터 확인용 함수. 
    const checkreduxdata = () => {
        console.log(data)
    }


    return (
        <div >
            <div className='body'>
                <div className='component'>
                    <AccountInfo></AccountInfo>
                </div>
                <div className='component'>
                    <Platform></Platform>
                </div>
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
                    <RepImg></RepImg>
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