import styled from "@emotion/styled";
import { useState } from "react";
import closeIcon from '../src/images/icons/close2.png';
import { Link } from "react-router-dom";
import { JoinCons } from "./components/join/join";
import { TopBtnCons } from "./components/topBtn";
import Modal from 'react-modal';
import Naver from "../src/images/icons/naver.png";
import Kakao from "../src/images/icons/kakao.png";
import Google from "../src/images/icons/google.png";
import { FooterCons } from "./components/footer";


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
    padding: 46px 80px;
    background-color: #fff;
    align-items: center;
`;

const TopMenuLogo = styled.a`
    display: block;
    width: 151px;
    height: 59px;
    background: url('/assets/logo/logo-Bl_2.png') no-repeat center / contain;
    text-indent: -9999px;
`;

const TopMenuA = styled.a`
    color: #000;
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

const ModalH2 = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 80px;
`;
const InputWrapper = styled.div`
  flex-direction: column;
  align-items: center;
`;
const ModalLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 12px;
  align-self: flex-start;
`;
const ModalInput = styled.input`
  width: 473px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #858585;
  margin-bottom: 20px;
`;
const ErrMsg = styled.p`
  height: 16px;
  color: red;
  font-size: 14px;
  margin: 0;
  margin-bottom: 15px;
  align-self: flex-start;
  display: none;
`;
const EndBtn = styled.button`
  width: 473px;
  height: 68px;
  background-color: #000;
  color: #FFF;
  font-size: 20px;
  font-weight: 500;
  margin: 18px auto;
  cursor: pointer;
`;
const ModalP = styled.p`
  align-self: flex-end;
  font-size: 16px;
  font-weight: 400;
  text-decoration-line: underline;
  cursor: pointer;
  margin-bottom: 34px;
`;
const SnsJoinP = styled.p`
  align-self: flex-end;
  font-size: 16px;
  font-weight: 400;
  text-decoration-line: underline;
  cursor: pointer;
  margin-bottom: 34px;
  width: 474px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-top: 1px solid #CACACA;
  margin: 0 auto;
  text-decoration-line: none;
`;
const Sns = styled.div`
  width: 245px;
  justify-content:space-between;
  margin: 0 auto;
`;
const SnsImg = styled.img`
  width: 56px;
  height: 56px;
  cursor: pointer;
`;
const CloseImg = styled.img`
width: 50px;
position:absolute;
top: 20px;
right: 20px;
`;

export const JoinPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return(
        <>
            <TopBtnCons/>
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
                        <Link to={"/"}>
                        <TopMenuLogo>로고</TopMenuLogo>
                        </Link>
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
                            <Link to={"/reservation"} style={{color: '#000'}}>예약 / 멤버십</Link>
                        </MainMenuLi>
                        </ul>
                    </nav>
                    </MainMenu>
                    <SubMenu>
                    <ul className="row">
                        <SubMenuLi>
                        <TopMenuA onClick={()=>setModalIsOpen(true)}>로그인</TopMenuA>
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
            <main>
                <JoinCons/>
                <section className="loginCons">
                    <Modal 
                    style={{
                    overlay: {
                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        left: 0,
                        top: 0,
                        zIndex: 998,
                        background: "rgba(0, 0, 0, .5)"
                    },
                        content: {
                        width:"798px",
                        height:"774px",
                        position: 'fixed',
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        backGround:"#fff", 
                        color:"#1a1a1a", 
                        padding:"90px 160px 0", 
                        display:"flex", 
                        flexDirection:"column", 
                        position:"relative",
                    }
                    }}
                    isOpen={modalIsOpen}>
                    <ModalH2 className="serif">로그인</ModalH2>
                    <InputWrapper className="row">
                        <ModalLabel htmlFor="ID">* 아이디</ModalLabel>
                        <ModalInput id="ID" name="ID" type="ID" />
                        <ErrMsg id="ID-err-msg">
                        아이디는 필수 입력 값입니다.
                        </ErrMsg>
                    </InputWrapper>
                    <InputWrapper className="row">
                        <ModalLabel htmlFor="password">* 비밀번호</ModalLabel>
                        <ModalInput id="password" name="password" type="password" />
                        <ErrMsg id="password-err-msg">
                        비밀번호는 필수 입력 값입니다.
                        </ErrMsg>
                    </InputWrapper>
                    <EndBtn className="end" type="button" onclick="onLogin();">
                        로그인
                    </EndBtn>
                    <ModalP>아이디/비밀번호 찾기</ModalP>
                    <SnsJoinP>간편 로그인</SnsJoinP>
                    <Sns className="row">
                        <SnsImg src={Naver} alt="" />
                        <SnsImg src={Kakao} alt="" />
                        <SnsImg src={Google} alt="" />
                    </Sns>
                    <CloseImg src={closeIcon} onClick={()=>setModalIsOpen(false)}/>
                    </Modal>
                </section>
            </main>
            <FooterCons/>
        </>
    );
};

export default JoinPage;