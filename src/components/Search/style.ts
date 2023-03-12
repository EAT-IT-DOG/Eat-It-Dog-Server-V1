import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 728px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  margin-top: 40px;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;
