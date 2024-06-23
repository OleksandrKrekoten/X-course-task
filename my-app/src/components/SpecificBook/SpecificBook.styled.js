import styled from "@emotion/styled";

export const FlexWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 20px ;

  @media screen and (min-width: 720px) {
    justify-content: space-evenly;
    flex-direction: row;
  }
`;
export const BookImg = styled.img`
  width: 100%;
  @media screen and (min-width: 720px) {
    width: 38%;
  }
  @media screen and (min-width: 1400px) {
    width: 25%;
  }
`;
export const BookDescription = styled.div`
  display: flex;
  flex-direction: column;
 gap: 20px;

  @media screen and (min-width: 1400px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`;
export const AddToCartForm = styled.div`
display: flex;
flex-direction: column;
  font-weight: 800;
  gap: 20px;
  width: 100%;
  padding: 20px;
  height: max-content;
  border: 2px dotted #000;

  @media screen and (min-width: 1400px) {
    width: 50%;
  }
`;
export const AddToCartText = styled.p`
  display: flex;
  justify-content: space-between;
`;
export const AddToCartInput = styled.input`
  font-weight: 800;
  width: 50px;
  height: 24px;
  border-radius: 6px;
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
`;
