//This file is to control the size of the image through the link followed by adding the number we want to set its size

import noImage from "../assets/images/noImage.jpg"; //If there is no image available, we put a default image in its place.

//This function is tasked with modifying the image link that will be sent to it.
const getCroppedImageUrl = (url) => {
  if (!url) return noImage;
  const target = "media/"; //للتنظيم استبدال كلمة ميديا بمتغير لتنظيم الكود
  const index = url.indexOf(target) + target.length; //البحث عن هذه الكلمة ضمن الرابط ومعرفة الدليل تبعها وتخزينه بالمتغير بالإضافة لطول الكلمة نفسها (ليتم الأضافة بعد هذه الكلمة)
  return url.slice(0, index) + "crop/600/400/" + url.slice(index); //بهذه التعليمة جلب الرابط من الأول الى نهاية كلمة الميديا واضاف عليها كلمة الحجم التي تحدد الحجم بالإضافة الى الباقي من الكود من الميديا الى النهاية باعتبار اننا خزنا الدليل تبع الميديا بالاندكس
};
export default getCroppedImageUrl;
//To export this function to be seen in non-files
