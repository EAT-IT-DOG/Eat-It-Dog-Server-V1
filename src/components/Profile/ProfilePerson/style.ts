import styled from "styled-components";

export const Container = styled.div`
  width: 620px;
  height: 358px;
  border-radius: 15px;
  padding: 40px;
  padding-bottom: 56px;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.contrast};
`;

export const MiddleWrap = styled.div`
  padding: 0px 40px;
  display: flex;
  align-items: center;
  margin-top: 63px;
  column-gap: 83px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
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
