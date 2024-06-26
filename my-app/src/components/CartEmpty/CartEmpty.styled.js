import styled from "@emotion/styled";
export const CartEmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
export const CartImg = styled.img`
  width: 100%;
  @media screen and (min-width: 500px) {
    width: 30%;
  }
`;
export const CartText = styled.p`
  font-size: 22px;
`;
