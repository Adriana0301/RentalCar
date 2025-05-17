import { Suspense } from "react";
import { Loader } from "../Loader/Loader.jsx";
import { Header } from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Toaster />
      <Suspense fallback={<Loader />}>
        <Header />
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
