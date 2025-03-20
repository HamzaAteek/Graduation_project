import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; //ؤشمم the main tools from query library
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; //the update tool from raect
import "./index.css";
import GameProvider from "./hooks/GameProvider.jsx";

import { RouterProvider } from "react-router-dom"; //Call the property by which the routing will be performed.
import routers from "./pages/routes.jsx"; //call the page that contains the links to the pages

const queryClient = new QueryClient({
//Create a new object to use it within the project
  defaultOptions: {
//Modify default settings
    queries: {
      retry: 3, //عدد الطلبات الخاطئة قبل الاعلان عن الخطأ
      cacheTime: 10 * 1000000, //مدة الاحتفاظ بالبيانات بالكاش قبل حذفها
      staleTime: 10 * 10000, //المدة التي تعتبر البيانات جديدة فيه
      refetchOnMount: false, //إعادة بناء الكومبونانت
      refetchOnReconnect: false, //إعادة الجلب عند اعادة الاتصال
      refetchOnWindowFocus: false, //إعادة تحديث البيانات عند الانتقال من نافذة لأخرى
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routers} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </GameProvider>
  </StrictMode>
);
