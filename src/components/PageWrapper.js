import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const PageWrapper = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="container page">{children}</main>
      <Footer />
    </Fragment>
  );
};

export default PageWrapper;
