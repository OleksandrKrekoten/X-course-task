import styled from "@emotion/styled";

export const SiteFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background: linear-gradient(to bottom, #0056b9 50%, #ffd800 calc(100% - 50%));
  padding: 20px;
  margin-top: auto;
`;
export const FooterLink = styled.a`
  text-decoration: none;
  color: #000;
  background-color: #fff;
  padding: 6px;
  border-radius: 10px;
  transition: background-color 300ms;
  :hover,
  .btn:focus {
    background-color: gray;
  }
`;
