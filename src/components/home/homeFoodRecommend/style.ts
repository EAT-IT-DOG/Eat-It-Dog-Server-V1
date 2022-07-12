import styled from "styled-components";

export const HomeFoodRecommentContainer = styled.div`
  width: 282px;
  height: 358px;
  border-radius: 15px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.subBackgroundColor};
`;
