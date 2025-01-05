import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header/Header";
import Layout from "./Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const PortfolioPage = lazy(
  () => import("../pages/PortfolioPage/PortfolioPage")
);

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />

            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
