import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import DoubleMain from '../../images/double/double_main.jpg';
import Double2 from '../../images/double/double2.jpg';
import Double3 from '../../images/double/double3.jpg';
import Double4 from '../../images/double/double4.jpg';
import Double5 from '../../images/double/double5.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Double = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(()=>{
        setNav1(slider1);
        setNav2(slider2);
    });

    const SliderImg = styled.img`

      width:100%;
      opacity:.4;

      &:hover {
        opacity:1;
      }
    `;
    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      };
    
      const settingsThumbs = {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px'
      };
      
      const slidesData = [
        {
          id: 1,
          title: '더블1',
          source: DoubleMain
        }, {
          id: 2,
          title: '더블2',
          source: Double2
        }, {
          id: 3,
          title: '더블3',
          source: Double3
        }, {
          id: 4,
          title: '더블4',
          source: Double4
        }, {
          id: 5,
          title: '더블5',
          source: Double5
        }
      ];
  
    return (
     <div className="slider-wrapper">
        <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={slider => (setSlider1(slider))}
        >

        {slidesData.map((slide) =>

            <div className="slick-slide" key={slide.id}>
            <img className="slick-slide-image" src={slide.source} />
            </div>

        )}

        </Slider>
        <div className="thumbnail-slider-wrap" style={{width:'100%', height: '60px'}}>
            <Slider
                {...settingsThumbs}
                asNavFor={nav1}
                ref={slider => (setSlider2(slider))}
                style={{height:'60px'}}>

                {slidesData.map((slide) =>

                <div className="slick-slide" key={slide.id} style={{width:'20%'}}>
                    <SliderImg className="slick-slide-image" src={slide.source}/>
                </div>
                )}

            </Slider>
        </div>
    </div>
    );
}


