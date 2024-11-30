var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// الفئة الأساسية Vehicle
var Vehicle = /** @class */ (function () {
    // المُنشئ
    function Vehicle(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    // دالة لعرض المعلومات
    Vehicle.prototype.displayInfo = function () {
        console.log("Car: ".concat(this.brand, " ").concat(this.model, ", year ").concat(this.year));
    };
    return Vehicle;
}());
// الفئة الفرعية Car التي ترث من Vehicle
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    // المُنشئ
    function Car(brand, model, year, isElectric) {
        var _this = _super.call(this, brand, model, year) || this; // استدعاء المُنشئ من الفئة الأساسية
        _this.isElectric = isElectric;
        return _this;
    }
    // دالة لعرض المعلومات مع إضافة ما إذا كانت السيارة كهربائية أم لا
    Car.prototype.displayInfo = function () {
        var electricStatus = this.isElectric ? "Electric" : "Not Electric";
        console.log("Car: ".concat(this.brand, " ").concat(this.model, ", year ").concat(this.year, " and its ").concat(electricStatus));
    };
    return Car;
}(Vehicle));
// اختبار البرنامج:
// إنشاء كائن من الفئة Vehicle
var vehicle1 = new Vehicle("Toyota", "Corolla", 2020);
vehicle1.displayInfo();
// إنشاء كائن من الفئة Car
var car1 = new Car("Tesla", "Model S", 2023, true);
car1.displayInfo();
// إنشاء كائن من الفئة Car (غير كهربائية)
var car2 = new Car("Ford", "Mustang", 2022, false);
car2.displayInfo();
