import styled from "styled-components";

export const NavBarContainer = styled.div`
  min-width: 210px;
  max-width: 210px;
  height: 100vh;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  display: flex;
  flex-direction: column;
`;
