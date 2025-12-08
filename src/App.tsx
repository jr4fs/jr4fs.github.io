import { Stack } from "@mantine/core";
import "./App.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

function App(props: any) {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ScrollToHashElement />
      <Nav home={pathname === "/"} />
      <Stack id="app">
        {props.error ? <Error /> : <Outlet />}
        <Footer />
      </Stack>
    </>
  );
}

export default App;
