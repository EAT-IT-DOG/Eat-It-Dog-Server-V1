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
  flex-direction: column;
  padding: 40px 50px;
`;

export const PageTemplateHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
