import styled from "@emotion/styled";

import floorInfo from '../../images/main_pc-floorInfo.png';

//sec.floor
export const Floor = styled.section`
    width: 100%;
    height: 459px;
    background-color: #efefef;
    padding: 0;
    margin: 220px 0;

`;

export const FloorH1 = styled.h1`
    font-size:45px;
    font-weight: 500;
    margin: 34px 0 60px;
`;

export const FloorP = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: -0.5px;
`;

export const FloorBtn = styled.button`
    border: none;
    margin: 80px 0 64px;
    font-size: 22px;
    font-weight: 400;
    cursor: pointer;
    font-family: Noto Sans KR; 
    background:none;
`;

export const FloorImg = styled.img`
    height: 440px;
`;

export const FloorCons = () => {
    return(
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
    )
};