import './App.css';

import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Home';
import { Button, Container, Navbar } from 'react-bootstrap';

function App() {
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
