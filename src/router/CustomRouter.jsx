import LandingPage from "../pages/Landing/LandingPage.jsx";
import NotFoundPage from "../pages/NotFound/NotFoundPage.jsx";
import AboutUsPage from "../pages/AboutUs/AboutUsPage.jsx";

export const CustomRouter = [
  { path: "/", element: <LandingPage /> },
  { path: "/hakkimizda", element: <AboutUsPage /> },
  { path: "*", element: <NotFoundPage /> },
];
