import styled from "@emotion/styled";

const Member = styled.section`
    margin: 220px auto 260px;
`;

const MemberH1 = styled.h1`
    text-align: center;
    font-size: 45px;
    font-weight: 400;
    margin-bottom: 25px;
`;

const MemberH2 = styled.h2`
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 30px ;
`;

const MemberImg = styled.img`
    width: 70.625vw;
    height: 635px;
    background: url('assets/lobby.jpg') no-repeat center / cover;
    margin: 100px 0 110px;
`;

const JoinInfo = styled.div`
    padding-bottom: 25px;
    border-bottom: 1px solid #6A6A6A;
    margin-bottom: 50px;
`;

const JoinInfoDiv = styled.div`
    margin-bottom: 25px;
`;

const PTop = styled.p`
    color: #1A1A1A;
    font-size: 20px;
    font-weight: 400; 
    margin-bottom: 10px;   

`;

const PBottom = styled.p`
    color: #757575;
    font-size: 18px;
    font-weight: 400;
`;

export const MembershipCons = () => {
    return(
        <Member className="inner">
            <MemberH1 className="serif">MEMBERSHIP</MemberH1>
            <MemberImg className="img"></MemberImg>
            <JoinInfo>
                <MemberH2>가입 안내</MemberH2>
                <JoinInfoDiv>
                    <PTop>발급 대상</PTop>
                    <PBottom>앰배서더 호텔을 이용하는 국내외 개인 고객</PBottom>  
                </JoinInfoDiv>
                <JoinInfoDiv>
                    <PTop>제외 대상</PTop>
                    <PBottom>단체, 법인, 협회, 만 19세 미만 미성년자, 기타 호텔에서 정한 범주의 고객</PBottom>  
                </JoinInfoDiv>
                <JoinInfoDiv>
                    <PTop>발급처</PTop>
                    <PBottom>앰배서더 호텔</PBottom>  
                    <PBottom >www.ambatel.com (PC, 모바일웹, 모바일앱)</PBottom>  
                </JoinInfoDiv>
                <JoinInfoDiv>
                    <PTop>유의사항</PTop>
                    <PBottom>회원 필수 정보 (성함, 성별, 생년월일, 휴대전화번호)가 누락된 경우 포인트 사용이 제한되오니 빠짐없이 입력해 주십시오.</PBottom>  
                </JoinInfoDiv>
            </JoinInfo>
            <div className="joinQue">
                <MemberH2>가입 문의</MemberH2>
                <JoinInfoDiv>
                    <PTop>전화</PTop>
                    <PBottom>02) 2278-4100 월~금 09:30~18:00(12:00~13:30 제외)</PBottom>  
                </JoinInfoDiv>
                <JoinInfoDiv>
                    <PTop>이메일</PTop>
                    <PBottom>ambassadorclub@ambatel.com</PBottom> 
                </JoinInfoDiv>
            </div>
        </Member>
    );
};