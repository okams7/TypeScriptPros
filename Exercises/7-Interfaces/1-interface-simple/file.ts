// تعريف واجهة Employee
interface Employee {
    name: string;
    age: number;
    position: string;
    salary: number;
}

// دالة لحساب الراتب السنوي
function calculateAnnualSalary(employee: Employee): number {
    return employee.salary * 12;
}

// إنشاء كائن من Employee
let employee: Employee = {
    name: "Ali",
    age: 30,
    position: "Software Developer",
    salary: 5000
};

// حساب الراتب السنوي
let annualSalary = calculateAnnualSalary(employee);

// عرض الراتب السنوي
console.log(`Annual salary of the employee ${employee.name} is: ${annualSalary}`);