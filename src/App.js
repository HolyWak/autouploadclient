import './App.css';

import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Home';
import { Button, Container, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Navbar className="bg-body-tertiary justify-content-between">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/demologo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            자동게시물업로드
          </Navbar.Brand>
        <Button>계정 관리</Button>
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
