
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
import { useState } from 'react';
import styled from "@emotion/styled";
import { EtcCons } from './components/main/etc';
import { FooterCons } from './components/footer';


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


const MainPage = () => {
  let roomList = [
    {target:'01', title: '디럭스 더블', component:<Double/>},
    {target:'02', title: '디럭스 더블&싱글', component:<DoubleSingle/>},
    {target:'03', title: '디럭스 스위트', component:<Sweet/>},
    {target:'04', title: '디럭스 온돌', component:<Ondol/>},
    {target:'05', title: '로얄 스위트', component:<Royal/>},
  ];
  const [target, setTarget] =useState('01');
  const [viewHeader, setViewHeader] = useState(true)

  return (
    <>
      <TopBtnCons/>
      <HeaderCons/>
      <main>
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
        {/* <section className="loginCons">
          <div className="layer">
            <div className="modal">
              <h2 className="serif">로그인</h2>
              <div className="input-wrapper row">
                <label htmlFor="ID">* 아이디</label>
                <input id="ID" name="ID" type="ID" />
                <p className="err-msg" id="ID-err-msg">
                  아이디는 필수 입력 값입니다.
                </p>
              </div>
              <div className="input-wrapper row">
                <label htmlFor="password">* 비밀번호</label>
                <input id="password" name="password" type="password" />
                <p className="err-msg" id="password-err-msg">
                  비밀번호는 필수 입력 값입니다.
                </p>
              </div>
              <button className="end" type="button" onclick="onLogin();">
                로그인
              </button>
              <p>아이디/비밀번호 찾기</p>
              <p className="snsJoin">간편 로그인</p>
              <div className="sns row">
                <img src={naver} alt="" />
                <img src={kakao} alt="" />
                <img src={google} alt="" />
              </div>
            </div>
          </div>
          <div id="dim"></div>
        </section> */}
      </main>
      <FooterCons/>
    </>
);
}

export default MainPage;