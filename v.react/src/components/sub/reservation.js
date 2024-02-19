import styled from "@emotion/styled";
import Down from "../../images/icons/down.svg";
import Calendar from 'react-calendar';
import { useState } from "react";
import Modal from 'react-modal';
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "../../custom.css"
import Ondol from "../../images/ondol/ondol_main.jpg";
import Sweet from "../../images/sweet/sweet3.jpg";
import Royal from "../../images/royal/royal_main.jpg";

const Reser = styled.section`
    width: 70.833vw; 
    margin:0 auto;   
    padding-top:210px;
`;

const ReserDiv = styled.div`
    height: 170px;
    align-items: center;
`;

const ReserH1 = styled.h1`
    font-size: 45px;
    font-weight: 400;
    margin-top:30px;
    margin-bottom: 25px;
    text-align: center;
`;

const ReserH4 = styled.h4`
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 100px;
    text-align: center;
`;

const FindCheckIn = styled.div`
    margin-right: 75px;
    position:relative;
`;

const ReserP = styled.p`
    margin-bottom: 15px;
    color: #695239;
    font-size: 18px;
    font-weight: 500 ;
`;

const FindCons = styled.div`    
    border-left: 1px solid #D9D9D9;
    border-right: 1px solid #D9D9D9;
    padding:0 60px;
`;

const CheckIn = styled.button`
    width: 130px;
    height: 45px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
    border: none; 
    background:none;
    color:#6B6A6A;

    &:focus {
        outline: none;
    }
`;

const CheckOut = styled.button`
    width: 130px;
    height: 45px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
    border: none;
    background:none;
    color:#6B6A6A;

    &:focus {
        outline: none;
    }
`;

const AdultDiv = styled.div`
    margin: 0 70px ;
    text-align: center;
`;

const ReserBtn = styled.button`
    background: #695239;
    width: 200px;
    height: 54px;
    text-align: center;
    line-height: 100%;
    color: #FFF;
    font-size: 15px;
    font-weight: 700;
    border: none;
    margin-left:50px;
    cursor: pointer;
`;

const AdultBtn = styled.button`
    width: 16px;
    background: none;
    color: #606060;
    font-size: 18px;
    border:none;
`;

const AdultP = styled.p`
    width: 9px;
    height: 21px;
    border: none;
    text-align: center;
    color: #1A1A1A;
    font-size: 15px;
    font-weight: 700;
    margin: 0 20px;
`;

const Reservation = styled.div`
    text-align: center;
    margin-top: 100px;
    display: ${(props) => (props.moreOpen ? "block" : "none")};
`;

const ReservationH2 = styled.h2`
    font-size: 30px;
    color: #1A1A1A;
    font-weight: 400;
    margin: 40px 0 50px;
`;

const ReservationDiv = styled.div`
    width: 440px;
    position: relative;
`;

const ReservationImg = styled.img`
    width: 100%;
    height: 220px;
`;

const ReservationP = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #1A1A1A;
    margin: 46px 0;
`;

const ReservationSpan = styled.span`
    font-size: 15px;
    font-weight: 400;
    display: inline-block;
`;

const ReservationBtn = styled.button`
    width: 99px;
    height: 44px;
    background: #FFF;
    border: 1px solid #8D8D8D;
    color: #1A1A1A;
    position: absolute;
    top: 440px;
    right: 0;
    cursor: pointer;
