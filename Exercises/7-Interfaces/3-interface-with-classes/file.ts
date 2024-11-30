// تعريف واجهة Employee
interface Employee {
    name: string;
    age: number;
    position: string;
    salary: number;
    calculateAnnualSalary(): number; // دالة لحساب الراتب السنوي
}

// تعريف الفئة EmployeeDetails التي تنفذ الواجهة Employee
class EmployeeDetails implements Employee {
    name: string;
    age: number;
    position: string;
    salary: number;

    // المُنشئ
    constructor(name: string, age: number, position: string, salary: number) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }

    // تنفيذ دالة calculateAnnualSalary
    calculateAnnualSalary(): number {
        return this.salary * 12;
    }
}

// إنشاء كائن من الفئة EmployeeDetails
let employee = new EmployeeDetails("Ali", 30, "Software Developer", 5000);

// حساب الراتب السنوي
let annualSalary = employee.calculateAnnualSalary();

// عرض المعلومات
console.log(`Employee name: ${employee.name}`);
console.log(`Position: ${employee.position}`);
console.log(`Monthly salary: ${employee.salary}`);
console.log(`Yearly salary: ${annualSalary}`);