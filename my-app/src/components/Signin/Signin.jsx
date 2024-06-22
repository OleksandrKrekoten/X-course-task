import { Container } from "../Container.styled";
import {
  SigninWrapper,
  UserPhoto,
  Form,
  Input,
  SubmitBtn,
} from "./Signin.styled";

export const Signin = () => {
  return (
    <section>
      <Container>
        <SigninWrapper>
          <UserPhoto src="/avatar.png" alt="user avatar" />
          <Form>
            <label for="user">Username</label>
            <Input type="text" id="user" placeholder="type Username" />
            <SubmitBtn type="submit">Sign-In</SubmitBtn>
          </Form>
        </SigninWrapper>
      </Container>
    </section>
  );
};
