import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./Layout.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound.jsx"));
function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
