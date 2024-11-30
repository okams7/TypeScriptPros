// إنشاء كائن من Person
var person = {
    name: "Ahmed",
    age: 30,
    address: "Ramallah, Palestine"
};
// إنشاء كائن من Employee
var employee = {
    name: "Sara",
    age: 28,
    address: "Nablus, Palestine",
    employeeId: "E12345",
    position: "Software Engineer",
    salary: 5000,
    calculateAnnualSalary: function () {
        return this.salary * 12;
    }
};
// إنشاء كائن من Manager
var manager = {
    name: "John",
    age: 40,
    address: "Amman, Jordan",
    employeeId: "M98765",
    position: "Project Manager",
    salary: 7000,
    department: "IT",
    calculateAnnualSalary: function () {
        return this.salary * 12;
    },
    manageTeam: function () {
        console.log("".concat(this.name, " is managing the team in the ").concat(this.department, " department."));
    }
};
// اختبار البرنامج:
// عرض بيانات الشخص
console.log("Person Details:");
console.log("Name: ".concat(person.name, ", Age: ").concat(person.age, ", Address: ").concat(person.address));
// عرض بيانات الموظف
console.log("\nEmployee Details:");
console.log("Name: ".concat(employee.name, ", Position: ").concat(employee.position, ", Salary: ").concat(employee.salary));
console.log("Annual Salary: ".concat(employee.calculateAnnualSalary ? employee.calculateAnnualSalary() : 'N/A'));
// عرض بيانات المدير
console.log("\nManager Details:");
console.log("Name: ".concat(manager.name, ", Position: ").concat(manager.position, ", Department: ").concat(manager.department));
console.log("Annual Salary: ".concat(manager.calculateAnnualSalary ? manager.calculateAnnualSalary() : 'N/A'));
manager.manageTeam ? manager.manageTeam() : null;
