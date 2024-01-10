import styled from "@emotion/styled";
import closeIcon from '../icons/close2.png';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    background: url('/assets/logo/typeLogo_wh_2.png') no-repeat center / contain;
    text-indent: -9999px;
`;

const TopMenuA = styled.a`
    color: #fff;
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

  const [scrollPosition, setScrollPosition] = useState(0);
  let currentUrl = window.location.pathname;
  const [topMenu, setTopMenu] = useState("transparent");

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    if (currentUrl === "/" && scrollPosition < 1000) {
      setTopMenu("#ffffff"); 
    } else {
      setTopMenu("transparent"); 
    }
  }, [scrollPosition, currentUrl]);



  return(

    <Header>
        <TopBanner>
          <p>경원재 앰버서더 인천 시민 25% 객실 할인</p>
          <a href="#!">
            <TopBannerImg src={closeIcon} alt="닫기" />
          </a>
        </TopBanner>
        <TopMenu className="row">
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
                <TopMenuA>로그인</TopMenuA>
              </SubMenuLi>
              <SubMenuLi>
                <TopMenuA>회원가입</TopMenuA>
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