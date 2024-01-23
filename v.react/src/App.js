import { Global, css } from '@emotion/react';
import { Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import MainPage from './mainPage';
import LoginPage from './login';
import JoinPage from './joinPage';
import Reset from './reset';
import './app.css';
import { SubPage } from './subPage';

function App() {
return (
  <>
    <Global styles={Reset}/>
    <Routes>
      <Route Component={MainPage} path="/" />
      <Route Component={SubPage} path="/reservation" />
      <Route Component={LoginPage} path="/login" />
      <Route Component={JoinPage} path="/join" />
    </Routes>
  </>
)

  
}

export default App;
