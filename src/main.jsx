import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; //استيراد العناصر الاساسية من مكتبة الكويري
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; //أداة التطوير من ريأكت
import "./index.css";
import GameProvider from "./hooks/GameProvider.jsx";

import { RouterProvider } from "react-router-dom"; //استدعاء الخاصية التي عن طريقها سيتم التوجيه
import routers from "./pages/routes.jsx"; //استدعاء الصفحة التي بها اللينكات الخاصة بالصفحات

const queryClient = new QueryClient({
  ////إنشاء كائن جديد حتى نتمكن من استخدامه ضمن المشروع
  defaultOptions: {
    //تعديل الاعدادات الافتراضية
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
