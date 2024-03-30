import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import ErrorPage from "./Pages/error-page";
import Journal from "./Pages/Journal";
import Book from "./Pages/Book";
import Songs from "./Pages/Songs";
import Graph from "./Pages/Graph";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/journal/",
//         element: <Journal />,
//       },
//       {
//         path: "/book/",
//         element: <Book />,
//       },
//       {
//         path: "/songs/",
//         element: <Songs />,
//       },
//       {
//         path: "/graph/",
//         element: <Graph />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="journal" element={<Journal />}></Route>
      <Route path="book" element={<Book />}></Route>
      <Route path="songs" element={<Songs />}></Route>
      <Route path="graph" element={<Graph />}></Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
