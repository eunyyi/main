
import { HeaderCons } from './components/header';
import { TopBtnCons } from './components/topBtn';
import { MainVisualCons } from './components/main/mainVisual';
import { AboutCons } from './components/main/about';
import { OfferCons } from './components/main/offer';
import { FloorCons } from './components/main/floor';
import { Double} from './components/main/room-double';
import { DoubleSingle } from './components/main/room-doubleSingle';
import { Sweet } from './components/main/room-sweet';
import { Ondol } from './components/main/room-ondol';
import { Royal } from './components/main/room-royal';
import { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import { EtcCons } from './components/main/etc';
import { FooterCons } from './components/footer';
import { Link, useNavigate } from "react-router-dom";
import closeIcon from '../src/images/icons/close2.png';
import Modal from 'react-modal';
import Naver from "../src/images/icons/naver.png";
import Kakao from "../src/images/icons/kakao.png";
import Google from "../src/images/icons/google.png";
import {useFormik} from "formik";
import * as Yup from 'yup';
import "yup-phone";
import Logo1 from "./images/logo/typeLogo_wh_2.png";
import Logo2 from "./images/logo/logo-Bl_2.png";
import ScrollToTopOnMount from './components/onMount';

// import Logo1 from "../images/logo/typeLogo_wh_2.png";

let userSchema = Yup.object().shape({
  id: Yup.string('문자타입이 아닙니다')
      .min(5,'5글자 미만은 안됩니다')
      .max(30,'10글자 초과는 안됩니다')
      .required('필수입력값입니다'), 
  password: Yup.string('문자타입이 아닙니다')
      .min(6,'6글자 미만은 안됩니다')
      .max(30,'30글자 초과는 안됩니다')
      .required('필수입력값입니다'),    
});
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
    background-color: transparent;
    align-items: center;
    display: flex;
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
    /* display: ${(props) => (props.bannerIsOpen ? "none" : "block")}; */
`;

const TopBannerImg = styled.img`
    width: 30px;
    position: absolute;
    top: 50%;
    right: 120px;
    transform: translateY(-50%);
`;

export const RoomH1 = styled.h1`
    font-size:45px;
    text-align: center;
    font-weight: 500;
    margin-bottom:25px;

;`

export const RoomH4 = styled.h4`
    font-size:22px;
    font-weight:400;
    text-align: center;
    margin-bottom:100px
;`

export const RoomLi = styled.li`
    padding: 17px 20px;

    &:hover {
      background-color: #695239;

      a{
        color:#fff;
      }
    }

    
`;

export const RoomA = styled.a`
    color: #000;
    font-size: 24px;

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

const useScroll = () => {
  const [state, setState] = useState({
    x:0,
    y:0,
  });

  const onScroll = () => {
    setState({y: window.scrollY, x: window.scrollX});
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return state;
}

const MainPage = () => {
  const navigate = useNavigate();
  let roomList = [
    {target:'01', title: '디럭스 더블', component:<Double/>},
    {target:'02', title: '디럭스 더블&싱글', component:<DoubleSingle/>},
    {target:'03', title: '디럭스 스위트', component:<Sweet/>},
    {target:'04', title: '디럭스 온돌', component:<Ondol/>},
    {target:'05', title: '로얄 스위트', component:<Royal/>},
  ];
  const [target, setTarget] =useState('01');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bannerIsOpen, setBannerIsOpen] = useState(true);

  const formik = useFormik({
    initialValues : {
        id:'',
        password:'', 
        passwordCheck:''
    },
    onSubmit: () => {
      formik.validateForm().then(() => {
          if (Object.keys(formik.errors).length === 0) {
              alert('로그인이 완료되었습니다!');
              setModalIsOpen(false); 
              navigate('/');
              console.log('성공');
          } else {
              alert('로그인이 실패했습니다!'); 
          }
      });
  },
    validationSchema: userSchema
});

  const {y} = useScroll();
  const headerStyle = {
    backgroundImage: y > 1000 ? `url(${Logo2})` : `url(${Logo1})`,
  };

  return (
    <div>
      <ScrollToTopOnMount />
      <TopBtnCons/>
      <Header>
        {bannerIsOpen && (
          <TopBanner>
            <p>경원재 앰버서더 인천 시민 25% 객실 할인</p>
            <TopBannerImg src={closeIcon} alt="닫기" onClick={()=>setBannerIsOpen(false)}/>
          </TopBanner>
        )}
        <TopMenu className="row" 
        style={{
          backgroundColor: y > 1000 ? 'white' : 'transparent', padding: y > 1000 ? '46px 80px' : '0 80px', margin: y > 1000 ? '0' : '46px'}}>
          <MainMenu className="row">
            <h1>
              <Link to={'/'}>
                <TopMenuLogo style={headerStyle}>로고</TopMenuLogo>
              </Link>
            </h1>
            <nav>
              <ul className="row">
                <MainMenuLi>
                  <TopMenuA style={{color: y > 1000 ? '#4c4949' : 'white' }}>객실</TopMenuA>
                </MainMenuLi>
                <MainMenuLi>
                  <TopMenuA style={{color: y > 1000 ? '#4c4949' : 'white' }}>다이닝</TopMenuA>
                </MainMenuLi>
                <MainMenuLi>
                  <TopMenuA style={{color: y > 1000 ? '#4c4949' : 'white' }}>웨딩&미팅</TopMenuA>
                </MainMenuLi>
                <MainMenuLi>
                  <Link to={"/reservation"} style={{color: y > 1000 ? '#4c4949' : 'white' }}>예약 / 멤버십</Link>
                </MainMenuLi>
              </ul>
            </nav>
          </MainMenu>
          <SubMenu>
            <ul className="row">
              <SubMenuLi>
                <TopMenuA onClick={()=>setModalIsOpen(true)}
                style={{color: y > 1000 ? '#4c4949' : 'white', cursor:'pointer' }}>로그인</TopMenuA>
              </SubMenuLi>
              <SubMenuLi>
                <Link to={"/join"}>
                  <TopMenuA
                  style={{color: y > 1000 ? '#4c4949' : 'white' }}>회원가입</TopMenuA>
                </Link>
              </SubMenuLi>
              <SubMenuLi>
                <TopMenuA
                style={{color: y > 1000 ? '#4c4949' : 'white' }}>KOR</TopMenuA>
              </SubMenuLi>
            </ul>
          </SubMenu>
        </TopMenu>
      </Header>
      <main >
        <MainVisualCons/>
        <AboutCons/>
        <OfferCons/>
        <FloorCons/>
        <section className="room inner">
          <RoomH1 className="serif">ROOM TYPE</RoomH1>
          <RoomH4>
            우리 고유의 한옥을 연상케 하는 경원재 앰배서더 인천에는 스위트 룸 14채를
            포함하여 총 30개의 객실이 있습니다. <br />
            대한민국 명장들의 손길이 느껴지는 객실에서 안락한 휴식과 성공적인
            비즈니스 업무를 위한 서비스를 경험해 보시기 바랍니다.
          </RoomH4>
          <ul className='row'>
            {
              roomList.map((el)=>
              <RoomLi
                key={el.target}
                onClick={()=>{setTarget(el.target)}}>
                  <RoomA style={{cursor:'pointer'}}>{el.title}</RoomA>
              </RoomLi>
              )
            }
          </ul>
            {
              roomList.find((el)=>{return el.target === target}).component
            }
        </section>
        <EtcCons/>
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
              <form>
              <InputWrapper className="row">
                  <ModalLabel htmlFor="ID">* 아이디</ModalLabel>
                  <ModalInput 
                  id="id" 
                  name="id" 
                  type="id" 
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange} 
                  value={formik.values.id}
                  />
                  {formik.touched.id && formik.errors.id ? (
                  <ErrMsg>{formik.errors.id}</ErrMsg>
                  ) : null}
              </InputWrapper>
              <InputWrapper className="row">
                  <ModalLabel htmlFor="password">* 비밀번호</ModalLabel>
                  <ModalInput 
                  id="password" 
                  name="password" 
                  type="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange} 
                  value={formik.values.password}
                    />
                  {formik.touched.password && formik.errors.password ? (
                  <ErrMsg>{formik.errors.password}</ErrMsg>
                  ) : null}
              </InputWrapper>
              </form>                    
                <EndBtn className="end" type="submit" onClick={formik.handleSubmit}>
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
    </div>
);
}

export default MainPage;