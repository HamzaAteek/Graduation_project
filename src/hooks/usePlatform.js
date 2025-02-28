//ملف لجلب بيانات المنصات
import useData from "../hooks/useData";

const usePlatform = () => useData("/platforms/lists/parents");
export default usePlatform;
