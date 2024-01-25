import styled from "@emotion/styled";
import downIcon from '../images/icons/down.svg';
import { useState, useEffect } from "react";

export const TopBtn = styled.div`
    opacity:1;
    cursor: pointer;
`;

export const TopBtnA = styled.a`
    display:block;
    width: 50px;
    height: 50px;
    border: 1px solid #dbdbdb;
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
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }
    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 500) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        console.log(window.scrollY)
        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])
    return(
        <TopBtn onClick={scrollToTop}>
            <TopBtnA>
                <TopBtnImg src={downIcon} alt="위로올라가기"/>
            </TopBtnA>
        </TopBtn>
    );
};