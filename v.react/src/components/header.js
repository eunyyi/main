import styled from "@emotion/styled";
import closeIcon from '../icons/close2.png';

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
    background: url('../logo/typeLogo_wh_2.png') no-repeat center / contain;
    text-indent: -9999px;
`;

const TopMenuA = styled.a`
    color: #000;
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
                  <a href="sub.html">예약 / 멤버십</a>
                </MainMenuLi>
              </ul>
            </nav>
          </MainMenu>
          <SubMenu>
            <ul className="row">
              <SubMenuLi>
                <a href="#!">
                  로그인
                </a>
              </SubMenuLi>
              <SubMenuLi>
                <a href="join.html">회원가입</a>
              </SubMenuLi>
              <SubMenuLi>
                <a href="#!">KOR</a>
              </SubMenuLi>
            </ul>
          </SubMenu>
        </TopMenu>
      </Header>
};