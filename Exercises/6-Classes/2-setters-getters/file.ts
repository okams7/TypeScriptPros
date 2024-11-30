// تعريف الفئة Book
class Book {
    // الخصائص الخاصة (Private)
    private _title: string;
    private _author: string;
    private _publisher: string;
    private _isbn: string;

    // المُنشئ (Constructor)
    constructor(title: string, author: string, publisher: string, isbn: string) {
        this._title = title;
        this._author = author;
        this._publisher = publisher;
        this._isbn = isbn;
    }

    // دوال Getter لإرجاع القيم
    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get publisher() {
        return this._publisher;
    }

    get isbn() {
        return this._isbn;
    }

    // دوال Setter لتحديث القيم
    set title(newValue: string) {
        this._title = newValue;
    }

    set author(newValue: string) {
        this._author = newValue;
    }

    set publisher(newValue: string) {
        this._publisher = newValue;
    }

    set isbn(newValue: string) {
        this._isbn = newValue;
    }

    // خاصية Setter لتحديث كافة القيم دفعة واحدة
    set fullDetails(newValue: string) {
        const parts = newValue.split(",");
        if (parts.length !== 4) {
            throw new Error("Wrong format. Expected format: 'Title,Author,Publisher,ISBN'");
        }
        this._title = parts[0];
        this._author = parts[1];
        this._publisher = parts[2];
        this._isbn = parts[3];
    }
}

// إنشاء كائن من الفئة Book
let book = new Book("JavaScript Guide", "John Doe", "TechPress", "123-456-789");

// استخدام الـ Getter لطباعة اسم المؤلف
console.log("Author:", book.author); // الناتج: Author: John Doe

// استخدام الـ Setter لتحديث اسم الناشر
book.publisher = "CodePress";
console.log("Updated Publisher:", book.publisher); // الناتج: Updated Publisher: CodePress

// استخدام الخاصية fullDetails لتحديث كافة التفاصيل
book.fullDetails = "TypeScript Basics,Jane Smith,LearnCode,987-654-321";

// طباعة كافة التفاصيل باستخدام الـ Getter
console.log(
    `Book Details: ${book.title}, ${book.author}, ${book.publisher}, ${book.isbn}`
);
// الناتج: Book Details: TypeScript Basics, Jane Smith, LearnCode, 987-654-321