/** @format */

import RootLayout from "@/Component/Layout/RootLayout";
import "../node_modules/highlight.js/styles/atom-one-dark-reasonable.css";
import "@/styles/globals.css";
import NavComponent from "@/Component/NavComponent/NavComponent";
import { Fragment } from "react";

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
