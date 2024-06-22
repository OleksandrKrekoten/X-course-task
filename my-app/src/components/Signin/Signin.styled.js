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
  padding: 8px;
  border-radius: 6px;
  transition: background-color 300ms;
  :hover,
  :focus {
    background-color: gray;
  }
`;
