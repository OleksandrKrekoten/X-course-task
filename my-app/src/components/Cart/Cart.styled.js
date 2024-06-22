import styled from "@emotion/styled";
export const PurchaseBtn = styled.button`
  margin-left: auto;
  padding: 8px;
  border: 1px solid black;
  border-radius: 6px;
  transition: background-color 300ms;
  :hover,
  :focus {
    background-color: gray;
  }
`;
export const CartEmpty = styled.div`
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
export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 280px;
  margin-bottom: 20px;
  @media screen and (min-width: 500px) {
    width: 100%;
  }
`;
export const CartItem = styled.li`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #000;
  width: 100%;
  padding: 20px 6px;
  justify-content: space-between;
`;
export const CartTotal = styled.p`
display: flex;
justify-content: end;
`