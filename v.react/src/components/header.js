import styled from "@emotion/styled";
import closeIcon from '../images/icons/close2.png';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./TopMenu.css";
import Logo1 from "../images/logo/typeLogo_wh_2.png";

const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
`;

const TopMenu = styled.div`
    width: 100%;
    height: 59px;
    justify-content: space-between;
    margin-top: 46px;
    padding: 0 80px;
    background-color: transparent;
    align-items: center;
`;

const TopMenuLogo = styled.a`
    display: block;
    width: 151px;
    height: 59px;
    background: url(${Logo1}) no-repeat center / contain;
    text-indent: -9999px;
`;

const TopMenuA = styled.a`
    color: #fff;
    cursor: pointer;
`;

const MainMenu = styled.div`
    width: 619px;
    justify-content: space-between;
    align-items: center;
`;

const MainMenuLi = styled.li`
    padding: 10px;
`;

const SubMenu = styled.div`
    width: 278px;
`;

const SubMenuLi = styled.li`
    padding: 20px;
`;

const TopBanner = styled.div`
    padding: 10px;
    width: 100%;
    background-color: #695239;
    text-align: center;
    color: #FFF; 
    position: relative;
`;

const TopBannerImg = styled.img`
    width: 30px;
    position: absolute;
    top: 50%;
    right: 120px;
    transform: translateY(-50%);
`;
 
export const HeaderCons = (props) => {

  // const topMenu = document.querySelector(".topMenu");

  // // const [position,setScroll] = useState(0);

  // const [scrollPosition, setScrollPosition] = useState(0);

  // // function onScroll() {
  // //   setScroll(window.scrollY);
  // // console.log(position);
  // // }

  // useEffect(()=>{
  //   window.addEventListener('scroll',updateScroll);
  //   return () =>{
  //     window.removeEventListener('scroll',updateScroll);
  //   }
  // },[]);

  // const updateScroll = () => {
  //   setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  // };

  // // useEffect(() => {
  // //   if (currentUrl === "/" && scrollPosition > 1000) {
  // //     topMenu.classList.add('scroll');
  // //   } else {
  // //     topMenu.classList.remove('scroll');
  // //   }
  // // }, [scrollPosition, currentUrl]);


  // // const navigate = useNavigate();
  // let currentUrl = window.location.pathname;


  // // const [scrollPosition, setScrollPosition] = useState(0);
  // // // const [headerColor, setHeaderColor] = useState("transparent");

  // // // Scroll 위치를 감지
  // // const updateScroll = () => {
  // //   setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  // // };

  // // useEffect(() => {
  // //   window.addEventListener("scroll", updateScroll);
  // //   return () => {
  // //     window.removeEventListener("scroll", updateScroll);
  // //   };
  // // }, []);

  //   // scroll 위치가 100이하라면 투명한 배경색을 지정하고, 아니면 흰색을 지정한다.
  // useEffect(() => {
  //   if (currentUrl === "/" && scrollPosition > 1000) {
  //     topMenu.classList.add('scroll');
  //   } else {
  //     topMenu.classList.remove('scroll');
  //   }
  // }, [scrollPosition, currentUrl]);


  return(

    <Header>
        <TopBanner>
          <p>경원재 앰버서더 인천 시민 25% 객실 할인</p>
          <a href="#!">
            <TopBannerImg src={closeIcon} alt="닫기" />
          </a>
        </TopBanner>
        <TopMenu className="topMenu row">
          <MainMenu className="row">
            <h1>
              <TopMenuLogo>로고</TopMenuLogo>
            </h1>
            <nav>
              <ul className="row">
                <MainMenuLi>
                  <TopMenuA>객실</TopMenuA>
                </MainMenuLi>
                <MainMenuLi>
                  <TopMenuA>다이닝</TopMenuA>
                </MainMenuLi>
                <MainMenuLi>
                  <TopMenuA>웨딩&미팅</TopMenuA>
                </MainMenuLi>
                <MainMenuLi>
                  <Link to={"/reservation"} style={{color: '#fff'}}>예약 / 멤버십</Link>
                </MainMenuLi>
              </ul>
            </nav>
          </MainMenu>
          <SubMenu>
            <ul className="row">
              <SubMenuLi>
                <TopMenuA >로그인</TopMenuA>
              </SubMenuLi>
              <SubMenuLi>
                <Link to={"/join"}>
                  <TopMenuA>회원가입</TopMenuA>
                </Link>
              </SubMenuLi>
              <SubMenuLi>
                <TopMenuA>KOR</TopMenuA>
              </SubMenuLi>
            </ul>
          </SubMenu>
        </TopMenu>
      </Header>
  );
};