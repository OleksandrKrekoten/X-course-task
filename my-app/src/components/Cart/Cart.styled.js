import styled from "@emotion/styled";
export const PurchaseBtn = styled.button`
  padding: 6px 10px;
  margin-left: auto;
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