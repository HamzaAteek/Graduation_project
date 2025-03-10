//Router file
import { createBrowserRouter } from "react-router-dom"; //Call the function responsible for handling the routing
import CardDetails from "./CardDetails";
import Layout from "./Layout";
import MainContent from "./MainContent";
const routers = createBrowserRouter([
  //Each object represents a specific page
  {
    path: "/",
    element: <Layout />,
    children: [
      //inner pages
      { index: true, element: <MainContent /> },
      { path: "/pages/CardDetails/:id", element: <CardDetails /> }, //pass the path with id
    ],
  },
]);
export default routers;
