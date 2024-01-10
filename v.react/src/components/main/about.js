import styled from "@emotion/styled";
//sec.about
export const About = styled.section`
    justify-content: space-between;
    padding-top: 220px;
    color: #1a1a1a;
`;

export const AboutText = styled.div`
    letter-spacing: -0.5px;
`;

export const AboutImg = styled.div`
    background: url('/assets/about.jpg') no-repeat center / cover;
    width: 746px;
    height: 497px;
`;

export const AboutTitle = styled.p`
    font-size: 22px;
    margin-top: 25px;
`;

export const AboutDetail = styled.p`
    width: 482px;
    font-size: 20px;
    margin-top: 25px;
    line-height: 160%;
    margin-right: 100px;
`;

export const AboutButton = styled.button`
    background-color: transparent;
    border: none;
    margin-top: 70px;
    font-size: 22px;
    font-weight: 400;
    cursor: pointer;
    font-family: Noto Sans KR; 
`;

export const AboutH1 =styled.h1`
    font-size: 45px;
    font-weight: 400;
    margin-bottom: 25px;
`;

export const AboutCons = () => {
    return(
         <About className="inner row">
            <AboutText>
            <AboutH1 className="serif">ABOUT 경원재</AboutH1>
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
    )
};