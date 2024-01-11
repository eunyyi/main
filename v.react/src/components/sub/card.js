import styled from "@emotion/styled"
import Card1 from "../../images/card1.png";
import Card2 from "../../images/card2.png";

const ClubAmber = styled.div`
    width: 100%;
    background-color:#0A2A59;
    padding: 5.208vw 19.844vw 6.146vw;
    color: #FFF;
`;

const AmbassaborClub = styled.div`
    width: 100%;
    background-color:#fafafa;
    padding: 5.208vw 19.844vw 6.146vw;
    color: #1a1a1a;
`;

const CardH2 = styled.h2`
    font-size: 35px;
    font-weight: 400;
    padding: 20px 30px;
    margin-bottom: 30px ;
`;

const CardDiv = styled.div`
    width: 60.885vw;
    height: 361px;
    align-items: center;
    justify-content: space-between;
`;

const ClubImg = styled.img`
    width: 624px;
    height: 361px;
`;

const AmbassImg = styled.img`
    width: 728px;
    height: 240px;
`;

const CardP = styled.p`
    font-size: 20px;
    font-weight: 400;
`;

const CardBtn = styled.button`
    background: #3D3D3D;
    color: #FFF;
    padding: 15px 40px;
    font-size: 20px;
    font-weight: 700;
    margin-top: 40px;
    border: none;
    cursor: pointer;
`;

const Plus = styled.div`
    margin: 70px 115px 0;
`;

export const CardCons = () => {
    return(
        <section className="card">
            <ClubAmber>
                <CardH2>CLUB AMBER</CardH2>
                <CardDiv className="row">
                    <ClubImg src={Card1} alt=""/>
                    <div style={{textAlign:'center'}}>
                        <CardP style={{marginBottom:'7px'}}>객실, 식음료 할인&적립</CardP>
                        <CardP style={{marginBottom:'7px'}}>회원 전용 프로모션, 특전 제공</CardP>
                        <CardP>라이프 스타일별로 구성된 숙박권/쿠폰 제공</CardP>
                        <CardBtn>유료 멤버십 가입하기</CardBtn>
                    </div>
                </CardDiv>
                <Plus>
                    <p> *인원 할인은 어린이 포함 적용 (어린이 규정은 호텔마다 상이) <br/>
                        *프로모션, 연회 행사, 리테일 상품 할인 적용 제외 <br/>
                        *노보텔 앰배서더 서울 강남- 우브리앙: 맡김차림 메뉴 1 0% 할인- 홍보각: 베버리지, 코스, 스페셜 메뉴 10% 할인 <br/>
                        *머큐어 앰배서더 서울 홍대 ‘식음’ 할인/적립 제외 <br/>
                        *식음 업장 할인은 동시에 여러 테이블에서 이용하거나, 인원을 나누어서 할인 적용되지 않음 
                    </p>
                </Plus>
            </ClubAmber>
            <AmbassaborClub>
                <CardH2>AMBASSADOR CLUB</CardH2>
                <CardDiv className="row">
                    <AmbassImg src={Card2} alt=""/>
                    <div style={{textAlign:'center'}}>
                        <CardP>객실, 식음료 할인&적립</CardP>
                        <CardP>회원 전용 프로 모션, 특전 제공</CardP>  
                        <CardBtn>무료 멤버십 가입하기</CardBtn>
                    </div>
                </CardDiv>
                <Plus>
                    <p>*객실 할인 : www.ambatel.com 로그인 시, 객실 기본가 5% 할인. 패키지 상품 제외<br/>
                        *포인트 적립 : 객실 5%, 레스토랑 & 바 1%, 연회 0.5%<br/>
                        *식음 할인 : 프로모션, 연회 행사, 리테일 상품 제외<br/>
                        *노보텔 앰배서더 서울 강남 맡김 차림 메뉴 할인 제외<br/>
                    </p>
                </Plus>
            </AmbassaborClub>
        </section>
    );
}