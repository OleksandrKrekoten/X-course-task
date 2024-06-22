import styled from "@emotion/styled";

export const SiteHeader = styled.header`
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  margin-bottom: 40px;
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
export const Cart = styled.img`
  cursor: pointer;
`;
export const Btn = styled.button`
  padding: 8px;
  border-radius: 6px;
  transition: background-color 300ms;
  :hover,
  .btn:focus {
    background-color: gray;
  }
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
