import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0px 40px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  margin-left: 83px;
`;

export const TextTitle = styled.span`
  text-align: start;
  color: ${({ theme }) => theme.contrast};
  font-size: 16px;
  width: 68px;
`;

export const TextContent = styled.p`
  color: ${({ theme }) => theme.contrast};
  font-size: 14px;
  font-weight: 300;
  text-align: start;
`;
