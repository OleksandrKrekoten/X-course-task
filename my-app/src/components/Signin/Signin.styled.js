import styled from "@emotion/styled";

export const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserPhoto = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  @media screen and (min-width: 720px) {
    width: 160px;
    height: 160px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 720px) {
    width: 200px;
  }
`;
export const Input = styled.input`
  padding: 6px;
  border-radius: 4px;
`;
export const SubmitBtn = styled.button`
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
  :disabled {
    background: #808080;
    color: #c04141;
    box-shadow: 0 0 0 2px #c04141 inset;
  }
`;
