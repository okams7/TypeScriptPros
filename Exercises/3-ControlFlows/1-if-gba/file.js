// تعريف المصفوفة التي تحتوي على أربع علامات
var grades = [95, 88, 92, 90];
// حساب المعدل
var average = (grades[0] + grades[1] + grades[2] + grades[3]) / grades.length;
// تصنيف المعدل باستخدام if statements
if (average >= 90 && average <= 100) {
    console.log("Average: ".concat(average.toFixed(2)));
    console.log("Excellent");
}
else if (average >= 75 && average < 90) {
    console.log("Average: ".concat(average.toFixed(2)));
    console.log("Very Good");
}
else if (average >= 65 && average < 75) {
    console.log("Average: ".concat(average.toFixed(2)));
    console.log("Good");
}
else if (average >= 50 && average < 65) {
    console.log("Average: ".concat(average.toFixed(2)));
    console.log("Pass");
}
else if (average < 50) {
    console.log("Average: ".concat(average.toFixed(2)));
    console.log("Fail");
}
