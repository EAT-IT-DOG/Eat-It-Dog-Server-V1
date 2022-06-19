import styled from "styled-components";

export const PageTemplateContaier = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
`;

export const PageTemplateWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
