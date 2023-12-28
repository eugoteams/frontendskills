/** @format */

import RootLayout from "@/Component/Layout/RootLayout";
import "@/styles/globals.css";
import NavComponent from "@/Component/NavComponent/NavComponent";
import { Fragment } from "react";
import "prismjs/themes/prism.css";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <NavComponent />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Fragment>
  );
}
