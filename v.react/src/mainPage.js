
import floorInfo from './main_pc-floorInfo.png';
import doubleMain from './double/double_main.jpg';
import double2 from './double/double2.jpg';
import double3 from './double/double3.jpg';
import double4 from './double/double4.jpg';
import double5 from './double/double5.jpg';
import doubleSingleMain from './double_single/double_single_main.jpg';
import doubleSingle2 from './double_single/double_single2.jpg';
import doubleSingle3 from './double_single/double_single3.jpg';
import doubleSingle4 from './double_single/double_single4.jpg';
import doubleSingle5 from './double_single/double_single5.jpg';
import sweetMain from './sweet/sweet_main.jpg';
import sweet2 from './sweet/sweet2.jpg';
import sweet3 from './sweet/sweet3.jpg';
import sweet4 from './sweet/sweet4.jpg';
import sweet5 from './sweet/sweet5.jpg';
import ondolMain from './ondol/ondol_main.jpg';
import ondol2 from './ondol/ondol2.jpg';
import ondol3 from './ondol/ondol3.jpg';
import ondol4 from './ondol/ondol4.jpg';
import ondol5 from './ondol/ondol5.jpg';
import royalMain from './royal/royal_main.jpg';
import royal2 from './royal/royal2.jpg';
import royal3 from './royal/royal3.jpg';
import royal4 from './royal/royal4.jpg';
import royal5 from './royal/royal5.jpg';
import royal6 from './royal/royal6.jpg';
import naver from './icons/naver.png';
import kakao from './icons/kakao.png';
import google from './icons/google.png';
import accorLogo from './icons/Accor_Logo.png';
import ambassaLogo from './icons/ambassador_logo.png';
import tripLogo from './icons/tripAdvisor.png';
import facebookLogo from './icons/faceBook.png';
import instaLogo from './icons/insta.png';
import { About, AboutButton, AboutDetail, AboutImg, AboutText, AboutTitle, Floor, FloorBtn, FloorH1, FloorImg, FloorP, H1, H4, Header, MainMenu, MainMenuLi, MainVisual, MainVisualDiv, MainVisualH1, MainVisualH3, Offers, OffersLi, OffersUl, RoomH1, RoomH4, SubMenu, SubMenuLi, TopBanner, TopBannerImg, TopBtn, TopBtnA, TopBtnImg, TopMenu, TopMenuA, TopMenuLogo } from './main.styles';
import { HeaderCons } from './components/header';
import { TopBtnCons } from './components/topBtn';


