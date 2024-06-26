import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../Container.styled";
import {
  SigninWrapper,
  UserPhoto,
  Form,
  Input,
  SubmitBtn,
} from "./Signin.styled";
import { AuthContext } from "../../context/AuthContext";
export const Signin = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [isDisabled, setІsDisabled] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/book-list");
    }
  }, [isLoggedIn, navigate]);

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    if (newUsername.length >= 4) {
      setUsername(newUsername);
      setІsDisabled(false);
    }
    if (newUsername.length >= 16 || newUsername.length < 4) {
      setІsDisabled(true);
    }
  };
  const handleSubmit = (e) => {
    setIsLoggedIn(true);
    navigate("/book-list");
    localStorage.setItem("username", username);
  };
  return (
    <section>
      <Container>
        <SigninWrapper>
          <UserPhoto src="/x-course-task/avatar.png" alt="user avatar" />
          <Form>
            <label htmlFor="user">Username</label>
            <Input
              type="text"
              id="user"
              placeholder="type Username"
              onChange={handleUsernameChange}
            />
            <SubmitBtn disabled={isDisabled} onClick={handleSubmit}>
              Sign-In
            </SubmitBtn>
          </Form>
        </SigninWrapper>
      </Container>
    </section>
  );
};
