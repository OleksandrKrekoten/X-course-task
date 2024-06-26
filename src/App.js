import { SpecificBook } from "./components/SpecificBook/SpecificBook";
import { Layout } from "./components/PageLayout/PageLayout.jsx";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage/ErrorPage.jsx";
import { Signin } from "./components/Signin/Signin.jsx";
import { BookList } from "./components/BookList/BookList.jsx";
import { Cart } from "./components/Cart/Cart.jsx";
import { PrivateRoute } from "./route/PrivateRoute.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Signin />} />
        <Route
          path="book-list"
          element={<PrivateRoute redirectTo="/" component={<BookList />} />}
        />{" "}
        <Route
          path="book/:bookId"
          element={<PrivateRoute redirectTo="/" component={<SpecificBook />} />}
        />
        <Route
          path="cart"
          element={<PrivateRoute redirectTo="/" component={<Cart />} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
