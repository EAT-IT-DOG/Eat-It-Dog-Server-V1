import styled from "styled-components";

export const HomeFoodCarouselItemContainer = styled.div`
  width: 250px;
  height: 100px;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 24px;
  cursor: pointer;
`;

export const HomeFoodCarouselItemIconWrap = styled.div<{ background: string }>`
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: ${({ background }) => background};
  filter: brightness(80%);
`;

export const HomeFoodCarouselItemTextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 4px;
`;

export const HomeFoodCarouselItemTitle = styled.h1`
  font-size: 14px;
  color: white;
  line-height: 20px;
`;

export const HomeFoodCarouselItemDescription = styled.span`
  font-size: 14px;
  color: white;
  line-height: 17px;
`;
