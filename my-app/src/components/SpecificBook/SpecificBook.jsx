import { Container } from "../Container.styled";
import {
  FlexWrapper,
  BookImg,
  BookDescription,
  AddToCartForm,
  AddToCartText,
  AddToCartInput,
  SubmitBtn,
} from "./SpecificBook.styled";

export const SpecificBook = () => {
  return (
    <Container>
      <FlexWrapper>
        <BookImg src="/git_for_teams.jpg" alt="book cover" />
        <BookDescription>
          <div>
            <p>
              <span>
                <strong>Book name: </strong>
              </span>
              JavaScript: The Definitive Guide, 7th Edition
            </p>
            <p>
              <span>
                <strong>Book author: </strong>
              </span>
              David Flanagan
            </p>
            <p>
              <span>
                <strong>Book level: </strong>
              </span>
              Beginner
            </p>
            <p>
              <span>
                <strong>Book tags: </strong>
              </span>
              frontend
            </p>
          </div>
          <AddToCartForm>
            <AddToCartText>
              Price: <span id="price">$52.72</span>
            </AddToCartText>
            <AddToCartText>
              <label for="count"> Count</label>
              <AddToCartInput type="number" min="1" max="42" id="count" />
            </AddToCartText>

            <AddToCartText>
              Total price: <span id="totalPrice"> $52.72</span>
            </AddToCartText>
            <SubmitBtn type="submit">Add to cart</SubmitBtn>
          </AddToCartForm>
        </BookDescription>
      </FlexWrapper>
      <p>
        <span>
          <strong>Description: </strong>
        </span>
        JavaScript is the programming language of the web and is used by more
        software developers today than any other programming language. For
        nearly 25 years this best seller has been the go-to guide for JavaScript
        programmers. The seventh edition is fully updated to cover the 2020
        version of JavaScript, and new chapters cover classes, modules,
        iterators, generators, Promises, async/await, and metaprogramming.
        You’ll find illuminating and engaging example code throughout. This book
        is for programmers who want to learn JavaScript and for web developers
        who want to take their understanding and mastery to the next level. It
        begins by explaining the JavaScript language itself, in detail, from the
        bottom up. It then builds on that foundation to cover the web platform
        and Node.js.
      </p>
    </Container>
  );
};
