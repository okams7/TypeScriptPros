// تعريف الدالة لحساب المساحة
function calculateArea(length: number, width: number,): number {
    return length * width; // حساب مساحة المستطيل
}

//مثال على استدعاء الدالة
let x = calculateArea(10, 5)
console.log("area of the rectangle is:", x)