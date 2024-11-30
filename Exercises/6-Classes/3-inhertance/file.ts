// الفئة الأساسية Vehicle
class Vehicle {
    // الخصائص
    brand: string;
    model: string;
    year: number;

    // المُنشئ
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // دالة لعرض المعلومات
    displayInfo(): void {
        console.log(`Car: ${this.brand} ${this.model}, year ${this.year}`);
    }
}

// الفئة الفرعية Car التي ترث من Vehicle
class Car extends Vehicle {
    // الخاصية الإضافية
    isElectric: boolean;

    // المُنشئ
    constructor(brand: string, model: string, year: number, isElectric: boolean) {
        super(brand, model, year); // استدعاء المُنشئ من الفئة الأساسية
        this.isElectric = isElectric;
    }

    // دالة لعرض المعلومات مع إضافة ما إذا كانت السيارة كهربائية أم لا
    displayInfo(): void {
        let electricStatus = this.isElectric ? "Electric" : "Not Electric";
        console.log(`Car: ${this.brand} ${this.model}, year ${this.year} and its ${electricStatus}`);
    }
}

// اختبار البرنامج:

// إنشاء كائن من الفئة Vehicle
let vehicle1 = new Vehicle("Toyota", "Corolla", 2020);
vehicle1.displayInfo();

// إنشاء كائن من الفئة Car
let car1 = new Car("Tesla", "Model S", 2023, true);
car1.displayInfo();

// إنشاء كائن من الفئة Car (غير كهربائية)
let car2 = new Car("Ford", "Mustang", 2022, false);
car2.displayInfo();