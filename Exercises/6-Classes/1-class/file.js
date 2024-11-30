// تعريف الفئة Person
var Person = /** @class */ (function () {
    // المُنشئ (constructor)
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // دالة للتعريف بالشخص
    Person.prototype.introduce = function () {
        if (this.address) {
            console.log("Hi, my name is ".concat(this.name, "\u060C age is ").concat(this.age, " years old and i live in ").concat(this.address, "."));
        }
        else {
            console.log("Hi, my name is ".concat(this.name, "\u060C age is ").concat(this.age, " years old."));
        }
    };
    return Person;
}());
// إنشاء كائنات من الفئة Person وتجربة السيناريوهات المختلفة
// كائن يحتوي على جميع الخصائص
var person1 = new Person("Ahmad", 30, "Tulkarm");
person1.introduce();
// كائن بدون الخاصية الاختيارية address
var person2 = new Person("Sarah", 25);
person2.introduce();
// كائن يحتوي فقط على الاسم والعمر
var person3 = new Person("Mohd", 40);
person3.introduce();
