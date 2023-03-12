import styled from "styled-components";
import FixIcon from "../assets/icons/fixIcon.svg";

const FixPage = () => {
  return (
    <Container>
      <Icon src={FixIcon} alt={"fixIcon"} />
      <Text>열심히 개발중입니다. 조금만 기다려주세요!</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: scale-down;
  margin-top: 300px;
`;

const Text = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.contrast};
`;

export default FixPage;
