import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../Container.styled.js";
import {
  FlexWrapper,
  BookImg,
  BookDescription,
  AddToCartForm,
  AddToCartText,
  AddToCartInput,
  SubmitBtn,
  FontAccent,
} from "./SpecificBook.styled";
import { BooksContext } from "../../context/BooksContext.jsx";

export const SpecificBook = () => {
  const [numberOfBooks, setNumberOfBooks] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [books, cartList, setCartList] = useContext(BooksContext);
  const { bookId } = useParams();
  const book = books.find((item) => item.id === parseInt(bookId));
  const defaultImage = "/x-course-task/imageNotFound.png";

  useEffect(() => {
    if (numberOfBooks > book.amount) {
      setNumberOfBooks(book.amount);
    }
    setTotalPrice((numberOfBooks * book.price).toFixed(2));
  }, [book.amount, book.price, numberOfBooks]);

  const handleCountChange = (e) => {
    const newCount = parseInt(e.target.value) || "";
    setNumberOfBooks(newCount);
  };

  const handleAddToCart = () => {
    if (cartList.some((item) => item.id === book.id)) {
      alert("This book is already in your shopping cart");
      return;
    }
    const bookWithQuantity = { ...book, numberOfBooks, totalPrice };
    setCartList((prev) => [...prev, bookWithQuantity]);
  };
  return (
    <Container>
      <FlexWrapper>
        <BookImg src={book.image || defaultImage} alt="book cover" />
        <BookDescription>
          <div>
            <p>
              <FontAccent>Book name: </FontAccent>
              {book.title}
            </p>
            <p>
              <FontAccent>Book author: </FontAccent>
              {book.author}
            </p>
            <p>
              <FontAccent>Book level: </FontAccent>
              {book.level}
            </p>
            <p>
              <FontAccent>Book tags:</FontAccent>{" "}
              {book.tags.map((tag, index) => (
                <span key={index}>
                  {tag}
                  {index !== book.tags.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>
          <AddToCartForm>
            <AddToCartText>
              Price: <span id="price">${book.price}</span>
            </AddToCartText>
            <AddToCartText>
              <label htmlFor="count"> Count</label>
              <AddToCartInput
                type="number"
                min="1"
                max={book.amount}
                onChange={handleCountChange}
                id="count"
                value={numberOfBooks}
                data-testid="count-input"
              />
            </AddToCartText>

            <AddToCartText>
              Total price: <span id="totalPrice"> ${totalPrice}</span>
            </AddToCartText>
            <SubmitBtn onClick={handleAddToCart}>Add to cart</SubmitBtn>
          </AddToCartForm>
        </BookDescription>
      </FlexWrapper>
      <p>
        <FontAccent>Description: </FontAccent>
        {book.description}
      </p>
    </Container>
  );
};
