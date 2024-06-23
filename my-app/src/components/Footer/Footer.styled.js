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
