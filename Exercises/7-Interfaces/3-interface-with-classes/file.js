// تعريف الفئة EmployeeDetails التي تنفذ الواجهة Employee
var EmployeeDetails = /** @class */ (function () {
    // المُنشئ
    function EmployeeDetails(name, age, position, salary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }
    // تنفيذ دالة calculateAnnualSalary
    EmployeeDetails.prototype.calculateAnnualSalary = function () {
        return this.salary * 12;
    };
    return EmployeeDetails;
}());
// إنشاء كائن من الفئة EmployeeDetails
var employee = new EmployeeDetails("Ali", 30, "Software Developer", 5000);
// حساب الراتب السنوي
var annualSalary = employee.calculateAnnualSalary();
// عرض المعلومات
console.log("Employee name: ".concat(employee.name));
console.log("Position: ".concat(employee.position));
console.log("Monthly salary: ".concat(employee.salary));
console.log("Yearly salary: ".concat(annualSalary));
