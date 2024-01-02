import styled from "@emotion/styled";

//메인
//메인비쥬얼
export const MainVisual = styled.section`
    width: 100%;
    height: 1224px;
    background: url('/assets/mainVisual_resizing.jpg') no-repeat center / cover;
    text-align: center;
    color: #FFF;
    padding-top: 370px;
    position: relative;
`;

export const MainVisualH1 = styled.h1`
    margin-bottom: 28px;
    font-size: 60px;
    font-weight: 400;
`;

export const MainVisualH3 = styled.h3`
    font-size: 25px;
    font-weight: 500;
`;

export const MainVisualDiv = styled.div`
    width: 100%;
    height: 77px;
    background: url('/assets/mainVisual_line.png') no-repeat center / cover;
    position: absolute;
    bottom: 0;
`;

export const MainVisualCons = () => {
    return(
        <MainVisual>
            <MainVisualH1 className="serif">비움과 사색의 공간</MainVisualH1>
            <MainVisualH3>
            느림의 공간인 길, 비움의 공간인 마당, 사색의 공간인 후원을 품은 한옥
            호텔 경원재
            </MainVisualH3>
            <MainVisualDiv />
        </MainVisual>
    );
};