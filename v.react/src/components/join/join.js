import styled from "@emotion/styled";
import Sns1 from "../../images/icons/naver.png";
import Sns2 from "../../images/icons/kakao.png";
import Sns3 from "../../images/icons/google.png";
import { useState } from "react";
import {number, object, ref, string} from "yup";
import { Link, useNavigate } from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from 'yup';
import "yup-phone";

let userSchema = Yup.object().shape({
    id: Yup.string('문자타입이 아닙니다')
        .min(5,'5글자 미만은 안됩니다')
        .max(30,'10글자 초과는 안됩니다')
        .required('필수입력값입니다'), 
    password: Yup.string('문자타입이 아닙니다')
        .min(6,'6글자 미만은 안됩니다')
        .max(30,'30글자 초과는 안됩니다')
        .required('필수입력값입니다'),
    passwordCheck: Yup.string('문자타입이 아닙니다')
        .oneOf([ref('password'),null], '비밀번호가 일치하지 않습니다')
        .min(6,'6글자 미만은 안됩니다')
        .max(30,'30글자 초과는 안됩니다')
        .required('필수입력값입니다'),
    phoneCheck: Yup.string('숫자타입이 아닙니다')
        // .phone('IN', false , '올바른 형식이 아닙니다')
        .required('필수입력값입니다')     
});

// (async () => {
//     console.log(await userSchema.isValid("9876543210")); // → true
//   })();


const Join = styled.div`
    text-align: center;
    margin-bottom: 200px;
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
    margin-bottom: 10px;
`;

const ErrMsg = styled.div`
    height: 16px;
    color: red;
    font-size: 14px;
    margin-left: 16.302vw;
    margin-bottom: 15px;
    align-self: flex-start;
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
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues : {
            id:'',
            password:'', 
            passwordCheck:'',
            phoneCheck:''
        },
        onSubmit: () => {
            alert('회원가입이 완료되었습니다!');
            navigate('/');
            console.log('회원가입 완료');
            // formik.validateForm((errors) => {
            //     if (Object.keys(errors).length === 0) {
            //         alert('회원가입이 완료되었습니다!');
            //         navigate('/');
            //         console.log('회원가입 완료');
            //     } else {
            //         alert('회원가입이 실패했습니다!');
            //         console.log('회원가입 실패');
            //     }
            // });
        },
        validationSchema: userSchema,
    });    

    return(
        <Join>
            <JoinBg></JoinBg>
            <Contents className="row">
                <ContentsH1 className="serif">회원가입</ContentsH1>
                <ContentsP>회원이 되어 다양한 혜택을 경험해 보세요!</ContentsP>
                <form onSubmit={formik.handleSubmit}>
                    <InputWrap className="row">
                        <Label htmlFor="id">* 아이디</Label>
                        <Input 
                            id="id"
                            type="text"
                            name="id" 
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange} 
                            value={formik.values.id}
                        />
                        {formik.touched.id && formik.errors.id ? (
                        <ErrMsg>{formik.errors.id}</ErrMsg>
                        ) : null}
                    </InputWrap>
                    <InputWrap className="row">
                        <Label htmlFor="password">* 비밀번호</Label>
                        <Input 
                            id="password"
                            type="text"
                            name="password" 
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange} 
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                        <ErrMsg>{formik.errors.password}</ErrMsg>
                        ) : null}
                    </InputWrap>
                    <InputWrap className="row">
                        <Label htmlFor="passwordCheck">* 비밀번호 확인</Label>
                        <Input 
                            id="passwordCheck"
                            type="text"
                            name="passwordCheck"
                            onBlur={formik.handleBlur} 
                            onChange={formik.handleChange} 
                            value={formik.values.passwordCheck}
                        />
                        {formik.touched.passwordCheck && <ErrMsg>{formik.errors.passwordCheck}</ErrMsg>}
                    </InputWrap>
                    <InputWrap className="row">
                        <Label htmlFor="phoneCheck">* 휴대폰 인증</Label>
                        <PhoneCheck>
                            <PhoneCheckDiv className="row">
                                <Input 
                                id="phoneCheck" 
                                onBlur={formik.handleBlur} 
                                onChange={formik.handleChange}
                                value={formik.values.phoneCheck} 
                                style={{width:'14.375vw'}}/>
                                <PhoneCheckBtn type="button">전송</PhoneCheckBtn>
                            </PhoneCheckDiv>
                            <Input id="check" type="text" style={{width:'10.990vw', height:'50px'}}/>
                        </PhoneCheck>
                        {formik.touched.phoneCheck && <ErrMsg>{formik.errors.phoneCheck}</ErrMsg>}  
                    </InputWrap>
                </form>
                <Span style={{marginTop:'55px'}}>가입 시, <Span style={{color:'#2196BA'}}>서비스 이용약관, 개인정보처리방침</Span>에 동의합니다. </Span>
                <Agree className="row">
                    <input type="checkbox" name="checkbox" id="checkbox" style={{width:'20px',height:'20px', margin:0}}/>
                    <AgreeP>이벤트 알림 수신 동의</AgreeP>
                </Agree>
                <EndBtn type="submit" onClick={formik.handleSubmit}>
                    회원가입하기
                </EndBtn>
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