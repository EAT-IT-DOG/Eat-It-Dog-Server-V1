import styled from "styled-components";

export const Text = styled.p`
  font-size: 16px;
  color: black;
  color: ${({ theme }) => theme.contrast};
  font-weight: 300;
`;
