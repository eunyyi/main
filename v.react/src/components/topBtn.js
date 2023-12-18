import styled from "@emotion/styled";
import downIcon from '../icons/down.svg';

export const TopBtn = styled.div`
    opacity:1;
`;

export const TopBtnA = styled.a`
    display: block;
    width: 50px;
    height: 50px;
    border: 1px solid #DBDBDB;
    background: #FFF;
    text-align: center;
    line-height: 50px;
    position: fixed;
    bottom: 55px;
    right: 35px;
    z-index: 9999;
`;

export const TopBtnImg = styled.img`
    width: 20px;
    transform: scaleY(-1);
`;

export const TopBtnCons = () => {
    <TopBtn>
        <TopBtnA>
            <TopBtnImg src={downIcon} alt="아래로" />
        </TopBtnA>
    </TopBtn>
};