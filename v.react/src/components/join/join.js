import styled from "@emotion/styled";
import Sns1 from "../../images/icons/naver.png";
import Sns2 from "../../images/icons/kakao.png";
import Sns3 from "../../images/icons/google.png";
import { useState } from "react";
import {number, object, ref, string} from "yup";
import {useFormik} from "formik";

let userSchema = object({
    id: string('문자타입이 아님')
        .min(10,'10글자 미만은 안됨')
        .max(30,'30글자 초과는 안됨')
        .required('필수입력값임'), 
    password: string('문자타입이 아님')
        .min(6,'6글자 미만은 안됨')
        .max(30,'30글자 초과는 안됨')
        .required('필수입력값임'),
    passwordCheck: string('문자타입이 아님')
        .oneOf([ref('password'),null], '비밀번호가 일치하지 않습니다')
        .min(6,'6글자 미만은 안됨')
        .max(30,'30글자 초과는 안됨')
        .required('필수입력값임'),
    phone: string('문자타입이 아님')
        .matches(/^[0-9]{11}$/i, '01012345678형태로 입력해주세요')
        .required('필수입력값임')
});


const Join = styled.div`
    text-align: center;
`;

const JoinBg = styled.div`
    width: 100%;
    height: 304px;
    background: url('assets/marble.png') no-repeat center / cover;
    margin-top: 70px;
`;

const Contents = styled.div`
    width: 70.625vw;
    margin: -144px auto 0;
    flex-direction: column;
    background: #FFF;
`;

const ContentsH1 = styled.h1`
    margin: 73px 0 25px ;
    font-size: 45px;
    font-weight: 400;
    margin-bottom: 25px;
`;

const ContentsP = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 110px;
`;

const InputWrap = styled.div`
    flex-direction: column;
    align-items: center;
`;
const Label = styled.label`
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 24px 16.302vw;
    align-self: flex-start;
`;

const Input = styled.input`
    width: 37.917vw;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #858585;
    margin-bottom: 20px;
`;

const ErrMsg = styled.p`
    height: 16px;
    color: red;
    font-size: 14px;
    margin-left: 16.302vw;
    margin-bottom: 15px;
    align-self: flex-start;
    display: none;
`;

const PhoneCheck = styled.div`
    width: 37.917vw;
    display: flex;
    justify-content: space-between;
`;

const PhoneCheckDiv = styled.div`
    width: 23.542vw;
    justify-content: space-between;
`;

const PhoneCheckBtn = styled.button`
    width: 8.281vw;
    height: 50px;
    background-color: #695239;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
`;

const Span = styled.span`
    display: inline-block;
    font-size: 18px;
    font-weight: 400;
    color: #6f6f6f;
`;

const Agree = styled.div`
    width: 191px;
    height: 59px;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`;

const AgreeP = styled.p`
    margin: 0;
    color: #6F6F6F;
    font-size: 18px;
    font-weight: 400;
`;

const EndBtn = styled.button`
    width: 37.969vw;
    height: 80px;
    background-color: #000;
    color: #FFF;
    font-size: 20px;
    font-weight: 500;
    margin: 45px auto 65px;
    cursor: pointer;
`;

const SnsJoin = styled.p`
    width: 37.969vw;
    height: 58px;
    line-height: 58px;
    text-align: center;
    border-top: 1px solid #CACACA;
    margin: 0 auto;
`;

const Sns = styled.div`
    width: 367px;
    justify-content:space-between;
    margin: 20px auto 0;
`;
const SnsImg = styled.img`
    width: 90px;
    height: 90px;
    cursor: pointer;
`;



export const JoinCons = () => {
    const formik = useFormik({
        initialValues : {id:'', password:'', passwordCheck:''},
        onSubmit: () => {},
        validationSchema: userSchema
    });

    return(
        <Join>
            <JoinBg></JoinBg>
            <Contents className="row">
                <ContentsH1 className="serif">회원가입</ContentsH1>
                <ContentsP>회원이 되어 다양한 혜택을 경험해 보세요!</ContentsP>
                <InputWrap className="row">
                    <Label>* 아이디</Label>
                    <Input id="iD" onChange={formik.handleChange} value={formik.values.id}/>
                    <ErrMsg id="ID-err-msg">{formik.errors.id}</ErrMsg>
                </InputWrap>
                <InputWrap className="row">
                <Label>* 비밀번호</Label>
                    <Input id="password" onChange={formik.handleChange} value={formik.values.password}/>
                    <ErrMsg id="ID-err-msg">{formik.errors.password}</ErrMsg>
                </InputWrap>
                <InputWrap className="row">
                    <Label>* 비밀번호 확인</Label>
                    <Input id="passwordCheck" onChange={formik.handleChange} value={formik.values.passwordCheck}/>
                    <ErrMsg id="ID-err-msg">{formik.errors.id}</ErrMsg>
                </InputWrap>
                <InputWrap className="row">
                    <Label for="phone-check">* 휴대폰 인증</Label>
                    <PhoneCheck>
                        <PhoneCheckDiv className="row">
                            <Input id="phoneCheck" onChange={formik.handleChange} value={formik.values.phone} style={{width:'14.375vw'}}/>
                            <PhoneCheckBtn>전송</PhoneCheckBtn>
                        </PhoneCheckDiv>
                        <Input id="check" type="text" style={{width:'10.990vw', height:'50px'}}/>
                    </PhoneCheck>
                    <ErrMsg id="phone-check-err-msg">값을 입력해주세요.</ErrMsg>
                </InputWrap>
                <Span style={{marginTop:'55px'}}>가입 시, <Span style={{color:'#2196BA'}}>서비스 이용약관, 개인정보처리방침</Span>에 동의합니다. </Span>
                <Agree className="row">
                    <input type="checkbox" name="checkbox" id="checkbox" style={{width:'20px',height:'20px', margin:0}}/>
                    <AgreeP>이벤트 알림 수신 동의</AgreeP>
                </Agree>
                <EndBtn type="button" onclick="onRegister();">회원가입하기</EndBtn>
                <SnsJoin>계정 간편가입</SnsJoin>
                <Sns className="row">
                    <SnsImg src={Sns1} alt=""/>
                    <SnsImg src={Sns2} alt=""/>
                    <SnsImg src={Sns3} alt=""/>
                </Sns>
            </Contents>
        </Join>
    );
};