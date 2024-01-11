import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { HeaderCons2 } from "./components/header2";
import { ResCons } from "./components/sub/reservation";
import { MembershipCons } from "./components/sub/membership";
import { CardCons } from "./components/sub/card";
import { TopBtnCons } from "./components/topBtn";
import { FooterCons } from "./components/footer";


export const SubPage = () => {

    return(
    <>
        <TopBtnCons/>
        <HeaderCons2/>
        <main>
            <ResCons/>
            <MembershipCons/>
            <CardCons/>
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
        </main>
        <FooterCons/>
    </>

    );
}