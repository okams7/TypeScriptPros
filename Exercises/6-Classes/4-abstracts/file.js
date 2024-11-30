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
// تعريف الفئة المبهمة Shape
var Shape = /** @class */ (function () {
    // المُنشئ
    function Shape(name) {
        this.name = name;
    }
    return Shape;
}());
// الفئة الفرعية Rectangle التي ترث من Shape
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    // المُنشئ
    function Rectangle(width, height) {
        var _this = _super.call(this, "Rectangle") || this; // استدعاء المُنشئ من الفئة الأساسية
        _this.width = width;
        _this.height = height;
        return _this;
    }
    // تنفيذ دالة calculateArea لحساب المساحة
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
// الفئة الفرعية Circle التي ترث من Shape
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    // المُنشئ
    function Circle(radius) {
        var _this = _super.call(this, "Circle") || this; // استدعاء المُنشئ من الفئة الأساسية
        _this.radius = radius;
        return _this;
    }
    // تنفيذ دالة calculateArea لحساب المساحة
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
// اختبار البرنامج:
// إنشاء كائن من الفئة Rectangle
var rectangle = new Rectangle(5, 10);
console.log("Rectangle area: ".concat(rectangle.calculateArea())); // الناتج: مساحة المستطيل: 50
// إنشاء كائن من الفئة Circle
var circle = new Circle(7);
console.log("Circle area: ".concat(circle.calculateArea())); // الناتج: مساحة الدائرة: 153.93804002589985
