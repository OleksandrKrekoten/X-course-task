import { Container } from "../Container.styled";
import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../context/BooksContext";
import {
  PurchaseBtn,
  CartList,
  CartItem,
  CartTotal,
  CartTitle,
} from "./Cart.styled";
import { CartEmpty } from "../CartEmpty/CartEmpty";

export const Cart = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const [cartList, setCartList] = useContext(BooksContext);
  useEffect(() => {
    const total = cartList
      .reduce((sum, book) => {
        return sum + book.price * book.numberOfBooks;
      }, 0)
      .toFixed(2);
    setCartTotal(total);
  }, [cartList]);

  const handlePurchase = () => {
    setCartList([]);
  };

  return (
    <Container>
      <PurchaseBtn onClick={handlePurchase} disabled={!cartList.length}>
        Purchase
      </PurchaseBtn>
      {cartList.length ? (
        <>
          <CartList>
            {cartList &&
              cartList.map((book) => {
                return (
                  <CartItem>
                    <CartTitle>{book.title}</CartTitle>
                    <p>{book.numberOfBooks}</p>
                    <p>{book.totalPrice}</p>
                  </CartItem>
                );
              })}
          </CartList>
          <CartTotal>Total:$ {cartTotal}</CartTotal>
        </>
      ) : (
        <CartEmpty />
      )}
    </Container>
  );
};
