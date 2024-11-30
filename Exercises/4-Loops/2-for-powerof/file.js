var result = 1;
var base = 2;
var exponent = 3;
// استخدام for loop لحساب القوة
for (var i = 1; i <= exponent; i++) {
    result *= base; // ضرب النتيجة الحالية بالعدد
}
console.log("".concat(base, " raised to the power of ").concat(exponent, " is: ").concat(result));
