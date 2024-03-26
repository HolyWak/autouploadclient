import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import { Container, Navbar } from 'react-bootstrap';

function App() {

  // 크롬에서 구글 번역 응용 프로그램이 활성화되어 있는지 확인하는 함수
  function isTranslationAppEnabled() {
    return window.chrome && window.chrome.translate && window.chrome.translate.onTranslateEnabled();
  }

  // 구글 번역을 비활성화하는 함수
  function disableTranslation() {
    if (isTranslationAppEnabled()) {
      document.documentElement.classList.add('notranslate');
      window.chrome.translate.setTranslateEnabled(false);
    }
  }
  // 앱이 로드될 때 번역을 비활성화
  useEffect(() => {
    disableTranslation();
  }, [])
  
  return (
    <div className="App">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/demologo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            통합 게시물 업로드
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register'></Route>
      </Routes>
    </div>
  );
}

export default App;
