import { SpecificBook } from "./components/SpecificBook/SpecificBook";
import { Layout } from "./components/PageLayout/PageLayout.jsx";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage/ErrorPage.jsx";
import { Signin } from "./components/Signin/Signin.jsx";
import { BookList } from "./components/BookList/BookList.jsx";
import { Cart } from "./components/Cart/Cart.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Signin />} />
        <Route path="book-list" element={<BookList />} />
        <Route path="book/:bookId" element={<SpecificBook />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
