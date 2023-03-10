import styled from "styled-components";

export const FoodName = styled.h1`
  color: ${({ theme }) => theme.contrast};
  font-size: 22px;
  line-height: 32px;
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 18px;
`;

export const Content = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.contrast};
  font-weight: 300;
`;

export const ContentItem = styled.li`
  font-size: 16px;
  color: ${({ theme }) => theme.contrast};
  font-weight: 300;
  text-decoration: dashed;
`;
