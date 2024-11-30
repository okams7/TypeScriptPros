let result: number = 1;
const base = 2
const exponent = 3
// استخدام for loop لحساب القوة
for (let i = 1; i <= exponent; i++) {
    result *= base; // ضرب النتيجة الحالية بالعدد
}

console.log(`${base} raised to the power of ${exponent} is: ${result}`);