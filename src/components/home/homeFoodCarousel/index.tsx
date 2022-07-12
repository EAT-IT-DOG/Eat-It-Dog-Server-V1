import { useMemo } from "react";
import Slider from "react-slick";
import { palette } from "../../../style/palette";
import HomeFoodCarouselItem from "./homeFoodCarouselItem";
import { HomeFoodCarouselContainer, HoomFoodCarouelWrap } from "./style";

const data = [
  { icon: <></>, title: "유제품", description: "우유,요거트 등" },
  { icon: <></>, title: "간식", description: "초콜렛,사탕 등" },
  { icon: <></>, title: "육류", description: "육회,소고기 등" },
  { icon: <></>, title: "육류", description: "육회,소고기 등" },
  { icon: <></>, title: "육류", description: "육회,소고기 등" },
  { icon: <></>, title: "육류", description: "육회,소고기 등" },
  { icon: <></>, title: "육류", description: "육회,소고기 등" },
  { icon: <></>, title: "육류", description: "육회,소고기 등" },
  { icon: <></>, title: "육류", description: "육회,소고기 등" },
];

const HomeFoodCarousel = () => {
  const colorList = [palette.greenMain, palette.yellowMain, palette.pinkMain];
  const homeFoodCarouselSetting = useMemo(
    () => ({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      pauseOnHover: false,
      appendDots: (dots: any) => (
        <div
          style={{
            position: "relative",
            top: "30px",
          }}
        >
          {dots}
        </div>
      ),
    }),
    []
  );

  return (
    <HomeFoodCarouselContainer>
      <HoomFoodCarouelWrap>
        <Slider {...homeFoodCarouselSetting}>
          {data.map((item, idx) => (
            <HomeFoodCarouselItem
              backgroundColor={colorList[idx % 3]}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </Slider>
      </HoomFoodCarouelWrap>
    </HomeFoodCarouselContainer>
  );
};

export default HomeFoodCarousel;
