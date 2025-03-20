//this component for proocessing every page in app
import { createBrowserRouter } from "react-router-dom";
import CardDetails from "./CardDetails";
import Layout from "./Layout";
import MainContent from "./MainContent";
import MainError from "./MainError";
import LandingPage from "./LandingPage";

const errorMessage = {//this object for display the letter in every error page
  bodyError: "Oops! The Cards page not found",
  MainError: "Oops! The page you're looking for doesn't exist.",
  cardDetails: "Oops! The Card Details page not found",
};

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <MainError text={errorMessage.MainError} />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        errorElement: <MainError text={errorMessage.MainError} />,
      },

      {
        path: "/pages/MainContent",
        element: <MainContent />,
        errorElement: <MainError text={errorMessage.bodyError} />,
      },
      {
        path: "CardDetails/:id",
        element: <CardDetails />,
        errorElement: <MainError text={errorMessage.cardDetails} />,
      },
    ],
  },
]);

export default routers;
