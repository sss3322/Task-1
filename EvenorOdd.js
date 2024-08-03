function EvenorOdd(num){
    if(num%2 === 0){
        console.log(`The number is even`)
    }
    else{
        console.log(`The number is odd`)
    }
}

EvenorOdd(10);
EvenorOdd(3);

// Algorithm

// step 1 :Start
// step 2 :Read the integer 'num'
// step 3 :Calculate Remainder: remainder = num % 2.
// step 4 :Check if remainder is 0, then:
//             Print "The number is even"
//         else:
//             Print "The number is odd"
// step 5 :End