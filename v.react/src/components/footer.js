import styled from "@emotion/styled";
import naver from '../images/icons/naver.png';
import kakao from '../images/icons/kakao.png';
import google from '../images/icons/google.png';
import accorLogo from '../images/icons/Accor_Logo.png';
import ambassaLogo from '../images/icons/ambassador_logo.png';
import tripLogo from '../images/icons/tripAdvisor.png';
import facebookLogo from '../images/icons/faceBook.png';
import instaLogo from '../images/icons/insta.png';

export const Footer = styled.footer`
    width: 100%;
    height: 400px;
    background: #363636;
`;

export const FooterLi = styled.li`
    font-size: 22px;
    color: #FFF;
    padding: 0 27px;
    margin-bottom: 30px;
    border-right: 1px solid #B0B0B0;
`;

export const FooterIcon = styled.div`
    width: 66.719vw;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
`;

export const FooterP = styled.p`
    font-size: 16px;
    padding: 0 10px;
    color: #fff;
    box-sizing: border-box;
    border-right: 1px solid #B0B0B0;
`;

export const FooterCons = () => {
    return(
        <Footer>
          <div style={{paddingTop:'54px', width:'70.833vw', margin:'0 auto'}}>
            <ul className="row">
              <FooterLi>해외호텔예약</FooterLi>
              <FooterLi>고객센터</FooterLi>
              <FooterLi>개인정보처리방침</FooterLi>
              <FooterLi>멤버십 약관</FooterLi>
              <FooterLi>채용</FooterLi>
              <FooterLi style={{border:'none'}}>사이트맵</FooterLi>
            </ul>
            <FooterIcon className="row">
              <div className="row" style={{alignItems:'center'}}>
                <img src={accorLogo} alt="" style={{width:'70px', height:'57px'}}/>
                <img src={ambassaLogo} alt="" style={{width:'120px', height:'120px'}}/>
              </div>
              <div className="row">
                <img src={tripLogo} alt="" style={{width:'70px', height:'70px'}}/>
                <img src={facebookLogo} alt="" style={{width:'70px', height:'70px', margin: '0 20px'}}/>
                <img src={instaLogo} alt="" style={{width:'70px', height:'70px'}}/>
              </div>
            </FooterIcon>
            <div className="row">
              <FooterP>인천경제자유구역청</FooterP>
              <FooterP>인천광역시 연수구 테크노파크로 200</FooterP>
              <FooterP>TEL. 032-729-1101</FooterP>
              <FooterP>사업자등록번호 379-83-00011</FooterP>
              <FooterP>통신판매신고번호 인천연수구0193호</FooterP>
              <FooterP style={{border: 'none'}}>대표 이원재</FooterP>
            </div>
            <FooterP style={{border: 'none'}}>Copyright (c) 2023 Ambassador Hotel Group. All rights reserved.</FooterP>
          </div>
        </Footer>
    )
};