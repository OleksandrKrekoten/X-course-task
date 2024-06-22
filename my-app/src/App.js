// import { Signin } from "./components/Signin/Signin";

import { SpecificBook } from "./components/SpecificBook/SpecificBook";
import { Layout } from "./components/PageLayout/PageLayout.jsx";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage/ErrorPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<SpecificBook />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
