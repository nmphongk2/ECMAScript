const convertTemperature = (temperature, unit) => {
    if (unit === "C") {
        // Chuyển đổi Celsius sang Fahrenheit
        return (temperature * 9/5) + 32;
    } else if (unit === "F") {
        // Chuyển đổi Fahrenheit sang Celsius
        return (temperature - 32) * 5/9;
    } else {
        // Nếu đơn vị không hợp lệ
        return "Đơn vị nhiệt độ không hợp lệ";
    }
};

// Ví dụ sử dụng
const celsius = 25;
const fahrenheit = 77;

console.log(`${celsius} Celsius là ${convertTemperature(celsius, "C")} Fahrenheit`);
console.log(`${fahrenheit} Fahrenheit là ${convertTemperature(fahrenheit, "F")} Celsius`);
