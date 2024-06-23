import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const SiteHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  margin-bottom: 40px;
  padding: 20px 0;
  height: 80px;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 720px) {
    flex-direction: row;
  }
`;
export const Logo = styled.p`
  font-weight: 800;

  font-size: 14px;
  @media screen and (min-width: 720px) {
    font-size: 18px;
  }
`;
export const LogoName = styled.span`
  text-transform: uppercase;
`;
export const HeaderUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Cart = styled(Link)`
  cursor: pointer;
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
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
