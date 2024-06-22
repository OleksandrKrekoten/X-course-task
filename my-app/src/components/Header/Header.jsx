import { Container } from "../Container.styled";
import {
  SiteHeader,
  HeaderWrapper,
  Logo,
  LogoName,
  HeaderUserInfo,
  Cart,
  Btn,
  User,
} from "./Header.styled";
export const Header = () => {
  return (
    <SiteHeader>
      <Container>
        <HeaderWrapper>
          <Logo>
            <LogoName>js band store</LogoName> / Krekoten Oleksandr
          </Logo>
          <HeaderUserInfo>
            <Cart src="/cart.svg" alt="cart" width="50" />
            <Btn type="submit">Sign-Out</Btn>
            <User>
              <img src="/avatar.png" alt="user avatar" width="40" />
              <p>Test User</p>
            </User>
          </HeaderUserInfo>
        </HeaderWrapper>
      </Container>
    </SiteHeader>
  );
};
