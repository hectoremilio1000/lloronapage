import React from "react";

import { GlobalStyle } from "./styles/globalStyles";
import Navbar from "./navbar";
import Footer from "../components/footer";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
