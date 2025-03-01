//ملف لجلب بيانات المنصات
import useDataQuery from "../hooks/useDataQuery";

const usePlatform = () =>
  useDataQuery({ endPoint: "/platforms/lists/parents" });
export default usePlatform;
