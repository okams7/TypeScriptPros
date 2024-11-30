let day = 3
switch (day) {
    // تجميع الأيام من 1 إلى 5 في حالة واحدة
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Business Hours");
        break;
    case 6:
        console.log("Weekend - Saturday");
        break;
    case 7:
        console.log("Weekend - Sunday");
        break;
    default:
        console.log("Invalid day number");
}