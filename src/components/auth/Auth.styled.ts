import styled from "styled-components";
import { Button } from "../../shared/components/FormInput/Form.styled";

export const MainContainer = styled.div`
  display: flex;
`;

export const HeaderText = styled.h1`
  padding: 40px 0;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes["2xl"]};
`;

export const Dubai = styled.img`
  max-width: 66%;
  margin: 30px 30px 0px 30px;
  object-fit: cover;
`;

export const Account = styled.div`
  margin: 15px auto;
  font-size: 17px;
`;

export const Sign = styled.span`
  font-size: 17px;
  color: #b29f7e;
`;

export const Container = styled.div`
  font-size: 20px;
`;

export const MarginError = styled.div`
  margin-bottom: -6%;
`;

export const CustomButton = styled(Button)`
  margin-top: 6%;
`;
