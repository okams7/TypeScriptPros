// 1. إنشاء Tuple تحتوي على اسم، عمر، وحالة اجتماعية
let person: [string, number, boolean] = ["Alice", 25, true];
console.log("Original Tuple:", person);

// 2. إضافة عنصر جديد إلى الـ Tuple (مثل الوظيفة)
person.push("Engineer");
console.log("After adding a new element:", person);

// 3. تحديث العمر داخل الـ Tuple (زيادة العمر بمقدار 5 سنوات)
person[1] += 5;
console.log("After updating the age:", person);

// 4. حذف العنصر الأخير من الـ Tuple (الوظيفة)
person.pop();
console.log("After removing the last element:", person);