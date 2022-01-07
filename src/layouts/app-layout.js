import React from "react";
import Helmet from "react-helmet";
import { Navbar } from "../components/Navbar";

export const AppLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <script src="/theme-switch.js" />
      </Helmet>
      <Navbar />
      {children}
    </>
  );
};
