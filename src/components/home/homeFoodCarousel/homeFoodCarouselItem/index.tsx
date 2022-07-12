import {
  HomeFoodCarouselItemContainer,
  HomeFoodCarouselItemDescription,
  HomeFoodCarouselItemIconWrap,
  HomeFoodCarouselItemTextWrap,
  HomeFoodCarouselItemTitle,
} from "./style";

interface Props {
  backgroundColor: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const HomeFoodCarouselItem = ({
  backgroundColor,
  title,
  description,
  icon,
}: Props) => {
  return (
    <HomeFoodCarouselItemContainer style={{ backgroundColor }}>
      <HomeFoodCarouselItemIconWrap background={backgroundColor}>
        {icon}
      </HomeFoodCarouselItemIconWrap>
      <HomeFoodCarouselItemTextWrap>
        <HomeFoodCarouselItemTitle>{title}</HomeFoodCarouselItemTitle>
        <HomeFoodCarouselItemDescription>
          {description}
        </HomeFoodCarouselItemDescription>
      </HomeFoodCarouselItemTextWrap>
    </HomeFoodCarouselItemContainer>
  );
};

export default HomeFoodCarouselItem;
