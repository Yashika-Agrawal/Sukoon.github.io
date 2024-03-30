import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/error-page";
import Journal from "./Pages/Journal";
import Book from "./Pages/Book";
import Songs from "./Pages/Songs";
import Graph from "./Pages/Graph";
import { Auth0Provider } from "@auth0/auth0-react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/journal/",
        element: <Journal />,
      },
      {
        path: "/book/",
        element: <Book />,
      },
      {
        path: "/songs/",
        element: <Songs />,
      },
      {
        path: "/graph/",
        element: <Graph />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <Auth0Provider
    domain="dev-p62snphmilochw0v.us.auth0.com"
    clientId="7kw8xfXc9qKgsEXNIGUofZk7kVv31JAx"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
