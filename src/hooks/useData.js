//كومبونانت للتنيم فقط نضع به الأكواد التي تلزمنا لكي نستخدمها بغير ملفات

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios, { CanceledError } from "axios";

const useData = (endpoint, requestConfig, deps) => {
  //استيراد الريكويست لوضعه ضمن الجيت تحت لجلب البيانات مرة اخرى عند الفلترة + جلب بارمتر تاني ليتم تحديث اليوس ايفيكت على اساسه
  //مررنا النهاية كبروبس ليتم استخدام هذا الملف من قبل عدة ملفات
  const [data, setData] = useState([]); //يوسستايت لتخزين البيانات فيها
  const [error, setError] = useState(false); //يوسستايتلتخزين الأخطاء
  const [isloading, setIsloading] = useState(false); //يوستايت لتخزين حالة تحميل البيانات قبل جلب البيانات السكيليتون
  useEffect(
    () => {
      const controller = new AbortController(); // هذه عملية لتسريع عمل الموقع والغاء تحميل الطلبات الغير منتهية
      //فائدتها بأنها عندما تنتقل من صفحة لأخرى والصفحة لازالت تقوم بتحميل بيانات من السيرفر يقوم بإلغائها عند الانتقال منها لكي لا يزيد الحمل على الموقع وكل صفحة انت فيها وتقوم بالانتقال منها يلغي التتحميل القائم والفلتر واي شيء شغال مع السيرفر بهدف تخفيف الحمل
      //فائدته منع التسرب الذاكري وتخفيف الحمل على الموقع والغاء الط\لبات غير المنتهية
      //------------------------------
      setIsloading(true);
      apiClient //جلب البيانات وتخزينها بالستايت
        .get(endpoint, { signal: controller.signal, ...requestConfig }) //القسم الاخر منها هو للكونترولر التي فوق
        //بالإضافة الى فك الريكوست ليتم جلبها عند الفلترة
        .then((res) => {
          setIsloading(false);

          setData(res.data.results);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return; //للكونترولر
          setError(err.message);
          setIsloading(false);
        });

      return () => controller.abort(); //للكنترولر
    },
    deps ? [...deps] : []
  ); //يتم اعادة جلب البيانات بناء على البارمتر هذا اذا كان موجود يتم فكه وعرضه وان لم يكن موجود لا يعيد تنفيذ اليوس ايفيكت
  return { data, error, isloading }; //إرسال الداتا فقط للملف الذي نريد استخدام البيانات فيها
};
export default useData;
