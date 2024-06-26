import React from 'react';
import './Slider.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cf from '../../../assets/shoes1.jpg'
import sd from '../../../assets/shoes2.jpg'
import s from '../../../assets/tshirt2.jpg'
import t from '../../../assets/tshirt4.jpg'
import pt from '../../../assets/shirt4.jpg'
import b from '../../../assets/shirt5.jpg'

const Mycarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={true}
      autoPlaySpeed={2000}
      centerMode={false}
      className="slider"
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      rewind={true}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={true}
      sliderClass=""
      swipeable
      responsive={responsive}
    >
      <img src={cf} alt="CF" />
      <img src={sd} alt="SD" />
      <img src={t} alt="T" />
      <img src={pt} alt="PT" />
      <img src={b} alt="B" />
      <img src={s} alt="s" />
    </Carousel>
  );
};

export default Mycarousel;
