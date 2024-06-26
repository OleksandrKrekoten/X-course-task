import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { BooksContext } from "../context/BooksContext.jsx";
import { SpecificBook } from "../components/SpecificBook/SpecificBook.jsx";
import { act } from "react";
import { createRoot } from "react-dom/client";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

const mockBooks = [
  {
    id: 1,
    title: "Mock Book Title",
    author: "Mock Author",
    level: "Intermediate",
    tags: ["tag1", "tag2"],
    price: 20,
    amount: 5,
    image: "",
    description: "Mock description of the book",
  },
];

const mockCartList = [];
const mockSetCartList = jest.fn();

const renderComponent = () => {
  let result;
  act(() => {
    result = createRoot(container).render(
      <MemoryRouter initialEntries={["/books/1"]}>
        <BooksContext.Provider
          value={[mockBooks, mockCartList, mockSetCartList]}
        >
          <Routes>
            <Route path="/books/:bookId" element={<SpecificBook />} />
          </Routes>
        </BooksContext.Provider>
      </MemoryRouter>
    );
  });

  return result;
};
describe("SpecificBook Component", () => {
  test("renders book details correctly", () => {
    renderComponent();
    expect(screen.getByText(/Mock Book Title/)).toBeInTheDocument();
    expect(screen.getByText(/Mock Author/)).toBeInTheDocument();
    expect(screen.getByText(/Intermediate/)).toBeInTheDocument();
    expect(screen.getByText(/tag1/)).toBeInTheDocument();
    expect(screen.getByText(/tag2/)).toBeInTheDocument();
    expect(screen.getByText(/\$20.00/)).toBeInTheDocument();
    expect(
      screen.getByText(/Mock description of the book/)
    ).toBeInTheDocument();
  });
  test("handles book count change", async () => {
    renderComponent();
    const countInput = screen.getByTestId(/count-input/);
    expect(screen.getByText(/\$20.00/)).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(countInput, { target: { value: "2" } });
    });
    expect(screen.getByText(/\$40.00/)).toBeInTheDocument();
  });
  test("prevents adding more books than available", () => {
    renderComponent();
    const countInput = screen.getByLabelText(/Count/);
    fireEvent.change(countInput, { target: { value: "10" } });
    expect(countInput.value).toBe("5");
  });
  test("handles adding a book to the cart", () => {
    renderComponent();
    const submitButton = screen.getByText(/Add to cart/);
    fireEvent.click(submitButton);
    expect(mockSetCartList).toHaveBeenCalledWith(expect.any(Function));
  });
});
