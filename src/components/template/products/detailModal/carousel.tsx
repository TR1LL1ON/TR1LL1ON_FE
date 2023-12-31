import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

interface CarouselProps {
  imageUrls: string[];
}

const Carousel: React.FC<CarouselProps> = ({ imageUrls }) => {
  const settings: settingsType = {
    dots: true, // 개수 표시 점
    infinite: true, // 무한 캐러셀
    speed: 500, // 다음 컨텐츠 까지의 속도
    slidesToShow: 1, // 화면에 보이는 컨텐츠 수
    slidesToScroll: 1, // 스크롤 시 넘어가는 컨텐츠 수
    centerMode: true, // 현재 컨텐츠 가운데 정렬
    centerPadding: '0px', // 중앙 컨텐츠 padding 값
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 2000, // 자동 캐러셀 속도
    draggable: true, // 드래그
    fade: false, // 사라졌다 나타나는 효과
    arrows: false, // 좌,우 버튼
    vertical: false, // 세로 캐러셀
    initialSlide: 0, // 첫 컨텐츠 번호
    pauseOnFocus: true, // focus시 정지
    pauseOnHover: true, // hover시 정지
    responsive: [
      {
        breakpoint: 600, // (숫자)px 이하일 경우
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <a key={index}>
            <img src={url} alt={`Slide ${index + 1}`} />
          </a>
        ))}
      </Slider>
    </Container>
  );
};

type settingsType = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  centerMode: boolean;
  centerPadding: string;
  autoplay: boolean;
  autoplaySpeed: number;
  draggable: boolean;
  fade: boolean;
  arrows: boolean;
  vertical: boolean;
  initialSlide: number;
  pauseOnFocus: boolean;
  pauseOnHover: boolean;
  responsive: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
      arrows: boolean;
    };
  }>;
};

const Container = styled.div`
  .slick-slide img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
  .slick-dots {
    bottom: 10px;
  }
  .slick-dots li button:before {
    font-size: 0.5rem;
    color: #fff;
  }
`;

export default Carousel;
