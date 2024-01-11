import styled from "@emotion/styled";
import Down from "../../images/icons/down.svg";

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

const SelectCons = styled.div`  
    padding: 20px 50px;
`;

const Name = styled.div`
    height: 24px;
    overflow: hidden;
`;

const NameDiv = styled.div`
    width: 212px;
    margin-bottom: 10px;
    justify-content: space-between;
`;

const FindCheckIn = styled.div`
    margin-right: 75px;
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
    padding:0 50px;
`;

const CheckIn = styled.input`
    width: 127px;
    height: 45px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
    border: none; 

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #1a1a1a;
    }
`;

const CheckOut = styled.input`
    width: 127px;
    height: 45px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
    border: none;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #1a1a1a;
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
`;

const AdultBtn = styled.button`
    width: 16px;
    background: none;
    color: #606060;
    font-size: 18px;
    border:none;
`;

const AdultInput = styled.input`
    width: 9px;
    height: 15px;
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
    display: none;
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
    right: 12px;
    cursor: pointer;
`;
export const ResCons = () => {

    return(
        <Reser>
            <ReserH1 className="serif">RESERVATION</ReserH1>
            <ReserH4>아래 항목들을 선택해주시면 예약 가능한 객실이 안내됩니다.</ReserH4>
            <ReserDiv className="row"  style={{border:'1px solid black'}}>
                <SelectCons>
                <ReserP>호텔 선택</ReserP>
                <Name>
                    <NameDiv className="row" onclick="downName();">
                        <a href="#">경원재 앰버서더 인천</a>
                        <a href="#">
                            <img src={Down} alt="" />
                        </a>
                    </NameDiv>
                    <div onclick="upName();" className="hidden">
                        <li>
                            <a href="#">
                            경원재 앰배서더 인천 <br />
                            (인천광역시 연수구 테크노파크로 200)
                            </a>
                        </li>
                    </div>
                </Name>
                </SelectCons>
                <FindCons className="row">
                    <FindCheckIn>
                        <ReserP>체크인</ReserP>
                        <CheckIn
                        type="text"
                        placeholder="날짜를 선택해주세요"
                        id="datepicker"
                        />
                    </FindCheckIn>
                    <div>
                        <ReserP>체크아웃</ReserP>
                        <CheckOut
                        type="text"
                        placeholder="날짜를 선택해주세요"
                        id="datepicker2"
                        />
                    </div>
                </FindCons>
                <FindCons className="row">
                <div className="room" style={{width:'34px',textAlign:'center'}}>
                    <ReserP>객실</ReserP>
                    <ReserP>1</ReserP>
                </div>
                <AdultDiv>
                    <ReserP>성인</ReserP>
                    <div className="row" style={{alignItems:'center'}}>
                        <AdultBtn id="down" onclick="down()">
                            -
                        </AdultBtn>
                        <AdultInput
                            type="text"
                            name="quantity"
                            id="quantity"
                            defaultValue={1}
                        />
                        <AdultBtn id="up" onclick="up()">
                            +
                        </AdultBtn>
                    </div>
                </AdultDiv>
                <div style={{textAlign:'center'}}>
                    <ReserP>소인</ReserP>
                    <div className="row" style={{alignItems:'center'}}>
                    <AdultBtn id="down2" onclick="down2()">
                        -
                    </AdultBtn>
                    <AdultInput
                        type="text"
                        name="quantity2"
                        id="quantity2"
                        defaultValue={1}
                    />
                    <AdultBtn id="up2" onclick="up2()">
                        +
                    </AdultBtn>
                    </div>
                </div>
                </FindCons>
                <ReserBtn onclick="result();">객실조회</ReserBtn>
            </ReserDiv>
            {/* <Reservation className="reservation inner">
                <ReservationH2 className="serif">예약 가능한 객실</ReservationH2>
                <div className="row" style={{justifyContent:'space-between'}}>
                    <ReservationDiv>
                        <ReservationP>디럭스 온돌</ReservationP>
                        <ReservationImg src="images/ondol/ondol_main.jpg" alt="" />
                        <ReservationSpan className="person" style={{margin:'16px 0 20px'}}>최대 2인</ReservationSpan>
                        <ReservationSpan>
                        기본제공 : 미니바 아이템, 네스프레소 커피캡슐, 유·무선 인터넷 등
                        </ReservationSpan>
                        <ReservationBtn>예약하기</ReservationBtn>
                    </ReservationDiv>
                    <ReservationDiv>
                        <ReservationP>디럭스 스위트</ReservationP>
                        <ReservationImg src="images/sweet/sweet3.jpg" alt="" />
                        <ReservationSpan className="person" style={{margin:'16px 0 20px'}}>최대 4인</ReservationSpan>
                        <ReservationSpan>
                        기본제공 : 미니바 아이템, 네스프레소 커피캡슐, 유·무선 인터넷,
                        전자레인지 등
                        </ReservationSpan>
                        <ReservationBtn>예약하기</ReservationBtn>
                    </ReservationDiv>
                    <ReservationDiv>
                        <ReservationP>로얄 스위트</ReservationP>
                        <ReservationImg src="images/royal/royal_main.jpg" alt="" />
                        <ReservationSpan className="person" style={{margin:'16px 0 20px'}}>최대 6인</ReservationSpan>
                        <ReservationSpan>
                        기본제공 : 미니바 아이템, 네스프레소 커피캡슐, 유·무선 인터넷,
                        탄산수 얼음 정수기 등
                        </ReservationSpan>
                        <ReservationBtn>예약하기</ReservationBtn>
                    </ReservationDiv>
                </div>
            </Reservation> */}
        </Reser>
    );
}



