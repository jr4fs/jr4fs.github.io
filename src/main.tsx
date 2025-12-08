import ReactDOM from "react-dom/client";
// import { createHashRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Travel from "./components/Travel/Travel.tsx";
import Home from "./components/Home.tsx";
import ResearchAssignment from "./components/ResearchAssignment.tsx";

import "@mantine/core/styles.css";
import "./index.scss";

import {
  MantineProvider,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";
import Art from "./components/Art/Art.tsx";
import PhdAdvice from "./components/Advice/PhdAdvice.tsx";

const purple: MantineColorsTuple = [
  "#f1f1ff",
  "#dfe2f3",
  "#bec2df",
  "#9ba0c9",
  "#7d83b7",
  "#6a70ad",
  "#6067a9",
  "#505794",
  "#464d86",
  "#3a4178",
];

const pink: MantineColorsTuple = [
  "#fdeffb",
  "#f1deec",
  "#debcd6",
  "#cb97be",
  "#ba79aa",
  "#b1659e",
  "#ad5b98",
  "#984b85",
  "#884277",
  "#783568",
];

const orange: MantineColorsTuple = [
  "#fff1e6",
  "#fbe2d5",
  "#eec3ad",
  "#e2a482",
  "#d8885d",
  "#d27745",
  "#d06e38",
  "#b85c2a",
  "#a55023",
  "#914419",
];

const blue: MantineColorsTuple = [
  "#e5f7ff",
  "#d6e9f9",
  "#b0cfeb",
  "#86b4dc",
  "#649dd0",
  "#4e8fc9",
  "#3f88c7",
  "#2f75b0",
  "#2368a0",
  "#095a8e",
];

const gray: MantineColorsTuple = [
  "#f5f5f5",
  "#e7e7e7",
  "#cdcdcd",
  "#b2b2b2",
  "#9a9a9a",
  "#8b8b8b",
  "#848484",
  "#717171",
  "#656565",
  "#575757",
];

const theme = createTheme({
  black: "#242424",
  colors: {
    purple: purple,
    pink: pink,
    orange: orange,
    blue: blue,
    gray: gray,
  },
  primaryColor: "pink",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App error={true} />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/travel",
        element: <Travel />,
      },
      {
        path: "/art",
        element: <Art />,
      },
      {
        path: "/applying-for-a-phd",
        element: <PhdAdvice />,
      },
      {
        path: "/research",
        element: <ResearchAssignment />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <RouterProvider router={router} />
  </MantineProvider>
);
