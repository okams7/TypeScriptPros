let temperature = 20
switch (true) {
    case (temperature >= -10 && temperature <= 0):
        console.log("Freezing");
        break;
    case (temperature >= 1 && temperature <= 10):
        console.log("Cold");
        break;
    case (temperature >= 11 && temperature <= 20):
        console.log("Cool");
        break;
    case (temperature >= 21 && temperature <= 30):
        console.log("Warm");
        break;
    case (temperature >= 31 && temperature <= 40):
        console.log("Hot");
        break;
    case (temperature > 40):
        console.log("Very Hot");
        break;
    default:
        console.log("Invalid temperature");
}