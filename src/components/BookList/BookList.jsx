import React, { useState } from "react";
import { useContext } from "react";
import {
  List,
  Img,
  Title,
  BookItem,
  FlexWrapper,
  Price,
  Btn,
  Select,
  Input,
} from "./BookList.styled";
import { Container } from "../Container.styled";
import { BooksContext } from "../../context/BooksContext";

export const BookList = () => {
  const [books] = useContext(BooksContext);
  const [filterPrice, setFilterPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const defaultImage = "/imageNotFound.png";

  const handleFilterChange = (event) => {
    setFilterPrice(event.target.value);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const truncateTitle = (title) => {
    return title.length > 24 ? `${title.substring(0, 24)}...` : title;
  };
  const filterByPrice = (product) => {
    if (!filterPrice) return true;
    const price = parseFloat(product.price);
    const rangeValues = filterPrice.split("-");
    const minPrice = parseFloat(rangeValues[0]);
    const maxPrice = parseFloat(rangeValues[1]);

    if (isNaN(minPrice) && isNaN(maxPrice)) {
      return true;
    }
    if (!isNaN(minPrice) && isNaN(maxPrice)) {
      return price >= minPrice;
    }
    if (isNaN(minPrice) && !isNaN(maxPrice)) {
      return price <= maxPrice;
    }
    return price >= minPrice && price <= maxPrice;
  };
  const filterByTitle = (product) => {
    if (!searchTerm) return true;
    const title = product.title.toLowerCase();
    const search = searchTerm.toLowerCase();
    return title.includes(search);
  };
  const filteredProducts = books.filter(
    (product) => filterByPrice(product) && filterByTitle(product)
  );

  return (
    <Container>
      <FlexWrapper>
        <Input
          type="text"
          placeholder="Search by book name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Select value={filterPrice} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="0-15">$0 - $15</option>
          <option value="15-30">$15 - $30</option>
          <option value="30+">$30 +</option>
        </Select>
      </FlexWrapper>
      <List>
        {filteredProducts.map((product) => (
          <BookItem key={product.id}>
            <Img src={product.image || defaultImage} alt={product.title} />
            <Title>{truncateTitle(product.title)}</Title>
            <p>{truncateTitle(product.author)}</p>
            <FlexWrapper>
              <Price>${product.price}</Price>
              <Btn to={`/book/${product.id}`}>View</Btn>
            </FlexWrapper>
          </BookItem>
        ))}
      </List>
    </Container>
  );
};