`;

const CalendarWrapper = styled.div`
  z-index: 11;
  position: absolute;
  top: 150%;
  left: 0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const ResCons = () => {
    const [nowDate, setNowDate] = useState("날짜를 선택해주세요");
    const [nowDate1, setNowDate1] = useState("날짜를 선택해주세요");
    const [value, onChange] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);

    const clickMore = () => {
        if (nowDate === "날짜를 선택해주세요" || nowDate1 === "날짜를 선택해주세요") {
            alert('체크인 및 체크아웃 날짜를 선택해주세요!');
        } else if (nowDate > nowDate1) {
            alert('체크인 날짜는 체크아웃 날짜보다 이전이어야 합니다!');
            setMoreOpen(null);
        } else {
            setMoreOpen(!moreOpen);
        }
    };

    const handleToggleCalendar = () => {
        setIsOpen(!isOpen);
    };
    const handleToggleCalendar1 = () => {
        setIsOpen1(!isOpen1);
    };

    const handleDateChange = (selectedDate) => {
        onChange(selectedDate);
        setIsOpen(false);
        setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
    };
    const handleDateChange1 = (selectedDate) => {
        onChange(selectedDate);
        setIsOpen1(false);
        setNowDate1(moment(selectedDate).format("YYYY년 MM월 DD일"));
    };

    const [count1, setCount1] = useState(1);

    const onIncrease1 = () => {
        if (count1 !=9) {
            setCount1(prevCount => prevCount + 1);
        }else
        return;

    };

    const onDecrease1 = () => {
        if (count1 !=1) {
            setCount1(prevCount => prevCount - 1);
        }else
        return;
    };


    const [count2, setCount2] = useState(1);

    const onIncrease2 = () => {
        if (count2 !=9) {
            setCount2(prevCount => prevCount + 1);
        }else
        return;
    };

    const onDecrease2 = () => {
        if (count2 !=1) {
            setCount2(prevCount => prevCount - 1);
        }else
        return;
    };
    const validate = () => {
        if (nowDate > nowDate1) {
            alert('체크인 날짜는 체크아웃 날짜보다 이전이어야 합니다!');
        }
    }

    return(
        <Reser>
            <ReserH1 className="serif">RESERVATION</ReserH1>
            <ReserH4>아래 항목들을 선택해주시면 예약 가능한 객실이 안내됩니다.</ReserH4>
            <ReserDiv className="row">
                <FindCons className="row">
                    <FindCheckIn onChange={validate()}>
                        <ReserP>체크인</ReserP>
                        <CheckIn
                        onClick={handleToggleCalendar}>{nowDate}</CheckIn>
                        <CalendarWrapper isOpen={isOpen} >
                            <Calendar 
                            onChange={handleDateChange} 
                            value={value} 
                            formatDay={(locale, date) => moment(date).format("DD")}
                            >{moment(value).format("YYYY년 MM월 DD일")} </Calendar>
                        </CalendarWrapper>
                    </FindCheckIn>
                    <FindCheckIn>
                        <ReserP>체크아웃</ReserP>
                        <CheckOut
                        onClick={handleToggleCalendar1}>{nowDate1}</CheckOut>
                        <CalendarWrapper isOpen={isOpen1}>
                            <Calendar 
                            onChange={handleDateChange1} 
                            value={value} 
                            formatDay={(locale, date) => moment(date).format("DD")}>
                            {moment(value).format("YYYY년 MM월 DD일")} </Calendar>
                        </CalendarWrapper>
                    </FindCheckIn>
                </FindCons>
                <FindCons className="row">
                <div style={{width:'34px',textAlign:'center'}}>
                    <ReserP>객실</ReserP>
                    <ReserP>1</ReserP>
                </div>
                <AdultDiv>
                    <ReserP>성인</ReserP>
                    <div className="row" style={{alignItems:'center', marginTop:'20px'}}>
                        <AdultBtn id="down" onClick={onDecrease1}>
                            -
                        </AdultBtn>
                        <AdultP>{count1}</AdultP>
                        <AdultBtn id="up" onClick={onIncrease1}>
                            +
                        </AdultBtn>
                    </div>
                </AdultDiv>
                <div style={{textAlign:'center'}}>
                    <ReserP>소인</ReserP>
                    <div className="row" style={{alignItems:'center' , marginTop:'20px'}}>
                    <AdultBtn id="down2" onClick={onDecrease2}>
                        -
                    </AdultBtn>
                    <AdultP>{count2}</AdultP>
                    <AdultBtn id="up2" onClick={onIncrease2}>
                        +
                    </AdultBtn>
                    </div>
                </div>
                </FindCons>
                <ReserBtn onClick={clickMore}>객실조회</ReserBtn>
            </ReserDiv>
            <Reservation className="reservation inner" moreOpen={moreOpen}>
                <ReservationH2 className="serif">예약 가능한 객실</ReservationH2>
                <div className="row" style={{justifyContent:'space-between'}}>
                    <ReservationDiv>
                        <ReservationP>디럭스 온돌</ReservationP>
                        <ReservationImg src={Ondol} alt="" />
                        <ReservationSpan className="person" style={{margin:'16px 0 20px'}}>최대 2인</ReservationSpan>
                        <ReservationSpan>
                        기본제공 : 미니바 아이템, 네스프레소 커피캡슐, 유·무선 인터넷 등
                        </ReservationSpan>
                        <ReservationBtn>예약하기</ReservationBtn>
                    </ReservationDiv>
                    <ReservationDiv style={{margin:'0 15px'}}>
                        <ReservationP>디럭스 스위트</ReservationP>
                        <ReservationImg src={Sweet} alt="" />
                        <ReservationSpan className="person" style={{margin:'16px 0 20px'}}>최대 4인</ReservationSpan>
                        <ReservationSpan>
                        기본제공 : 미니바 아이템, 네스프레소 커피캡슐, 유·무선 인터넷,
                        전자레인지 등
                        </ReservationSpan>
                        <ReservationBtn>예약하기</ReservationBtn>
                    </ReservationDiv>
                    <ReservationDiv>
                        <ReservationP>로얄 스위트</ReservationP>
                        <ReservationImg src={Royal} alt="" />
                        <ReservationSpan className="person" style={{margin:'16px 0 20px'}}>최대 6인</ReservationSpan>
                        <ReservationSpan>
                        기본제공 : 미니바 아이템, 네스프레소 커피캡슐, 유·무선 인터넷,
                        탄산수 얼음 정수기 등
                        </ReservationSpan>
                        <ReservationBtn>예약하기</ReservationBtn>
                    </ReservationDiv>
                </div>
            </Reservation>
        </Reser>
    );
}



