import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/App.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import ModalProvider from "./context/ModalProvider.jsx";
import SearchPage from "@pages/SearchPage";
const MovieDetails = lazy(() => import("@pages/MovieDetails.jsx"));
const TvShowDetails = lazy(() => import("@pages/TvShowDetails.jsx"));
const PeopleDetailsPage = lazy(() => import("@pages/PeopleDetailsPage"));
import DiscoverPage from "./pages/DiscoverPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "/tv-show/:id",
        element: <TvShowDetails />,
      },

      {
        path: "/actor/:id",
        element: <PeopleDetailsPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },

      {
        path: "/discover",
        element: <DiscoverPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider router={router}></RouterProvider>
    </ModalProvider>
  </StrictMode>,
);