const MainPage = () => {

  return (
    <>
      <TopBtnCons/>
      <HeaderCons/>
      <main>
        <MainVisual>
          <MainVisualH1 className="serif">비움과 사색의 공간</MainVisualH1>
          <MainVisualH3>
            느림의 공간인 길, 비움의 공간인 마당, 사색의 공간인 후원을 품은 한옥
            호텔 경원재
          </MainVisualH3>
          <MainVisualDiv />
        </MainVisual>
        <About className="inner row">
          <AboutText>
            <h1 className="serif">ABOUT 경원재</h1>
            <AboutTitle>비움과 사색의 공간 경원재 앰배서더 인천</AboutTitle>
            <AboutDetail>
              최첨단 국제도시 인천 송도의 현대적인 빌딩 숲 속에서 고풍스러운
              전통미를 뽐내며 장관을 연출하는 경원재 앰배서더 인천은 특급 호텔
              서비스가 접목된 5성급 한옥호텔입니다.{" "}
            </AboutDetail>
            <AboutButton>자세히 보기</AboutButton>
          </AboutText>
          <AboutImg></AboutImg>
        </About>
        <Offers>
          <H1 className="serif">Hotel Offers</H1>
          <H4 className="serif">
            최상의 가치와 특별한 라이프 스타일을 경험할 수 있도록 다양한 오퍼를
            제공하고 있습니다.
          </H4>
          <div>
            <OffersUl className="row">
              <OffersLi />
              <OffersLi />
              <OffersLi />
              <OffersLi />
              <OffersLi />
              <OffersLi />
            </OffersUl>
          </div>
        </Offers>
        <Floor>
          <div className="inner row">
            <div>
              <FloorH1 className="serif">Floor Guide</FloorH1>
              <FloorP>
                최첨단 국제도시 인천 송도의 현대적인 빌딩 숲 속에서 고풍스러운
                전통미를 뽐내며 장관을 연출하는 경원재 앰배서더 인천은 특급 호텔
                서비스가 접목된 5성급 한옥호텔입니다.{" "}
              </FloorP>
              <FloorBtn>자세히 보기</FloorBtn>
            </div>
            <FloorImg src={floorInfo} alt="" />
          </div>
        </Floor>
        <section className="room inner">
          <RoomH1 className="serif">ROOM TYPE</RoomH1>
          <RoomH4>
            우리 고유의 한옥을 연상케 하는 경원재 앰배서더 인천에는 스위트 룸 14채를
            포함하여 총 30개의 객실이 있습니다. <br />
            대한민국 명장들의 손길이 느껴지는 객실에서 안락한 휴식과 성공적인
            비즈니스 업무를 위한 서비스를 경험해 보시기 바랍니다.
          </RoomH4>
          <div id="double">
            <ul className="row">
              <li className="on">
                <a href="#!">디럭스 더블</a>
              </li>
              <li>
                <a href="#!" onclick="doubleSingle()" className="doublePre">
                  디럭스 더블 &amp; 싱글
                </a>
              </li>
              <li>
                <a href="#!" onclick="sweet()">
                  디럭스 스위트
                </a>
              </li>
              <li>
                <a href="#!" onclick="ondol()">
                  디럭스 온돌
                </a>
              </li>
              <li>
                <a href="#!" onclick="royal()">
                  로얄 스위트
                </a>
              </li>
            </ul>
            <div className="swiper mySwiper2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={doubleMain} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={double2} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={double3} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={double4} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={double5} alt=''/>
                </div>
              </div>
            </div>
            <div thumbsslider="" className="swiper mySwiper1">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={doubleMain} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={double2} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={double3} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={double4} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={double5} alt=''/>
                </div>
              </div>
            </div>
          </div>
          <div id="doubleSingle">
            <ul className="row">
              <li>
                <a href="#!" onclick="double()">
                  디럭스 더블
                </a>
              </li>
              <li className="on">
                <a href="#!">디럭스 더블 &amp; 싱글</a>
              </li>
              <li>
                <a href="#!" onclick="sweet()">
                  디럭스 스위트
                </a>
              </li>
              <li>
                <a href="#!" onclick="ondol()">
                  디럭스 온돌
                </a>
              </li>
              <li>
                <a href="#!" onclick="royal()">
                  {" "}
                  로얄 스위트
                </a>
              </li>
            </ul>
            <div className="swiper mySwiper4">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={doubleSingleMain}  alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={doubleSingle2}  alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={doubleSingle3}  alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={doubleSingle4}  alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={doubleSingle5} alt=''/>
                </div>
              </div>
            </div>
            <div thumbsslider="" className="swiper mySwiper3">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={doubleSingleMain} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={doubleSingle2} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={doubleSingle3} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={double4} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={double5} alt=''/>
                </div>
              </div>
            </div>
          </div>
          <div id="sweet">
            <ul className="row">
              <li>
                <a href="#!" onclick="double()">
                  디럭스 더블
                </a>
              </li>
              <li>
                <a href="#!" onclick="doubleSingle()">
                  디럭스 더블 &amp; 싱글
                </a>
              </li>
              <li className="on">
                <a href="#!">디럭스 스위트</a>
              </li>
              <li>
                <a href="#!" onclick="ondol()">
                  디럭스 온돌
                </a>
              </li>
              <li>
                <a href="#!" onclick="royal()">
                  로얄 스위트
                </a>
              </li>
            </ul>
            <div className="swiper mySwiper6">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={sweetMain} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={sweet2} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={sweet3} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={sweet4} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={sweet5} alt=''/>
                </div>
              </div>
            </div>
            <div thumbsslider="" className="swiper mySwiper5">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={sweetMain} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={sweet2} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={sweet3} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={sweet4} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={sweet5} alt=''/>
                </div>
              </div>
            </div>
          </div>
          <div id="ondol">
            <ul className="row">
              <li>
                <a href="#!" onclick="double()">
                  디럭스 더블
                </a>
              </li>
              <li>
                <a href="#!" onclick="doubleSingle()">
                  디럭스 더블 &amp; 싱글
                </a>
              </li>
              <li>
                <a href="#!" onclick="sweet()">
                  디럭스 스위트
                </a>
              </li>
              <li className="on">
                <a href="#!">디럭스 온돌</a>
              </li>
              <li>
                <a href="#!" onclick="royal()">
                  로얄 스위트
                </a>
              </li>
            </ul>
            <div className="swiper mySwiper8">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={ondolMain} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={ondol2} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={ondol3} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={ondol4} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={ondol5} alt=''/>
                </div>
              </div>
            </div>
            <div thumbsslider="" className="swiper mySwiper7">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={ondolMain} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={ondol2} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={ondol3} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={ondol4} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={ondol5} alt=''/>
                </div>
              </div>
            </div>
          </div>
          <div id="royal">
            <ul className="row">
              <li>
                <a href="#!" onclick="double()">
                  디럭스 더블
                </a>
              </li>
              <li>
                <a href="#!" onclick="doubleSingle()">
                  디럭스 더블 &amp; 싱글
                </a>
              </li>
              <li>
                <a href="#!" onclick="sweet()">
                  디럭스 스위트
                </a>
              </li>
              <li>
                <a href="#!" onclick="ondol()">
                  디럭스 온돌
                </a>
              </li>
              <li className="on">
                <a href="#!">로얄 스위트</a>
              </li>
            </ul>
            <div className="swiper mySwiper10">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={royalMain} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={royal2} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={royal3} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={royal4} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={royal5} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={royal6} alt=''/>
                </div>
              </div>
            </div>
            <div thumbsslider="" className="swiper mySwiper9">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={royalMain} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={royal2} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={royal3} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={royal4} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={royal5} alt=''/>
                </div>
                <div className="swiper-slide">
                  <img src={royal6} alt=''/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="etc">
          <h1 className="serif">Dining, Wedding, Party</h1>
          <h4>
            엄선된 식재료만을 골라 임금님께 수라를 올리듯 정성껏 요리하며 찬
            하나하나에도 섬세한 맛을 살려 특별한 미각을 선사하는 수라, <br />
            송도 신도시의 편리함과 고풍스러운 한옥에서의 특별한 웨딩, 고려시대
            주심포 방식으로 건축된 경원루
          </h4>
          <div className="inner dining">
            <h2 className="serif">DINING</h2>
            <div className="swiper-etc">
              <div className="swiper-scrollbar" />
              <div className="swiper-wrapper row">
                <div className="swiper-slide" />
                <div className="swiper-slide" />
                <div className="swiper-slide" />
              </div>
            </div>
          </div>
          <div className="inner wedding">
            <h2 className="serif">WEDDING</h2>
            <div className="swiper-etc">
              <div className="swiper-scrollbar" />
              <div className="swiper-wrapper row">
                <div className="swiper-slide" />
                <div className="swiper-slide" />
                <div className="swiper-slide" />
              </div>
            </div>
          </div>
          <div className="inner party">
            <h2 className="serif">PARTY</h2>
            <div className="swiper-etc">
              <div className="swiper-scrollbar" />
              <div className="swiper-wrapper row">
                <div className="swiper-slide" />
                <div className="swiper-slide" />
                <div className="swiper-slide" />
              </div>
            </div>
          </div>
        </section>
        <section className="loginCons">
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
        </section>
        <footer>
          <div className="inner">
            <ul className="row">
              <li>해외호텔예약</li>
              <li>고객센터</li>
              <li>개인정보처리방침</li>
              <li>멤버십 약관</li>
              <li>채용</li>
              <li>사이트맵</li>
            </ul>
            <div className="icon row">
              <div className="row left">
                <img src={accorLogo} alt="" />
                <img src={ambassaLogo} alt="" />
              </div>
              <div className="row right">
                <img src={tripLogo} alt="" />
                <img src={facebookLogo} alt="" />
                <img src={instaLogo} alt="" />
              </div>
            </div>
            <div className="text row">
              <p>인천경제자유구역청</p>
              <p>인천광역시 연수구 테크노파크로 200</p>
              <p>TEL. 032-729-1101</p>
              <p>사업자등록번호 379-83-00011</p>
              <p>통신판매신고번호 인천연수구0193호</p>
              <p>대표 이원재</p>
            </div>
            <p>Copyright (c) 2023 Ambassador Hotel Group. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
);
}

export default MainPage;