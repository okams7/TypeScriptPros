// تعريف واجهة Person
interface Person {
    name: string;
    age: number;
    address: string;
}

// تعريف واجهة Employee التي ترث من Person
interface Employee extends Person {
    employeeId: string;
    position: string;
    salary: number;
    calculateAnnualSalary?(): number; // دالة لحساب الراتب السنوي (اختياري)
}

// تعريف واجهة Manager التي ترث من Employee
interface Manager extends Employee {
    department: string;
    manageTeam?(): void; // دالة لإدارة الفريق (اختياري)
}

// إنشاء كائن من Person
let person: Person = {
    name: "Ahmed",
    age: 30,
    address: "Ramallah, Palestine"
};

// إنشاء كائن من Employee
let employee: Employee = {
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
let manager: Manager = {
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
        console.log(`${this.name} is managing the team in the ${this.department} department.`);
    }
};

// اختبار البرنامج:

// عرض بيانات الشخص
console.log("Person Details:");
console.log(`Name: ${person.name}, Age: ${person.age}, Address: ${person.address}`);

// عرض بيانات الموظف
console.log("\nEmployee Details:");
console.log(`Name: ${employee.name}, Position: ${employee.position}, Salary: ${employee.salary}`);
console.log(`Annual Salary: ${employee.calculateAnnualSalary ? employee.calculateAnnualSalary() : 'N/A'}`);

// عرض بيانات المدير
console.log("\nManager Details:");
console.log(`Name: ${manager.name}, Position: ${manager.position}, Department: ${manager.department}`);
console.log(`Annual Salary: ${manager.calculateAnnualSalary ? manager.calculateAnnualSalary() : 'N/A'}`);
manager.manageTeam ? manager.manageTeam() : null;