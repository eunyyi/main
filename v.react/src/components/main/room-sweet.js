import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import SweetMain from '../../images/sweet/sweet_main.jpg';
import Sweet2 from '../../images/sweet/sweet2.jpg';
import Sweet3 from '../../images/sweet/sweet3.jpg';
import Sweet4 from '../../images/sweet/sweet4.jpg';
import Sweet5 from '../../images/sweet/sweet5.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Sweet = () => {
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
          title: '스위트1',
          source: SweetMain
        }, {
          id: 2,
          title: '스위트2',
          source: Sweet2
        }, {
          id: 3,
          title: '스위트3',
          source: Sweet3
        }, {
          id: 4,
          title: '스위트4',
          source: Sweet4
        }, {
          id: 5,
          title: '스위트5',
          source: Sweet5
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


