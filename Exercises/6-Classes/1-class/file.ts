// تعريف الفئة Person
class Person {
    // خصائص الفئة
    name: string; // اسم الشخص
    age: number; // عمر الشخص
    address?: string; // العنوان (اختياري)

    // المُنشئ (constructor)
    constructor(name: string, age: number, address?: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // دالة للتعريف بالشخص
    introduce() {
        if (this.address) {
            console.log(
                `Hi, my name is ${this.name}، age is ${this.age} years old and i live in ${this.address}.`
            );
        } else {
            console.log(`Hi, my name is ${this.name}، age is ${this.age} years old.`)
        }
    }
}

// إنشاء كائنات من الفئة Person وتجربة السيناريوهات المختلفة

// كائن يحتوي على جميع الخصائص
const person1 = new Person("Ahmad", 30, "Tulkarm");
person1.introduce();

// كائن بدون الخاصية الاختيارية address
const person2 = new Person("Sarah", 25);
person2.introduce();

// كائن يحتوي فقط على الاسم والعمر
const person3 = new Person("Mohd", 40);
person3.introduce();