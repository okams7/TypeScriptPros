// تعريف الدالة لحساب المساحة
function calculateArea(shape, // نوع الشكل: مستطيل أو دائرة
length, // الطول (اختياري)
width, // العرض (اختياري)
radius // نصف القطر (افتراضي = 5)
) {
    if (radius === void 0) { radius = 5; }
    // تحقق من نوع الشكل
    if (shape === "rectangle") {
        if (length !== undefined && width !== undefined) {
            return length * width; // حساب مساحة المستطيل
        }
        else {
            return "Please pass length and width for the recatangle";
        }
    }
    else if (shape === "circle") {
        return Math.PI * Math.pow(radius, 2); // حساب مساحة الدائرة
    }
    else {
        return "the type of the shape is undefined, choose either a recangle or a circle";
    }
}
// أمثلة على استدعاء الدالة
// حساب مساحة مستطيل
console.log(calculateArea("rectangle", 10, 5)); // الناتج: 50
// حساب مساحة دائرة (نصف القطر الافتراضي = 5)
console.log(calculateArea("circle")); // الناتج: 78.53981633974483
// حساب مساحة دائرة مع تحديد نصف القطر
console.log(calculateArea("circle", undefined, undefined, 7)); // الناتج: 153.93804002589985
// محاولة حساب مستطيل بدون تقديم الطول والعرض
console.log(calculateArea("rectangle")); // الناتج: "يرجى توفير الطول والعرض لحساب مساحة المستطيل."
