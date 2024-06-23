import { Container } from "../Container.styled";
import {
  PurchaseBtn,
  CartImg,
  CartText,
  CartEmpty,
  CartList,
  CartItem,
  CartTotal,
} from "./Cart.styled";

export const Cart = () => {
  return (
    <Container>
      <PurchaseBtn>Purchase</PurchaseBtn>
      {/* <CartEmpty>
         <CartImg src="/cart.svg" alt="cart" />
         <CartText>Cart empty...</CartText>
      </CartEmpty> */}
      <CartList>
        <CartItem>
          <p>title</p>
          <p>count</p>
          <p>total</p>
        </CartItem>
        <CartItem>
          <p>title</p>
          <p>count</p>
          <p>total</p>
        </CartItem>
        <CartItem>
          <p>title</p>
          <p>count</p>
          <p>total</p>
        </CartItem>
      </CartList>
      <CartTotal>Total:$$</CartTotal>
    </Container>
  );
};
