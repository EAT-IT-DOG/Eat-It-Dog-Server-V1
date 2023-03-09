import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 130px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  padding: 40px;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.contrast};
  align-items: center;
  display: flex;
  column-gap: 8px;
  cursor: pointer;
`;

export const AritcleImg = styled.img`
  width: 125px;
  object-fit: scale-down;
  position: absolute;
  right: 8px;
  bottom: 7px;
`;
