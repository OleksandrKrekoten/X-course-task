import React, { createContext, useEffect, useState } from "react";
import booksData from "../db/books.json";
export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const username = localStorage.getItem("username");
  const [books, setBooks] = useState([]);
  const [cartList, setCartList] = useState(() => {
    const savedCartList = localStorage.getItem(`cartList`);
    return savedCartList ? JSON.parse(savedCartList) : [];
  });

  useEffect(() => {
    setBooks(booksData.books);
  }, []);

  useEffect(() => {
    localStorage.setItem(`cartList`, JSON.stringify(cartList));
  }, [cartList, username]);

  return (
    <BooksContext.Provider value={[books, cartList, setCartList]}>
      {children}
    </BooksContext.Provider>
  );
};
