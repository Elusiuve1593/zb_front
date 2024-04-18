import {
  Button,
  NavigationLink,
} from "../../shared/components/FormInput/Form.styled";
import {
  Container,
  CustomButton,
  HeadText,
  Subscription,
  TextContainer,
} from "./Main.styled";

export const Main = () => {
  return (
    <Container>
      <TextContainer>
        <HeadText>The chemical negatively charged</HeadText>
        <Subscription>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. While the mass defect is
        </Subscription>

        <NavigationLink to="/deal">
          <CustomButton>Get Started</CustomButton>
        </NavigationLink>
      </TextContainer>
    </Container>
  );
};
