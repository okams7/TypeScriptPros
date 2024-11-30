// دالة لحساب الراتب السنوي
function calculateAnnualSalary(employee) {
    return employee.salary * 12;
}
// إنشاء كائن من Employee
var employee = {
    name: "Ali",
    age: 30,
    position: "Software Developer",
    salary: 5000
};
// حساب الراتب السنوي
var annualSalary = calculateAnnualSalary(employee);
// عرض الراتب السنوي
console.log("Annual salary of the employee ".concat(employee.name, " is: ").concat(annualSalary));
