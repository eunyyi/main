import styled from "@emotion/styled";
import React from "react";
import { useRef, useCallback } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Right from "../../images/rightArrow.png";
import Left from "../../images/leftArrow.png";

export const Etc = styled.section`
    padding: 220px 0;
 `;

 export const EtcInner = styled.div`
    width: 70.4688vw;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
    margin-bottom:94px;
 `;

export const EtcH1 = styled.h1`
    text-align: center;
    font-weight: 500;
    font-size:45px;
    margin-bottom:25px;
`;

export const EtcH4 = styled.h4`
    text-align: center;
    font-size:22px;
    font-weight:400;
    margin-bottom:100px;
`;

export const EtcH2 = styled.h2`
    font-size: 38px;
    font-weight: 700;
    position: relative;
    top: 25px; 
    z-index: 99;
`;


export const Slide = styled.div`
    width:411px; 
    height: 497px;
`;
export const SlideImg1 = styled.div`
    width:630px; 
    height: 497px;
    background: url('/assets/dining/dining1.jpg') no-repeat center / cover;
`;
export const SlideImg2 = styled.div`
    width:630px;
    height: 497px;
    background: url('/assets/dining/dining2.jpg') no-repeat center / cover;
    margin: 0 10px; 
`;
export const SlideImg3 = styled.div`
    width:630px;
    height: 497px;
    background: url('/assets/dining/dining3.jpg') no-repeat center / cover;
`;
export const SlideImg4 = styled.div`
    width:630px;
    height: 497px;
    background: url('/assets/wedding/wedding1.jpg') no-repeat center / cover;
`;
export const SlideImg5 = styled.div`
    width:630px;
    height: 497px;
    background: url('/assets/wedding/wedding2.jpg') no-repeat center / cover;
    margin: 0 10px; 
`;
export const SlideImg6 = styled.div`
    width:630px;
    height: 497px;
    background: url('/assets/wedding/wedding3.jpg') no-repeat center / cover;
`;
export const SlideImg7 = styled.div`
    width:630px;
    height: 497px;
    background: url('/assets/party/party1.jpg') no-repeat center / cover;
`;
export const SlideImg8 = styled.div`
    width:630px;
    height: 497px;
    background: url('/assets/party/party2.jpg') no-repeat center / cover;
    margin: 0 10px; 
`;
export const SlideImg9 = styled.div`
    width:630px;
    height: 497px;
    background: url('/assets/party/party3.jpg') no-repeat center / cover;
`;

const Bar = styled.div`
  width:500px;
  height: 10px;
  border-radius:10px;
  background-color: #a6a6a6;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);

`;

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red", zIndex:"99" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green", zIndex:"99"}}
//       onClick={onClick}
//     />
//   );
// }

export const EtcCons = () => {
  const settings = {
    slideToShow: 3,
    slideToScroll: 1,
    draggable: true,
    centerMode: true, 
    initialSlide: 1,
    infinite: false,
    variableWidth: true,
    centerPadding: '10px',
    arrows: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />

  };


  const slickRef = useRef(null);
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);
  const slickRef2 = useRef(null);
  const previous2 = useCallback(() => slickRef2.current.slickPrev(), []);
  const next2 = useCallback(() => slickRef2.current.slickNext(), []);
  const slickRef3 = useRef(null);
  const previous3 = useCallback(() => slickRef3.current.slickPrev(), []);
  const next3 = useCallback(() => slickRef3.current.slickNext(), []);

    return (
        <Etc>
          <EtcH1 className="serif">Dining, Wedding, Party</EtcH1>
          <EtcH4>
            엄선된 식재료만을 골라 임금님께 수라를 올리듯 정성껏 요리하며 찬
            하나하나에도 섬세한 맛을 살려 특별한 미각을 선사하는 수라, <br />
            송도 신도시의 편리함과 고풍스러운 한옥에서의 특별한 웨딩, 고려시대
            주심포 방식으로 건축된 경원루
          </EtcH4>
          <EtcInner style={{position:"relative"}}>
            <EtcH2 className="serif" >DINING</EtcH2>
            <Slider {...settings}
            style={{width: '100%',
                height: '568px',
                background: 'rgba(240, 240, 240, 0.80)',
                paddingTop: '45px',
              position: 'relative'}} 
                ref={slickRef}
            className="slider">
                  <Slide>
                    <SlideImg1/>
                  </Slide>
                  <Slide>
                    <SlideImg2/>
                  </Slide>
                  <Slide>              
                    <SlideImg3/>
                  </Slide>
            </Slider>   
            <Bar></Bar>
            {/* <div className="row" style={{position:"absolute", top:"5px", right:0}}>
              <div onClick={previous} style={{width:"50px", height:"50px", border:"1px solid #9E9E9E", padding:"10px"}}>
                <img 
                  src={Left}
                  style={{width:"30px", lineHeight:"30px"}}
                />
              </div>
              <div onClick={next} style={{width:"50px", height:"50px", border:"1px solid #9E9E9E", padding:"10px"}}>
                <img 
                  src={Right}
                  style={{width:"30px"}}
                />
              </div>
            </div> */}
          </EtcInner>
          <EtcInner>
            <EtcH2 className="serif" >WEDDING</EtcH2>
            <Slider {...settings}
            style={{width: '100%',
                height: '568px',
                background: 'rgba(240, 240, 240, 0.80)',
                paddingTop: '45px',
              position: 'relative'}} 
                ref={slickRef2}
            className="slider">
                  <Slide>
                    <SlideImg4/>
                  </Slide>
                  <Slide>
                    <SlideImg5/>
                  </Slide>
                  <Slide>              
                    <SlideImg6/>
                  </Slide>
            </Slider>
            <Bar></Bar>  
          </EtcInner>
          <EtcInner>
            <EtcH2 className="serif" >PARTY</EtcH2>
            <Slider {...settings}
            style={{width: '100%',
                height: '568px',
                background: 'rgba(240, 240, 240, 0.80)',
                paddingTop: '45px',
              position: 'relative'}} 
                ref={slickRef3}
            className="slider">
                  <Slide>
                    <SlideImg7/>
                  </Slide>
                  <Slide>
                    <SlideImg8/>
                  </Slide>
                  <Slide>              
                    <SlideImg9/>
                  </Slide>
            </Slider>   
            <Bar></Bar>
          </EtcInner>
        </Etc>
    );
};
