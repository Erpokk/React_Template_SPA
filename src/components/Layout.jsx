import { Suspense } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
