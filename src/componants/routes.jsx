import { createBrowserRouter } from "react-router-dom"; //استدعاء الدالة المسؤولة عن معالجة التوجيه
import CardDetails from "./CardDetails";
import Layout from "./Layout";
import MainContent from "./MainContent";
const routers = createBrowserRouter([
  //كل كائن يمثل صفحة معينة
  {
    path: "/",
    element: <Layout />,
    children: [
      //الصفحات الداخلية
      { index: true, element: <MainContent /> },
      { path: "cardDetails/:id", element: <CardDetails /> },
    ],
  },
]);
export default routers;
