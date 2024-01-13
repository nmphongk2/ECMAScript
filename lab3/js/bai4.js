const findMinMax = () => {
    const numbers = [];

    
    for (let i = 1; i <= 3; i++) {
        let input = prompt(`Nhập số thứ ${i}:`);
     
        let number = parseFloat(input);

     
        while (isNaN(number)) {
            input = prompt(`Vui lòng nhập một số cho số thứ ${i}:`);
            number = parseFloat(input);
        }

        numbers.push(number);
    }


    const timLonNho = (a, b, c) => {
        let max, min;

        if (a >= b && a >= c) {
            max = a;
        } else if (b >= a && b >= c) {
            max = b;
        } else {
            max = c;
        }

        if (a <= b && a <= c) {
            min = a;
        } else if (b <= a && b <= c) {
            min = b;
        } else {
            min = c;
        }

        return { max, min };
    };

    const { max, min } = timLonNho(...numbers);


    console.log(`Số lớn nhất là: ${max}`);
    console.log(`Số nhỏ nhất là: ${min}`);
};

findMinMax();
