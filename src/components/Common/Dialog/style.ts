import styled from "styled-components";
import { palette } from "../../../style/palette";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.15);
  top: 0px;
  left: 0px;
  position: absolute;
`;

export const Container = styled.div`
  padding: 0px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 32px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background-color: ${({ theme }) => theme.subBackgroundColor};
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.contrast};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  column-gap: 14px;

  button {
    width: 80px;
    height: 36px;
    font-size: 14px;
    border-radius: 80px;
  }

  .submit {
    border: 1px solid ${palette.pinkMain};
    color: ${palette.pinkMain};

    &:hover {
      background-color: ${palette.pinkMain};
      color: ${({ theme }) => theme.contrast};
    }
  }

  .cancel {
    border: 1px solid ${palette.gray[200]};
    color: ${palette.gray[200]};

    &:hover {
      background-color: ${palette.gray[200]};
      color: ${({ theme }) => theme.contrast};
    }
  }
`;
