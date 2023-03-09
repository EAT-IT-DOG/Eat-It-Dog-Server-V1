import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 63px;
`;

export const DotWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
`;

export const Dot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: #dbdbdb;
  cursor: pointer;

  &:hover {
    background-color: #bcbcbc;
  }
`;
