let sum = 0; // متغير لتخزين المجموع
let number = 1; // بداية العد من الرقم 1

do {
    sum += number; // أضف الرقم الحالي إلى المجموع
    number++; // انتقل إلى الرقم التالي
} while (number <= 10); // استمر طالما الرقم أقل من أو يساوي 10

console.log(`the sum from 1 to 10 is ${sum}`);