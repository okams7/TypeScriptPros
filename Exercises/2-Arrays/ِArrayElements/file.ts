// 1. إنشاء مصفوفة تحتوي على أسماء الحيوانات
let animals: string[] = ["Cat", "Dog", "Elephant"];
console.log("Original Array:", animals);

// 2. إضافة عنصر في بداية المصفوفة
animals.unshift("Lion");
console.log("After adding to the beginning:", animals);

// 3. إضافة عنصر في نهاية المصفوفة
animals.push("Tiger");
console.log("After adding to the end:", animals);

// 4. إضافة عنصر في المكان الثاني (المؤشر 1)
animals.splice(1, 0, "Giraffe");
console.log("After adding at index 1:", animals);

// 5. حذف العنصر الأول
animals.shift();
console.log("After removing the first element:", animals);

// 6. حذف العنصر الأخير
animals.pop();
console.log("After removing the last element:", animals);

// 7. حذف العنصر في المكان الثالث (المؤشر 2)
animals.splice(2, 1);
console.log("After removing the element at index 2:", animals);
