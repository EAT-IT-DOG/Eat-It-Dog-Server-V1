import styled from "styled-components";

export const Container = styled.div`
  width: 242px;
  height: 178px;
  border-radius: 15px;
  padding: 40px;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.contrast};
  align-items: center;
  display: flex;
  column-gap: 8px;
  cursor: pointer;
`;

export const Explain = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: ${({ theme }) => theme.contrast};
`;
