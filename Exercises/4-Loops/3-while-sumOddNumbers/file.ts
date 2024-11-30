let sum: number = 0;
let i: number = 1;

// استخدام while loop للعد من 1 إلى 50
while (i <= 50) {
    if (i % 2 !== 0) { // تحقق إذا كان الرقم فردياً
        sum += i; // إضافة الرقم الفردي إلى المجموع
    }
    i++; // زيادة العداد
}

console.log("Sum of odd numbers between 1 and 50 is:", sum);