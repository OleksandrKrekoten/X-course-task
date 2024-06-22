import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { FlexWrapper } from "./PageLayout";
import { Cart } from "../Cart/Cart";

export const Layout = () => {
  return (
    <FlexWrapper>
      <Header />
      <Cart/>
      {/* <Outlet /> */}
      <Footer />
    </FlexWrapper>
  );
};
