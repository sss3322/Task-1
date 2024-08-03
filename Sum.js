function Sum(num){
    let sum=0
    while(num>0){
        sum +=num % 10
        num = Math.floor(num/10)
    }
    console .log("Sum of digits:", sum)
}

Sum(123)
Sum(568)

// Algorithm

// step 1:start
// step 2:Input integer num
// step 3:Set sum to 0
// step 4:Loop:Add the last digit of num to sum (num % 10)
//             Remove the last digit from num (num = num /10)
//             Repeat until num becomes 0.
// step 5:Print the sum
// step 6:End