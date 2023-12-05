/** @format */

import RootLayout from "@/Component/Layout/RootLayout";
import "../node_modules/highlight.js/styles/atom-one-dark-reasonable.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
