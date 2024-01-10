import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { HeaderCons2 } from "./components/header2";
import { ResCons } from "./components/sub/reservation";


export const SubPage = () => {

    return(
    <>
        <HeaderCons2/>
        <main>
            <ResCons/>
            <section className="membership inner">
            <h1 className="serif">MEMBERSHIP</h1>
            <div className="img" />
            <div className="joinInfo">
                <h2>가입 안내</h2>
                <div>
                <p className="top">발급 대상</p>
                <p className="bottom">앰배서더 호텔을 이용하는 국내외 개인 고객</p>
                </div>
                <div>
                <p className="top">제외 대상</p>
                <p className="bottom">
                    단체, 법인, 협회, 만 19세 미만 미성년자, 기타 호텔에서 정한 범주의
                    고객
                </p>
                </div>
                <div>
                <p className="top">발급처</p>
                <p className="bottom">앰배서더 호텔</p>
                <p className="bottom">www.ambatel.com (PC, 모바일웹, 모바일앱)</p>
                </div>
                <div>
                <p className="top">유의사항</p>
                <p className="bottom">
                    회원 필수 정보 (성함, 성별, 생년월일, 휴대전화번호)가 누락된 경우
                    포인트 사용이 제한되오니 빠짐없이 입력해 주십시오.
                </p>
                </div>
            </div>
            <div className="joinQue">
                <h2>가입 문의</h2>
                <div>
                <p className="top">전화</p>
                <p className="bottom">
                    02) 2278-4100 월~금 09:30~18:00(12:00~13:30 제외)
                </p>
                </div>
                <div>
                <p className="top">이메일</p>
                <p className="bottom">ambassadorclub@ambatel.com</p>
                </div>
            </div>
            </section>
            <section className="card">
            <div className="clubAmber">
                <h2>CLUB AMBER</h2>
                <div className="cardCons row">
                <img src="images/card1.png" alt="" />
                <div>
                    <p>객실, 식음료 할인&amp;적립</p>
                    <p>회원 전용 프로모션, 특전 제공</p>
                    <p>라이프 스타일별로 구성된 숙박권/쿠폰 제공</p>
                    <button>유료 멤버십 가입하기</button>
                </div>
                </div>
                <div className="plus">
                <p>
                    *인원 할인은 어린이 포함 적용 (어린이 규정은 호텔마다 상이) <br />
                    *프로모션, 연회 행사, 리테일 상품 할인 적용 제외 <br />
                    *노보텔 앰배서더 서울 강남- 우브리앙: 맡김차림 메뉴 1 0% 할인-
                    홍보각: 베버리지, 코스, 스페셜 메뉴 10% 할인 <br />
                    *머큐어 앰배서더 서울 홍대 ‘식음’ 할인/적립 제외 <br />
                    *식음 업장 할인은 동시에 여러 테이블에서 이용하거나, 인원을 나누어서
                    할인 적용되지 않음
                </p>
                </div>
            </div>
            <div className="ambassaborClub">
                <h2>AMBASSADOR CLUB</h2>
                <div className="cardCons row">
                <img src="images/card2.png" alt="" />
                <div>
                    <p>객실, 식음료 할인&amp;적립</p>
                    <p>회원 전용 프로 모션, 특전 제공</p>
                    <button>무료 멤버십 가입하기</button>
                </div>
                </div>
                <div className="plus">
                <p>
                    *객실 할인 : www.ambatel.com 로그인 시, 객실 기본가 5% 할인. 패키지
                    상품 제외
                    <br />
                    *포인트 적립 : 객실 5%, 레스토랑 &amp; 바 1%, 연회 0.5%
                    <br />
                    *식음 할인 : 프로모션, 연회 행사, 리테일 상품 제외
                    <br />
                    *노보텔 앰배서더 서울 강남 맡김 차림 메뉴 할인 제외
                    <br />
                </p>
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
                    <img src="images/icons/naver.png" alt="" />
                    <img src="images/icons/kakao.png" alt="" />
                    <img src="images/icons/google.png" alt="" />
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
                    <img src="images/icons/Accor_Logo.png" alt="" />
                    <img src="images/icons/ambassador_logo.png" alt="" />
                </div>
                <div className="row right">
                    <img src="images/icons/tripAdvisor.png" alt="" />
                    <img src="images/icons/faceBook.png" alt="" />
                    <img src="images/icons/insta.png" alt="" />
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