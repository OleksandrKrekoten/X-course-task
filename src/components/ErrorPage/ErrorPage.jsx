import { Container } from "../Container.styled";
import {
  Page404,
  Img,
  Title,
  Accent,
  ErrorText,
  Btn,
} from "./ErrorPage.styled";

export const ErrorPage = () => {
  return (
    <Container>
      <Page404>
        <Title>404</Title>
        <Img />
        <ErrorText>
          <Accent>Oops</Accent>, something went wrong. <Accent>404</Accent>{" "}
          error
        </ErrorText>
        <Btn to="book-list">Go to Home</Btn>
      </Page404>
    </Container>
  );
};
