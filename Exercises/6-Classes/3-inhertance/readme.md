اكتب برنامجًا باستخدام TypeScript يحتوي على فئة أساسية باسم Vehicle وفئة فرعية باسم Car.

المتطلبات:

فئة Vehicle:

تحتوي على الخصائص التالية:

brand (الماركة) من النوع string.

model (الموديل) من النوع string.

year (سنة الصنع) من النوع number.

تحتوي على مُنشئ (constructor) لتعيين قيم هذه الخصائص عند إنشاء الكائن.

تحتوي على دالة displayInfo() لعرض معلومات المركبة بصيغة:

"المركبة: [brand] [model] سنة [year]".

فئة Car (التي ترث من Vehicle):

تحتوي على خاصية إضافية:

isElectric (هل هي كهربائية؟) من النوع boolean.

تحتوي على مُنشئ (constructor) لاستقبال قيم الخصائص الخاصة بـ Car،

 بالإضافة إلى القيم التي يتم وراثتها من Vehicle.

تحتوي على دالة displayInfo() يتم فيها إضافة معلومات عن كون السيارة كهربائية أو لا.
اختبر البرنامج:

أنشئ كائن من فئة Vehicle وكائن آخر من فئة Car.

استخدم دالة displayInfo() في كلا الكائنين لعرض المعلومات.

المخرجات المتوقعة:

إذا كان الكائن من Vehicle:

يتم عرض معلومات المركبة بدون ذكر ما إذا كانت كهربائية أو لا.
إذا كان الكائن من Car:

يتم عرض معلومات المركبة مع إضافة كلمة "كهربائية" إذا كانت السيارة كهربائية.
الملاحظات:

تأكد من استخدام الوراثة (extends) بشكل صحيح لتمكين فئة Car من الاستفادة من خصائص ودوال فئة Vehicle.