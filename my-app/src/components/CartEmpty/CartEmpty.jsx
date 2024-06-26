import { CartImg, CartText, CartEmptyWrapper } from "./CartEmpty.styled";
export const CartEmpty = () => {
  return (
    <CartEmptyWrapper>
      <CartImg src="/cart.svg" alt="cart" />
      <CartText>Cart empty...</CartText>
    </CartEmptyWrapper>
  );
};
