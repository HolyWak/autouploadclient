import React from 'react';
import styled from 'styled-components';
import Spinner from './spinner.gif';

function Loading() {
    return (
        <Background>
            <LoadingText>데이터를 전송하고 있어요! 잠시만 기다려주세요</LoadingText>
            <img src={Spinner} alt="로딩중" width="5%" />
        </Background>
    )
}
const Background = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #ffffffb7;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoadingText = styled.div`
    font: 1rem 'Noto Sans KR';
    text-align: center;
`;

export default Loading;


