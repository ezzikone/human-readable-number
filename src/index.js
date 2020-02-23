module.exports = function toReadable(number) {
    let compare = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety"
    };
    let hundred = Math.trunc(number / 100);
    let ten = Math.trunc((number - hundred * 100) / 10) * 10;
    let one = number - hundred * 100 - ten;
    if (ten === 10) {
        ten = ten + one;
        one = "";
    }

    if (hundred > 0 && ten > 0 && one < 1) {
        return `${compare[hundred + ""]} hundred ${compare[ten + ""]}`;
    } else if (hundred > 0 && ten > 0) {
        return `${compare[hundred + ""]} hundred ${compare[ten + ""]} ${
            compare[one + ""]
        }`;
    } else if (hundred > 0 && one < 1) {
        return `${compare[hundred] + ""} hundred`;
    } else if (hundred > 0) {
        return `${compare[hundred] + ""} hundred ${compare[one + ""]}`;
    } else if (ten > 0 && one < 1) {
        return `${compare[ten + ""]}`;
    } else if (ten > 0) {
        return `${compare[ten + ""]} ${compare[one + ""]}`;
    } else {
        return `${compare[one + ""]}`;
    }
};
