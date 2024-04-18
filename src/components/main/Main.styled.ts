import styled from "styled-components";
import longRoad from "../../shared/components/img/Long_road.jpg";
import { Button } from "../../shared/components/FormInput/Form.styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${longRoad});
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TextContainer = styled.div`
  min-height: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeadText = styled.h1`
  padding: 50px;
  font-size: 64px;
  color: #ffffff;
`;

export const Subscription = styled.div`
  line-height: 1.5;
  margin: 0 auto;
  font-size: 18px;
  max-width: 700px;
  color: #ffffff;
`;

export const CustomButton = styled(Button)`
  border: 1px solid #ffffff;
  font-size: 18px;
  margin-top: 5%;
  margin-left: 40%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: ${(props) => props.theme.borderRadius.large};
  color: #ffffff;
  width: 200px;
  &:hover {
    background-color: #9e6c53;
  }
`;
