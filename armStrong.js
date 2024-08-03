function isArmstrong(num) {
    const digits = num.toString().length;
    let sum = 0;
    let temp = num;

    while (temp > 0) {
        const remainder = temp % 10;
        sum += remainder ** digits;
        temp = Math.floor(temp / 10); 
    }

    console.log(sum === num ? `${num} is an Armstrong number` : `${num} is not an Armstrong number`);
}
isArmstrong(153);
isArmstrong(123); 


// Algorithm

// 1.Input a positive integer num
// 2.Find the number of digits in num
// 3.Initialize Sum: Set sum to 0
// 4.Loop:
//     Get the last digit of num using num % 10
//     Add the last digit raised to the power of the number of digits to sum
//     Remove the last digit from num using integer division
//     Repeat until num becomes 0
// 5.Check Armstrong: If sum equals the original number, it is an Armstrong number
// 6.Output: Print whether the number is an Armstrong number or not