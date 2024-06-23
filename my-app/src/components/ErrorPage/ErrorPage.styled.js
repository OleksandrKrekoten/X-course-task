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
  padding: 6px 10px;
  background: center/220%
    linear-gradient(100deg, #1b9aaa 0% 50%, #f8ffe5 50% 100%);
  color: #f8ffe5;
  background-position-x: 0%;
  box-shadow: 0 0 0 2px #1b9aaa inset;
  border-radius: 6px;
  transition: background-position-x 150ms, transform 150ms;
  &:focus,
  &:hover {
    background-position-x: 100%;
    color: #1b9aaa;
  }
`;
