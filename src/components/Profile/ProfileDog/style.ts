import styled from "styled-components";

export const Container = styled.div`
  width: 620px;
  height: 394px;
  border-radius: 15px;
  padding: 40px;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.contrast};
`;
