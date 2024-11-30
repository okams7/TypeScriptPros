// تعريف الفئة المبهمة Shape
abstract class Shape {
    // خاصية الاسم
    name: string;

    // المُنشئ
    constructor(name: string) {
        this.name = name;
    }

    // دالة مبهمة لحساب المساحة يجب أن يتم تنفيذها في الفئات الفرعية
    abstract calculateArea(): number;
}

// الفئة الفرعية Rectangle التي ترث من Shape
class Rectangle extends Shape {
    // الخصائص
    width: number;
    height: number;

    // المُنشئ
    constructor(width: number, height: number) {
        super("Rectangle"); // استدعاء المُنشئ من الفئة الأساسية
        this.width = width;
        this.height = height;
    }

    // تنفيذ دالة calculateArea لحساب المساحة
    calculateArea(): number {
        return this.width * this.height;
    }
}

// الفئة الفرعية Circle التي ترث من Shape
class Circle extends Shape {
    // الخاصية
    radius: number;

    // المُنشئ
    constructor(radius: number) {
        super("Circle"); // استدعاء المُنشئ من الفئة الأساسية
        this.radius = radius;
    }

    // تنفيذ دالة calculateArea لحساب المساحة
    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// اختبار البرنامج:

// إنشاء كائن من الفئة Rectangle
let rectangle = new Rectangle(5, 10);
console.log(`Rectangle area: ${rectangle.calculateArea()}`); // الناتج: مساحة المستطيل: 50

// إنشاء كائن من الفئة Circle
let circle = new Circle(7);
console.log(`Circle area: ${circle.calculateArea()}`); // الناتج: مساحة الدائرة: 153.93804002589985