import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const Page404 = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const Img = styled.div`
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  width: 90%;
`;
export const Title = styled.p`
  font-family: "Nabla", system-ui;
  font-optical-sizing: auto;
  font-size: 60px;
  margin: 0;
`;
export const Accent = styled.span`
  font-family: "Nabla", system-ui;
`;
export const ErrorText = styled.p`
  font-size: 2em;
  margin: 0;
  margin-bottom: 10px;
`;
export const Btn = styled(Link)`
  padding: 8px;
  border: 1px solid #000;
  text-decoration: none;
  color: #000;
  border-radius: 6px;
  transition: background-color 300ms;
  :hover,
  :focus {
    background-color: gray;
  }
`;
