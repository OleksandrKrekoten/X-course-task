import { CartImg, CartText, CartEmptyWrapper } from "./CartEmpty.styled";
export const CartEmpty = () => {
  return (
    <CartEmptyWrapper>
      <CartImg src="/x-course-task/cart.svg" alt="cart" />
      <CartText>Cart empty...</CartText>
    </CartEmptyWrapper>
  );
};
