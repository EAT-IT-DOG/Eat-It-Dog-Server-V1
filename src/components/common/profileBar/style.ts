import styled from "styled-components";

export const ProfileBarContainer = styled.div`
  min-width: 360px;
  max-width: 360px;
  height: 100vh;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  display: flex;
  flex-direction: column;
`;
